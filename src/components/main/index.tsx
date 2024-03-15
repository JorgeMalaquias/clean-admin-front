import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewCustomerCreation from "../new-customer-creation";
import SearchCustomerByFilter from "../search-customer-by-filter";
import Style from "./style";
//import { useAppSelector } from "../../redux/hooks";

function Main(){

    return(
         <Style.Container>
            <main>Clean Admin</main>
            <SearchCustomerByFilter/>
            <NewCustomerCreation/>
         </Style.Container>
       
        
    );
}

export default Main;