import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Stores from './pages/Stores';
import ProtectedRoute from './components/ProtectedRoute';
import OwnerDashboard from './pages/OwnerDashboard';

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

       <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

        <Route
  path="/stores"
  element={
    <ProtectedRoute>
      <Stores />
    </ProtectedRoute>
  }
/>
        <Route
  path="/owner-dashboard"
  element={
    <ProtectedRoute>
      <OwnerDashboard />
    </ProtectedRoute>
  }
/>

      </Routes>

    </BrowserRouter>

  );

}

export default App;