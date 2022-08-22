import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  update,
  updateFilterQuery,
  updateUrlQuery,
} from "../features/filterOptions/filterOptionsSlice.js";

const FiltersNew = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((store) => store.filterOptions.searchQuery);
  const query = useSelector((store) => store.filterOptions.query);
  const dishes = useSelector((store) => store);
  const urlQuery = useSelector((store) => store.filterOptions.urlQuery);
  const filterOptions = useSelector(
    (store) => store.filterOptions.filterOptions
  );
  const [searchBar, setSearchBar] = useState("");
  const [toggle, setIsToggle] = useState(false);

  const handleCheckboxChange = (data) => {
    console.log("handlechange");
    dispatch(update(data));
  };

  useEffect(() => {
    const clicked = filterOptions.filter((item) => item.clicked === true);
    if (clicked) {
      console.log(clicked);
      dispatch(updateFilterQuery(clicked));
    }
  }, [filterOptions]);

  useEffect(() => {
    console.log("changing url query");
    dispatch(updateUrlQuery());
  }, [query, searchQuery]);

  return (
    <>
      <div className="ml-96 mt-8 pl-8">
        <div
          className=" flex flex-col items-center 
              justify-center   rounded "
        >
          <form>
            <div className="flex h-56 grid grid-cols-3 gap-2 content-center ">
              {filterOptions?.map((data, index) => (
                <>
                  <div className=" flex-child ">
                    <a
                      href="#!"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    ></a>
                    <div className="p-6">
                      <img
                        key={`cb-${index}`}
                        value={data.value}
                        type="checkbox"
                        onClick={() => handleCheckboxChange(data)}
                        className="object-contain h-28 w-58"
                        src={
                          data.clicked === false
                            ? data.notActiveImg
                            : data.activeImg
                        }
                        alt="Sunset in the mountains"
                      />
                    </div>
                  </div>
                </>
              ))}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FiltersNew;
