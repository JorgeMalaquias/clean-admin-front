import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import NewCustomerCreation, { Customer } from "../new-customer-creation";
import Style from "./style";
//import { useAppSelector } from "../../redux/hooks";

function Main() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const { register, handleSubmit, getValues, reset } = useForm();

  useEffect(() => {});
  function getAllCustomers() {
    axios
      .get(`${import.meta.env.VITE_API_URL}/customers`)
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
  function getCustomersByFilter() {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/customers/by${getValues(
          "filter"
        )}/${getValues("filterValue")}`
      )
      .then((response) => {
        setCustomers(response.data);
        reset({ filterValue: "" });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  return (
    <Style.Container>
      <main>Clean Admin</main>
      <Style.Container2>
        <div>
          <button onClick={getAllCustomers}>
            Visualizar todos os clientes
          </button>
          <form onSubmit={handleSubmit(getCustomersByFilter)}>
            <label htmlFor="">Filtrar clientes por:</label>
            <select {...register("filter")}>
              <option value="Name">nome</option>
              <option value="Email">email</option>
              <option value="Phone">telefone</option>
            </select>
            <input type="text" {...register("filterValue")} />
            <button type="submit">Visualizar clientes</button>
          </form>
          <NewCustomerCreation />
        </div>
        {customers.length > 0 && (
          <div>
            {customers.map((customer) => (
              <div key={customer.id}>{customer.email}</div>
            ))}
          </div>
        )}
      </Style.Container2>
    </Style.Container>
  );
}

export default Main;
