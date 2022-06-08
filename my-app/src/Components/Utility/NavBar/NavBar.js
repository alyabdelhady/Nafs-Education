import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiEnvelope } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

import "./NavBar.css";

function NavBar() {
  return (
    <Navbar
      className="sticky-top d-flex justify-content-between "
      bg="light"
      expand="lg"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" className="logo-parent">
            <h3 className="logo-name">تطبيق نافس</h3>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-lg"} />
        <Navbar.Offcanvas
          id={"offcanvasNavbar-expand-lg"}
          aria-labelledby={"offcanvasNavbar-expand-lg"}
          placement="end"
        >
          <Offcanvas.Header className="offcanvas-head" closeButton>
            <Offcanvas.Title id={"offcanvasNavbar-expand-lg"}>
              <div className="d-flex">
                <h3 className="logo-name">تطبيق نافس</h3>
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="offcanvas-body">
            <Nav className="ms-auto d-flex justify-content-end align-items-center">
              <div className="d-flex align-items-center">
                <BiEnvelope className="notifi-icon ms-3" />
                <div>
                  <span className="badge badge-warning" id="lblCartCount">
                    0
                  </span>
                  <IoMdNotificationsOutline className="notifi-icon" />
                </div>
                <div className="topbarImg">
                  <FaUserCircle className="user-icon" />
                </div>
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
