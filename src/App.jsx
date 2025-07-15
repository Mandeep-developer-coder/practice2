
import { MyNavbar } from "./components/Navbar"
import { useLocation } from "react-router-dom"
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CarDetails } from "./pages/CarDetails";
import { MyBookings } from "./pages/MyBookings";
import { Cars } from "./pages/Cars";
import { Footer } from "./components/Footer";
import { NavbarOwner } from "./components/owner/NavbarOwner";
import { Sidebar } from "./components/owner/Sidebar";
import { Dashboard } from "./pages/owner/Dashboard";
import { AddCar } from "./pages/owner/AddCar";
import { ManageBooking } from "./pages/owner/ManageBooking";
import { ManageCar } from "./pages/owner/ManageCars";
import { Layout } from "./pages/owner/Layout";
function App() {
  const location = useLocation();
  const isOwnerPath = location.pathname.startsWith("/owner");

  return (
    <>
      {!isOwnerPath && <MyNavbar />}
      
      <Routes>
        {/* Normal user routes */}
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/bookings" element={<MyBookings />} />

        {/* Owner routes */}
        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="manage-bookings" element={<ManageBooking />} />
          <Route path="manage-car" element={<ManageCar />} />
        </Route>
      </Routes>

      {!isOwnerPath && <Footer />}
    </>
  );
}
export default App;
