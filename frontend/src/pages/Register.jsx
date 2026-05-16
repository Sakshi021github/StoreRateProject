import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    password: ''
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        'http://localhost:5000/api/auth/register',
        formData
      );

      alert('Registration Successful');

      console.log(res.data);

      
      navigate('/');

    } catch (error) {

      console.log(error);

      alert(
  error.response?.data?.message ||
  'Registration Failed'
);

    }

  };

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-[400px]"
      >

        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
          Create Account
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
        />

        <textarea
          name="address"
          placeholder="Enter Address"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
        />

        <button
          className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700"
        >
          Register
        </button>

      </form>

    </div>

  );

}

export default Register;