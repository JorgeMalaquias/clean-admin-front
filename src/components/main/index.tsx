import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import NewCustomerCreation, { Customer } from "../new-customer-creation";
import Style from "./style";
//import { useAppSelector } from "../../redux/hooks";
type Position = {
  id: number;
  name: string;
  routePosition: number;
  email: string;
};

function Main() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [positions, setPositions] = useState<Position[]>([]);
  const { register, handleSubmit, getValues, reset } = useForm();

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
  function getRoute() {
    axios
      .get(`${import.meta.env.VITE_API_URL}/localizations`)
      .then((response) => {
        setPositions(response.data);
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
          <button onClick={getRoute}>
            Visualizar rota mais curta de visitação de clientes
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
              <div key={customer.id}>
                <div>{customer.email}</div>
                <div>{customer.name}</div>
                <div>
                  Localização: (<span>{customer.x}</span>,
                  <span>{customer.y}</span>)
                </div>
              </div>
            ))}
          </div>
        )}
        {positions.length > 0 && (
          <div>
            {positions.map((position) => (
              <div key={position.id}>
                <div>{position.name}</div>
                <div>{position.email}</div>
                <div>{position.routePosition}º</div>
              </div>
            ))}
          </div>
        )}
      </Style.Container2>
    </Style.Container>
  );
}

export default Main;
