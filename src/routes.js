import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Header from "./Components/Header";
import Blog from "./Components/Blog";
import Listagem from "./Components/Listagem";
import Team from "./Components/Team";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Team }  path="/team"  />
           <Route component = { Listagem }  path="/" exact />
           <Route component = { Blog }  path="/blog" />
       </BrowserRouter>
   )
}

export default Routes;