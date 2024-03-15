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
    alert(JSON.stringify(data));
  }

  return (
    <Style.Container>
      <h1>Novo cliente</h1>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          Nome:
          <input type="text" {...register("name")} />
        </label>
        <label>
          Email:
          <input type="text" {...register("email")} />
        </label>
        <label>
          Telefone:
          <input type="text" {...register("phone")} />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </Style.Container>
  );
}

export default NewCustomerCreation;
