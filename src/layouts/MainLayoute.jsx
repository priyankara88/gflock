import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayoute = () => {
  return (
    <div>
      <Header />
      <Outlet />
      footer
    </div>
  );
};

export default MainLayoute;
