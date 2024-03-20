import axios from "axios";
import { useForm } from "react-hook-form";
import Style from "./style";
//import { useAppSelector } from "../../redux/hooks";

export type Customer = {
  id: string;
  name: string;
  email: string;
  phone: number;
  x: number;
  y: number;
};

function NewCustomerCreation() {
  const { register, handleSubmit, reset } = useForm();

  function submit(data: any) {
    axios
      .post(`${import.meta.env.VITE_API_URL}/customers`, {
        ...data,
        localization: { x: data.x, y: data.y },
      })
      .then(() => {
        alert("Cliente cadastrado com sucesso");
        reset();
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
          <input
            type="text"
            defaultValue=""
            placeholder="Nome"
            {...register("name")}
            required
          />
        </label>
        <label>
          <input
            type="text"
            defaultValue=""
            placeholder="Email"
            {...register("email")}
            required
          />
        </label>
        <label>
          <input
            type="number"
            defaultValue=""
            placeholder="Telefone"
            {...register("phone")}
            required
          />
        </label>
        <label>
          Localização (x,y):
          <input
            type="number"
            defaultValue=""
            placeholder="x"
            {...register("x")}
            required
          />
          <input
            type="number"
            defaultValue=""
            placeholder="y"
            {...register("y")}
            required
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </Style.Container>
  );
}

export default NewCustomerCreation;
