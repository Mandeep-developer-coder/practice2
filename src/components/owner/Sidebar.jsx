import { Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoIosAddCircleOutline } from "react-icons/io";
import { LiaCarSideSolid } from "react-icons/lia";
import { TiClipboard } from "react-icons/ti";

export const Sidebar = () => {
  return (
    <div className="d-flex flex-column gap-4 py-4 border-end border-bottom" >
      <Image
        src="https://via.placeholder.com/80"
        roundedCircle
        style={{ width: "80px", height: "80px" }}
      />
      <Nav className="flex-column gap-3">
        <div className="d-flex align-items-center gap-2">
          <LuLayoutDashboard />
          <Nav.Link as={Link} to="/owner" className="text-muted p-0">
            Dashboard
          </Nav.Link>
        </div>

        <div className="d-flex align-items-center gap-2">
          <IoIosAddCircleOutline />
          <Nav.Link as={Link} to="/owner/add-car" className="text-muted p-0">
            Add Car
          </Nav.Link>
        </div>

        <div className="d-flex align-items-center gap-2">
          <LiaCarSideSolid />
          <Nav.Link as={Link} to="/owner/manage-car" className="text-muted p-0">
            Manage Cars
          </Nav.Link>
        </div>

        <div className="d-flex align-items-center gap-2">
          <TiClipboard />
          <Nav.Link as={Link} to="/owner/manage-bookings" className="text-muted p-0">
            Manage Bookings
          </Nav.Link>
        </div>
      </Nav>
    </div>
  );
};
