import React, { useState } from "react";

import Link from "next/link";
import router from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { setCredentials } from "../features/user/userSlice";
import { useLoginUserMutation } from "../services/apiSlice";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store);
  const INITIAL_STATE = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const [login, { isLoading }] = useLoginUserMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.username && formData.password) {
      const userData = await login(formData);
      console.log(userData.data.user);
      dispatch(setCredentials(userData));
      router.push("/");
      // useDispatch(useLoginUserMutation(formData));
    } else {
      console.log("no");

      // refetch(formData);
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white border-t border-red-500 rounded shadow-lg shadow-purple-800/50 lg:max-w-md">
        <h1 className="text-3xl font-semibold text-center text-red-500">
          SignIn
        </h1>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm text-gray-800">
              username
            </label>
            <input
              type="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-4">
            <div>
              <label htmlFor="password" className="block text-sm text-gray-800">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <a href="#" className="text-xs text-gray-600 hover:underline">
              Forget Password?
            </a>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Login
              </button>
            </div>
          </div>
        </form>
        <Link href="/register">
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <a href="#" className="font-medium text-purple-600 hover:underline">
              Sign up
            </a>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
