import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayoute from "../layouts/MainLayoute";
import Home from "../pages/Home";
import UniqProduct from "../pages/UniqProduct";

const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={MainLayoute}>
            <Route index Component={Home} />
            <Route path="Shop-Now" Component={Home} />
            <Route path="Single-Product" Component={UniqProduct} />
            <Route path="Contact-Us" Component={Home} />
            <Route path="New-Arrival" Component={Home} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
