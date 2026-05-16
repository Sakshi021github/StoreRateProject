import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function OwnerDashboard() {

  const navigate = useNavigate();

  const [ownerData, setOwnerData] = useState([]);

  const token = localStorage.getItem('token');

  const user =
  JSON.parse(localStorage.getItem('user'));

  useEffect(() => {

    fetchOwnerDashboard();

  }, []);


  const fetchOwnerDashboard = async () => {

    try {

      const res = await axios.get(
        'http://localhost:5000/api/owner/dashboard',
        {
          headers: {
            Authorization:
            `Bearer ${token}`
          }
        }
      );

      setOwnerData(res.data);

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
          Store Owner Dashboard
        </h1>

        <button
          onClick={logoutHandler}
          className="bg-white text-indigo-600 px-4 py-2 rounded"
        >
          Logout
        </button>

      </div>


      
      <div className="p-8">

        <h2 className="text-3xl font-bold mb-2">

          Welcome,
          {' '}
          {user?.name}

        </h2>

        <p className="text-gray-500 mb-8">

          View your store ratings here.

        </p>


        {ownerData.length === 0 ? (

          <div className="bg-white p-6 rounded-xl shadow">

            <p>
              No Ratings Available
            </p>

          </div>

        ) : (

          <div className="space-y-6">

            {ownerData.map((item, index) => (

              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow"
              >

                <h2 className="text-2xl font-bold">

                  {item.store_name}

                </h2>

                <p className="mt-2 text-indigo-600 font-semibold">

                  Average Rating:
                  {' '}
                  {item.average_rating}

                </p>

                <hr className="my-4" />

                <div className="flex justify-between">

                  <div>

                    <p className="font-semibold">

                      User

                    </p>

                    <p className="text-gray-600">

                      {item.user_name}

                    </p>

                  </div>

                  <div>

                    <p className="font-semibold">

                      Email

                    </p>

                    <p className="text-gray-600">

                      {item.email}

                    </p>

                  </div>

                  <div>

                    <p className="font-semibold">

                      Rating

                    </p>

                    <p className="text-yellow-500 text-xl">

                      {item.rating} ★

                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  );

}

export default OwnerDashboard;