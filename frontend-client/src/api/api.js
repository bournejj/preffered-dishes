// import userEvent from '@testing-library/user-event';
import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 
 * Static class tying together methods used to get/send to to the API.
 
 */

class DietaryRequirementsApi {
  static async getDishes(query) {
    if (query) {
      const res = await axios.get(`${BASE_URL}/dishes/${query}`);
      return res.data;
    }
    const res = await axios.get(`${BASE_URL}/dishes/`);
    return res.data;


  }

  static async getDishById(id) {
    const res = await axios.get(`${BASE_URL}/dishes/${id}`);

    return res.data;
  }

  static async getRestaurants() {
    const res = await axios.get(`${BASE_URL}/restaurants`);

    return res.data;
  }

  static async getRestaurantById(id) {
    const res = await axios.get(`${BASE_URL}/restaurants/${id}`);

    return res.data;
  }

  static async getDishesByRestaurant(id) {
    const res = await axios.get(`${BASE_URL}/dishes/restaurant/${id}`);

    return res.data;
  }

  static async login(user) {
    const res = await axios({
      method: "post",
      url: `${BASE_URL}/auth/login`,
      data: {
        username: user.username,
        password: user.password,
      },
    });

    return res.data;
  }

  static async register(user) {
    const res = await axios({
      method: "post",
      url: `${BASE_URL}/auth/register`,
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        password: user.password,
        email: user.email,
      },
    });
    console.log(res);

    return res.data;
  }
}

export default DietaryRequirementsApi;
