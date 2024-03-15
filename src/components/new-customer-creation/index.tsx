import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Style from "./style";
//import { useAppSelector } from "../../redux/hooks";

function NewCustomerCreation() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  function submit(data: any) {
    axios
      .post(`${import.meta.env.VITE_API_URL}/customers`, data)
      .then(() => {
        alert("Cliente cadastrado com sucesso");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  return (
    <Style.Container>
      <h1>Novo cliente</h1>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          Nome:
          <input type="text" defaultValue="" {...register("name")} required />
        </label>
        <label>
          Email:
          <input type="text" defaultValue="" {...register("email")} required />
        </label>
        <label>
          Telefone:
          <input
            type="number"
            defaultValue=""
            {...register("phone")}
            required
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </Style.Container>
  );
}

export default NewCustomerCreation;
