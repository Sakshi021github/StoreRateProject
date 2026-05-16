import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalStores: 0,
    totalRatings: 0
  });

  const [stores, setStores] = useState([]);

  const [owners, setOwners] = useState([]);

  const [storeData, setStoreData] = useState({
    name: '',
    email: '',
    address: '',
    owner_id: ''
  });

  const token = localStorage.getItem('token');

  const user =
  JSON.parse(localStorage.getItem('user'));

  useEffect(() => {

    fetchDashboardStats();
    fetchStores();
    fetchOwners();

  }, []);


  const fetchDashboardStats = async () => {

    try {

      const res = await axios.get(
        'http://localhost:5000/api/admin/dashboard',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setStats(res.data);

    } catch (error) {

      console.log(error);

    }

  };


  const fetchStores = async () => {

    try {

      const res = await axios.get(
        'http://localhost:5000/api/stores',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setStores(res.data);

    } catch (error) {

      console.log(error);

    }

  };


  const fetchOwners = async () => {

    try {

      const res = await axios.get(
        'http://localhost:5000/api/users',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setOwners(res.data);

    } catch (error) {

      console.log(error);

    }

  };


  const handleChange = (e) => {

    setStoreData({
      ...storeData,
      [e.target.name]: e.target.value
    });

  };


  const addStore = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        'http://localhost:5000/api/stores',
        storeData,
        {
          headers: {
            Authorization:
            `Bearer ${token}`
          }
        }
      );

      toast.success(
        'Store Added Successfully'
      );

      fetchDashboardStats();
      fetchStores();

      setStoreData({
        name: '',
        email: '',
        address: '',
        owner_id: ''
      });

    } catch (error) {

      console.log(error);

    }

  };


  const deleteStore = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/stores/${id}`,
        {
          headers: {
            Authorization:
            `Bearer ${token}`
          }
        }
      );

      toast.success(
        'Store Deleted Successfully'
      );

      fetchDashboardStats();
      fetchStores();

    } catch (error) {

      console.log(error);

    }

  };


  const logoutHandler = () => {

    localStorage.removeItem('token');

    localStorage.removeItem('user');

    navigate('/');

  };


  return (

    <div className="min-h-screen bg-gray-100">

      
      <div className="bg-indigo-600 text-white px-8 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          StoreRate
        </h1>

        <button
          onClick={logoutHandler}
          className="bg-white text-indigo-600 px-4 py-2 rounded"
        >
          Logout
        </button>

      </div>


      
      <div className="p-8">

        <h2 className="text-3xl font-bold">
          Welcome,
          {' '}
          {user?.name}
        </h2>

        <p className="text-gray-500 mb-6">
          Manage stores and ratings easily.
        </p>


        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">

            <h3 className="text-xl font-bold">
              Total Stores
            </h3>

            <p className="text-3xl mt-4 text-indigo-600">
              {stats.totalStores}
            </p>

          </div>

          <div className="bg-white p-6 rounded-xl shadow">

            <h3 className="text-xl font-bold">
              Total Ratings
            </h3>

            <p className="text-3xl mt-4 text-indigo-600">
              {stats.totalRatings}
            </p>

          </div>

          <div className="bg-white p-6 rounded-xl shadow">

            <h3 className="text-xl font-bold">
              Users
            </h3>

            <p className="text-3xl mt-4 text-indigo-600">
              {stats.totalUsers}
            </p>

          </div>

        </div>


        
        <form
          onSubmit={addStore}
          className="bg-white p-6 rounded-xl shadow mt-8"
        >

          <h2 className="text-2xl font-bold mb-4">
            Add Store
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Store Name"
            value={storeData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Store Email"
            value={storeData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
            required
          />

          <textarea
            name="address"
            placeholder="Store Address"
            value={storeData.address}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
            required
          />

          <select
            name="owner_id"
            value={storeData.owner_id}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
            required
          >

            <option value="">
              Select Store Owner
            </option>

            {owners.map((owner) => (

              <option
                key={owner.id}
                value={owner.id}
              >
                {owner.name}
              </option>

            ))}

          </select>

          <button
            className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700"
          >
            Add Store
          </button>

        </form>


        
        <div className="bg-white p-6 rounded-xl shadow mt-8">

          <h2 className="text-2xl font-bold mb-4">
            Manage Stores
          </h2>

          {stores.length === 0 ? (

            <p>No Stores Available</p>

          ) : (

            <div className="space-y-4">

              {stores.map((store) => (

                <div
                  key={store.id}
                  className="flex justify-between items-center border p-4 rounded"
                >

                  <div>

                    <h3 className="font-bold text-xl">
                      {store.name}
                    </h3>

                    <p className="text-gray-500">
                      {store.address}
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      deleteStore(store.id)
                    }
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>

                </div>

              ))}

            </div>

          )}

        </div>


        
        <div className="mt-8 flex gap-4">

          <button
            onClick={() => navigate('/stores')}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
          >
            View Stores
          </button>


          <button
            onClick={() =>
              navigate('/owner-dashboard')
            }
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Owner Dashboard
          </button>

        </div>


        
        <footer className="text-center py-6 text-gray-500">

          Built by Sakshi Sankhe

        </footer>

      </div>

    </div>

  );

}

export default Dashboard;