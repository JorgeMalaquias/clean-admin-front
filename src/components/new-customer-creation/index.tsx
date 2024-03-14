import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./style";
//import { useAppSelector } from "../../redux/hooks";

function NewCustomerCreation(){
    const [formNewItemSelected,setFormNewItemSelected] = useState(false);
    const [items,setItems]=useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    });

    return(
         <Style.Container>
            
         </Style.Container>
    );
}

export default NewCustomerCreation;