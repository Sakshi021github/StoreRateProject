import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Stores() {

  const navigate = useNavigate();

  const [stores, setStores] = useState([]);
  const [search, setSearch] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {

    fetchStores();

  }, []);


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


  const submitRating = async (
    storeId,
    rating
  ) => {

    try {

      await axios.post(
        'http://localhost:5000/api/ratings',
        {
          store_id: storeId,
          rating
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      toast.success('Rating Submitted');

      fetchStores();

    } catch (error) {

      console.log(error);

    }

  };


  const filteredStores = stores.filter((store) =>
    store.name.toLowerCase().includes(search.toLowerCase())
  );


  return (

    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <div className="bg-indigo-600 text-white px-8 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          StoreRate
        </h1>

        <button
          onClick={() => navigate('/dashboard')}
          className="bg-white text-indigo-600 px-4 py-2 rounded"
        >
          Dashboard
        </button>

      </div>


      
      <div className="p-8">

        <h1 className="text-3xl font-bold mb-6">
          Stores
        </h1>


        
        <input
          type="text"
          placeholder="Search Stores..."
          className="w-full md:w-96 p-3 rounded border mb-8"
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />


        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {filteredStores.map((store) => (

            <div
              key={store.id}
              className="bg-white p-6 rounded-xl shadow"
            >

              <h2 className="text-2xl font-bold">
                {store.name}
              </h2>

              <p className="text-gray-500 mt-2">
                {store.address}
              </p>

              <p className="mt-4 font-semibold">

                Average Rating:
                {' '}

                {store.average_rating || 'No Ratings Yet'}

              </p>


              <p className="text-gray-500 mt-2">

                Your Rating:
                {' '}

                {store.user_rating
                  ? `${store.user_rating} ★`
                  : 'Not Rated Yet'}

              </p>


              
              <div className="flex gap-2 mt-4">

                {[1,2,3,4,5].map((num) => (

                  <button
                    key={num}
                    className={`text-2xl hover:scale-110 transition ${
                      store.user_rating >= num
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                    }`}
                    onClick={() =>
                      submitRating(store.id, num)
                    }
                  >
                    ★
                  </button>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default Stores;