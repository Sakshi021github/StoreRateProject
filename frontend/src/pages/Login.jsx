import { useState } from 'react';
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
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
        'http://localhost:5000/api/auth/login',
        formData
      );

      console.log(res.data);

      alert('Login Successful');

      localStorage.setItem(
        'token',
        res.data.token
      );

      localStorage.setItem(
  'user',
  JSON.stringify(res.data.user)
);



      
      navigate('/dashboard');

    } catch (error) {

      console.log(error);

      alert(
  error.response?.data?.message ||
  'Login Failed'
);

    }

  };

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >

        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
          StoreRate Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
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
          Login
        </button>

        <p className="text-center mt-4 text-gray-600">

  New User?

  {' '}

  <Link
    to="/register"
    className="text-indigo-600 font-semibold"
  >
    Create Account
  </Link>

</p>

      </form>

    </div>

  );

}

export default Login;