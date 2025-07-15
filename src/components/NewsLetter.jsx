import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const NewsLetter = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center">
        <Col lg={8}>
          <h2 className="fw-semibold display-6">Never Miss a Deal!</h2>
          <p className="text-muted mb-3">
            Subscribe to get the latest offers, new arrivals, and exclusive discounts
          </p>

          <div className="d-flex justify-content-center pt-2">
            <Form className="d-flex flex-column flex-md-row align-items-stretch gap-2" style={{ maxWidth: "650px", height:"50px", width: "100%" }}>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
                className="rounded-start rounded-end-md-0"
              />
              <Button
                type="submit"
                variant="primary"
                className="px-4 px-md-5 rounded-end rounded-start-md-0"
              >
                Subscribe
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
