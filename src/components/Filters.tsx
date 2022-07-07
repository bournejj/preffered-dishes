import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  updateFilterOptions,
  updateFilterQuery,
  updateSearchQuery,
} from "../redux/actions/main";

const FiltersNew = () => {
  const dispatch = useDispatch();
  const dishes = useSelector((store) => store);

  const checkBoxes = useSelector((store) => store.main.checkBoxes);
  const filterOptions = useSelector((store) => store.main.filterOptions);
  const [searchBar, setSearchBar] = useState("");
  const [toggle, setIsToggle] = useState(false);

  // With this useState I wan't to collect the checked checkboxes

  const query = "";

  // This is my handler method that gets triggered when a checkbox get's checked/unchecked
  // ..and toggles the state of the checkbox
  const handleCheckboxChange = (data) => {
    //
    dispatch(updateFilterOptions(data));

    // }
    // console.log(isChecked);
  };

  console.log(dishes);

  const INITIAL_STATE = {
    search: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    let keys = Object.keys(formData).join("");
    const value = Object.values(formData).join("");
    keys += "?=";
    const search = (keys += value);
    console.log(search);
    dispatch(updateSearchQuery(search));

    // dispatch(updateSearchQuery(formData, filterQuery));

    // dispatch(updateSearchAndFilterQuery());
  };

  useEffect(() => {
    // declare the data fetching function
    const clicked = filterOptions.filter((item) => item.clicked === true);
    if (clicked) {
      console.log(clicked);
      dispatch(updateFilterQuery(clicked));
    }

    // call the function
    // fetchData()
  }, [filterOptions]);

  return (
    <>
      <div
        className=" flex flex-col items-center 
              justify-center   rounded "
      >
        <form
          className="  
          form-select mt-1 w-1/2 "
          onSubmit={handleSubmit}
        >
          <label className="sr-only">Search</label>
          <div className=" flex relative w-full  ">
            <div className="flex absolute  inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              name="search"
              placeholder="search by containing"
              value={formData.search}
              onChange={handleChange}
              type="text"
              id="simple-search"
              className=" py-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              required
            />
            <button
              type="submit"
              className="p-2.5 ml-2 text-sm font-medium text-white bg-red-500 rounded-lg border border-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-500 dark:focus:ring-red-500"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </form>
        <form>
          <div className="p-6">
            <div className="flex h-56 grid grid-cols-3 gap-2 content-center">
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
          </div>
        </form>
      </div>
    </>
  );
};

export default FiltersNew;
