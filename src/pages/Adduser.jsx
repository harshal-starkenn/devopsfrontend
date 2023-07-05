import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Adduser = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit the form data
      axios
        .post("http://localhost:9001/api/user/adduser", data)
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => {
          setShow(true);
          console.log(err);
        });
    } else {
      setShow(true);
      setShowError(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (data.first_name.trim() === "") {
      newErrors.first_name = "Please enter your first name.";
    }

    if (data.last_name.trim() === "") {
      newErrors.last_name = "Please enter your last name.";
    }

    if (data.email.trim() === "") {
      newErrors.email = "Please enter your email address.";
    }

    if (data.password.trim() === "") {
      newErrors.password = "Please enter your password.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="container mx-auto py-8  ">
      {show == false ? (
        ""
      ) : (
        <div className="mb-4" role="alert">
          <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Danger
          </div>
          <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>Something not ideal might be happening.</p>
          </div>
        </div>
      )}
      <div>
        <h1 className="text-4xl font-bold">
          <span className="inline-block animate-pulse">Add</span>{" "}
          <span className="inline-block animate-bounce">User</span>
        </h1>
      </div>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 bg-gradient-to-b from-red-200 to-green-200">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="first_name"
            >
              First Name
            </label>
            <input
              className={`appearance-none border ${
                errors.first_name ? "border-red-500" : "border-gray-300"
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500`}
              type="text"
              id="first_name"
              name="first_name"
              value={data.first_name}
              onChange={handleChange}
              required
            />
            {errors.first_name && (
              <p className="text-red-500 text-xs italic">{errors.first_name}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="last_name"
            >
              Last Name
            </label>
            <input
              className={`appearance-none border ${
                errors.last_name ? "border-red-500" : "border-gray-300"
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500`}
              type="text"
              id="last_name"
              name="last_name"
              value={data.last_name}
              onChange={handleChange}
              required
            />
            {errors.last_name && (
              <p className="text-red-500 text-xs italic">{errors.last_name}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`appearance-none border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500`}
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`appearance-none border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500`}
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              required
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            )}
          </div>

          {showError && (
            <div className="mb-4 text-red-500 text-xs italic">
              Please fill all the required fields.
            </div>
          )}

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Adduser;
