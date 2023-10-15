import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {

    return (

           <>
           {<Header/>}
            <Outlet/>
            <div>Rodape</div>

            </>
            )
}

export default Layout