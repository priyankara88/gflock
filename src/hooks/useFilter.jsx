import { useContext } from "react";
import { FilterContext } from "../context/filterContext";

const useFilter = () => {
  const { filter, setFilter } = useContext(FilterContext);
  return [filter, setFilter];
};

export default useFilter;
