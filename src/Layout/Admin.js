import React from "react";
import AdminSidebar from "../Components/AdminSidebar";
import { Outlet } from "react-router-dom";
import Header from "../Components/Adminheader";
import { Row, Col } from "react-bootstrap";
import Adminfooter from "../Components/Adminfooter";

function Admin() {
  return (
    <>
      <Row>
        <Col xs={12} lg={2}>
          <AdminSidebar />
        </Col>
        <Col xs={12} lg={10}>
          <Header />
          <Outlet />
          <Adminfooter/>
        </Col>
      </Row>
    </>
  );
}

export default Admin;
