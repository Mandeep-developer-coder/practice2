import { Table, Badge, Image } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const carList = [
  {
    id: 1,
    name: "Toyota Corolla",
    category: "Economy",
    price: 45,
    status: "Available",
    image:
      "https://cdn.motor1.com/images/mgl/0ANXZ/s3/2023-toyota-corolla.jpg",
  },
  {
    id: 2,
    name: "Honda Civic",
    category: "Economy",
    price: 48,
    status: "Not Available",
    image:
      "https://cdn.motor1.com/images/mgl/BEoLx/s1/2022-honda-civic-sedan.jpg",
  },
  {
    id: 3,
    name: "BMW 3 Series",
    category: "Luxury",
    price: 95,
    status: "Available",
    image:
      "https://www.bmwusa.com/content/dam/bmwusa/3-series/sedan/2023/BMW-MY23-G20-3Series-Sedan-330i-M340i-Overview-Feature-Panel-01.jpg",
  },
  {
    id: 4,
    name: "Tesla Model 3",
    category: "Luxury",
    price: 120,
    status: "Available",
    image:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/7a18f460-d324-4b93-859e-16f7f7e14a7b/bvlatuR/std/2880x1800/MS-Interior-Grid-A-Desktop",
  },
];

export const ManageCar = () => {
  return (
    <div className="px-3">
      <h4 className="fw-bold">Manage Cars</h4>
      <p className="text-muted">
        View all listed cars, update their details, or remove them from the
        booking platform
      </p>

      <div className="border rounded p-2">
        <Table hover responsive className="align-middle">
          <thead>
            <tr>
              <th>Car</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {carList.map((car) => (
              <tr key={car.id}>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <Image
                      src={car.image}
                      rounded
                      width={60}
                      height={40}
                      style={{ objectFit: "cover" }}
                    />
                    <div>
                      <div className="fw-semibold">{car.name}</div>
                      <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                        5 seats • automatic
                      </div>
                    </div>
                  </div>
                </td>
                <td>{car.category}</td>
                <td>${car.price}/day</td>
                <td>
                  <Badge bg={car.status === "Available" ? "success" : "danger"}>
                    {car.status}
                  </Badge>
                </td>
                <td>
                  <FaEye style={{ cursor: "pointer", marginRight: "10px" }} />
                  <FaTrashAlt style={{ cursor: "pointer" }} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
