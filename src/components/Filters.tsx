import React, { useEffect, useState } from 'react';

import DietaryRequirementsApi from '../api/api';

const Filters = () => {
  useEffect(function getCompanyAndJobsForUser() {
    async function getAllDishes() {
      const res = await DietaryRequirementsApi.getDishes();
    }

    getAllDishes();
  }, []);
  const req = [
    {
      name: 'dietrary_requirments_gf',
      value: 'true',
    },
    {
      name: 'dietrary_requirments_v',
      value: 'true',
    },
    {
      name: 'dietrary_requirments_vg',
      price: 'true',
    },
  ];
  const BTN_INITIAL_STATE = {
    checkboxOne: false,
    checkboxTwo: false,
    checkboxThree: false,
  };

  const handleSelected = (e) => {
    console.log(e.target.value);
  };

  const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

  const [checkedState, setCheckedState] = useState(
    new Array(req.length).fill(false)
  );

  const [query, setQuery] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + req[index].value;
        }
        return sum;
      },
      0
    );

    setQuery(totalPrice);
  };

  return (
    <div className="flex justify-center items-center align-top">
      <form action="">
        <div className="container grid ">
          <ul className="ks-cboxtags">
            <li>
              <input
                type="checkbox"
                id="checkboxOne"
                name="dietrary_requirments_gf"
              />
              <label htmlFor="checkboxOne">Gluten Free</label>
            </li>
            <li>
              <input type="checkbox" id="checkboxOne" />
            </li>
            <li>
              <input
                name="dietrary_requirments_v"
                type="checkbox"
                id="checkboxTwo"
              />
              <label htmlFor="checkboxTwo">vegetarian</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkboxTwo"
                value="Vegetarian"
                onSelect={handleSelected}
              />
            </li>
            <li>
              <input
                name="dietrary_requirments_vg"
                type="checkbox"
                id="checkboxThree"
              />
              <label htmlFor="checkboxThree">vegan</label>
            </li>
            <li>
              <input type="checkbox" id="checkboxThree" value="Vegan" checked />
            </li>

            <div className="flex justify-center items-center">
              <button className=" inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </div>

            {/* <label htmlFor="checkboxNine">Princess Celestia</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxTen" value="Gusty" />
            <label htmlFor="checkboxTen">Gusty</label>
          </li>
          <li className="ks-selected">
            <input type="checkbox" id="checkboxEleven" value="Discord" />
            <label htmlFor="checkboxEleven">Discord</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxTwelve" value="Clover" />
            <label htmlFor="checkboxTwelve">Clover</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxThirteen"
              value="Baby Moondancer"
            />
            <label htmlFor="checkboxThirteen">Baby Moondancer</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxFourteen" value="Medley" />
            <label htmlFor="checkboxFourteen">Medley</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxFifteen" value="Firefly" />
            <label htmlFor="checkboxFifteen">Firefly</label> */}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Filters;
