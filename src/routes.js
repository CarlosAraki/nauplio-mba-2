import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Header from "./Components/Header";
import Listagem from "./Components/Listagem";
import Blog from "./Components/Blog";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Blog }  path="/blog"  />
           <Route component = { Listagem }  path="/" exact />
       </BrowserRouter>
   )
}

export default Routes;