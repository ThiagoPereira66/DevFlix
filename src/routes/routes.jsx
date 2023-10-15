import { Route, Routes } from "react-router-dom";

//importar as paginas
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Series from "../pages/Series";
import Layout from "../layout/Layouts";


// criar os caminhos
function Rotas() {

    return (
        <Routes >
            <Route element={<Layout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/filmes" element={<Movies />} />
                <Route path="/series" element={<Series />} />
            </Route>
        </Routes>
    )
}

export default Rotas