import { Container, Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { NavbarOwner } from "../../components/owner/NavbarOwner";
import { Sidebar } from "../../components/owner/Sidebar";

export const Layout = () => {
  return (
    <>
      <NavbarOwner />

      <Container fluid>
        <Row className="g-0">
          {/* xs=12 for small screen, md=2 for big screen */}
          <Col xs={12} md={2}>
            <Sidebar />
          </Col>

          {/* xs=12 for small screen, md=10 for big screen */}
          <Col xs={12} md={10} className="p-4">
        
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};
