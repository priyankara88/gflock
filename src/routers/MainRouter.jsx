import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayoute from "../layouts/MainLayoute";
import Home from "../pages/Home";

const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={MainLayoute}>
            <Route index Component={Home} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
