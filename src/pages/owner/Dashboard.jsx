import { Card, Col, Row, Table, Badge } from "react-bootstrap";

export const Dashboard = () => {
  return (
    <div>
      <h4 className="fw-bold mb-4">Admin Dashboard</h4>
      <p className="text-muted">
        Monitor overall platform performance including total cars, bookings, revenue, and recent activities
      </p>

      {/* Summary Boxes */}
      <Row className="my-4 g-4">
        <Col xs={6} md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h6>Total Cars</h6>
              <h4>8</h4>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={6} md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h6>Total Bookings</h6>
              <h4>8</h4>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={6} md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h6>Pending Bookings</h6>
              <h4>8</h4>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={6} md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h6>Completed Bookings</h6>
              <h4>8</h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Booking Table + Revenue */}
      <Row className="g-4">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Recent Bookings</Card.Title>
              <Table responsive hover className="mt-3">
                <thead>
                  <tr>
                    <th>Car</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>BMW 3 Series</td>
                    <td>4/1/2025</td>
                    <td>$475</td>
                    <td><Badge bg="secondary">Confirmed</Badge></td>
                  </tr>
                  <tr>
                    <td>Ford Explorer</td>
                    <td>3/1/2025</td>
                    <td>$425</td>
                    <td><Badge bg="success">Completed</Badge></td>
                  </tr>
                  <tr>
                    <td>Toyota Corolla</td>
                    <td>4/5/2025</td>
                    <td>$225</td>
                    <td><Badge bg="warning" text="dark">Pending</Badge></td>
                  </tr>
                  <tr>
                    <td>Tesla Model 3</td>
                    <td>4/6/2025</td>
                    <td>$360</td>
                    <td><Badge bg="secondary">Confirmed</Badge></td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>Monthly Revenue</Card.Title>
              <p className="text-muted">Revenue for current month</p>
              <h3 className="text-primary fw-bold">$1060</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
