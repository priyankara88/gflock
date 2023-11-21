// import {} from "../libs/shoppingitem";

import { useColor } from "../context/ColorContext";
import useFilter from "../hooks/useFilter";
import FilterSectionUnit from "./FilterSectionUnit";

const FilterSection = () => {
  const [filter, setFilter] = useFilter();
  const [filterColor, setFilterColor] = useColor();
  // const ItemCardData = Object.entries(ItemFetch);
  return (
    <div className="w-full hidden md:block">
      {/* color */}
      <hr />
      <FilterSectionUnit
        Dataset={Object.entries(filterColor.Color)}
        title={"color"}
        limit={10}
      />
      <hr />
      {/* Size */}
      <FilterSectionUnit
        Dataset={Object.entries(filterColor.Size)}
        title={"size"}
        limit={8}
      />
      <hr />
      {/* category */}
      <FilterSectionUnit
        Dataset={Object.entries(filterColor.Category)}
        title={"category"}
        limit={10}
      />
    </div>
  );
};

export default FilterSection;
