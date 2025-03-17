import React from "react";
import AdminSidebar from "../Components/AdminSidebar";
import { Outlet } from "react-router-dom";
import Header from "../Components/Adminheader";
import { Row, Col } from "react-bootstrap";
import Footer from "../Components/Footer";

function Admin() {
  return (
    <>
      <Row>
        <Col xs={12}>
          <AdminSidebar />
        </Col>
        <Col xs={12}>
          <Header />
          <Outlet />
          <Footer />
        </Col>
      </Row>
    </>
  );
}

export default Admin;
