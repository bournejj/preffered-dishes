import React, { useState } from 'react';

import DietaryRequirementsApi from '../api/api';

const FiltersNew = () => {
  // With this useState I wan't to collect the checked checkboxes
  const [checkedCheckboxes, setCheckedCheckboxes] = useState([]);

  // This is my handler method that gets triggered when a checkbox get's checked/unchecked
  // ..and toggles the state of the checkbox
  const handleCheckboxChange = (data) => {
    const isChecked = checkedCheckboxes.some(
      (checkedCheckbox) => checkedCheckbox.value === data.value
    );
    if (isChecked) {
      setCheckedCheckboxes(
        checkedCheckboxes.filter(
          (checkedCheckbox) => checkedCheckbox.value !== data.value
        )
      );
    } else {
      setCheckedCheckboxes(checkedCheckboxes.concat(data));
    }
  };

  const receivedData = [
    { name: 'Gluten Free', value: 'dietrary_requirments_gf=true' },
    { name: 'Vegetarian', value: 'dietrary_requirments_v=true' },
    { name: 'Vegan', value: 'dietrary_requirments_vg=true' },
  ];

  // const [query, setQuery] = useState('');
  let query = '';
  const handleSubmit = (e) => {
    e.preventDefault();
    checkedCheckboxes.map(function (value, label) {
      if (label === 0) {
        query += `?${value.value}`;
      } else {
        query += `&${value.value}`;
      }
      getAllDishes(query);
    });
  };
  async function getAllDishes(query) {
    const res = await DietaryRequirementsApi.getDishes(query);
    console.log(res);
  }
  return (
    <>
      <div className="checkboxes">
        <div className="flex justify-center items-center align-top">
          <form onSubmit={handleSubmit}>
            <div className="container grid ">
              <ul className="ks-cboxtags">
                {receivedData?.map((data, index) => (
                  <label htmlFor="">
                    {' '}
                    {data.name}
                    <input
                      key={`cb-${index}`}
                      value={data.value}
                      type="checkbox"
                      checked={checkedCheckboxes.some(
                        (checkedCheckbox) =>
                          checkedCheckbox.value === data.value
                      )}
                      onChange={() => handleCheckboxChange(data)}
                    />
                  </label>
                ))}
              </ul>
              <button>submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FiltersNew;
