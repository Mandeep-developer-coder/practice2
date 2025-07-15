import { Table, Dropdown, Badge, Image, Container } from "react-bootstrap";

const bookings = [
  {
    car: "Toyota Corolla",
    image: "/images/corolla.jpg",
    dateRange: "4/10/2025 To 4/15/2025",
    total: 447,
    status: "Confirmed",
  },
  {
    car: "Honda Civic",
    image: "/images/civic.jpg",
    dateRange: "4/10/2025 To 4/15/2025",
    total: 447,
    status: "Completed",
  },
  {
    car: "BMW 3 Series",
    image: "/images/bmw.jpg",
    dateRange: "4/10/2025 To 4/15/2025",
    total: 447,
    status: "Pending",
  },
  {
    car: "Tesla Model 3",
    image: "/images/tesla.jpg",
    dateRange: "4/10/2025 To 4/15/2025",
    total: 447,
    status: "Available",
  },
];

const getStatusBadge = (status) => {
  switch (status) {
    case "Confirmed":
      return <Badge bg="success" className="px-2">Confirmed</Badge>;
    case "Completed":
      return <Badge bg="primary" className="px-2">Completed</Badge>;
    case "Pending":
      return <Badge bg="warning" text="dark" className="px-2">Pending</Badge>;
    case "Available":
      return <Badge bg="success" className="px-2">Available</Badge>;
    default:
      return <Badge bg="secondary">{status}</Badge>;
  }
};

export const ManageBooking = () => {
  return (
    <Container className="mt-4">
      <h5 className="fw-bold">Manage Bookings</h5>
      <p className="text-muted" style={{ fontSize: "14px" }}>
        Track all customer bookings, approve or cancel requests, and manage booking statuses
      </p>

      <Table hover bordered responsive className="mt-3">
        <thead className="align-middle text-center">
          <tr>
            <th>Car</th>
            <th>Date Range</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="align-middle text-center">
          {bookings.map((b, i) => (
            <tr key={i}>
              <td className="text-start">
                <div className="d-flex align-items-center gap-3">
                  <Image src={b.image} height={40} rounded />
                  <span>{b.car}</span>
                </div>
              </td>
              <td>{b.dateRange}</td>
              <td>${b.total}</td>
              <td>{getStatusBadge(b.status)}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="light" size="sm">Cancel</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Cancel Booking</Dropdown.Item>
                    <Dropdown.Item>Mark as Completed</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
