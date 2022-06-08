import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../Utility/Header/Header";
import "./SchoolYears.css";

function SchoolYears({ data }) {
  return (
    <Container>
      <Header title="السنوات الدراسية" />
      <Row>
        {data?.gradeList?.map((item) => (
          <Col key={item.GRADE_ID} xs={12} md={4}>
            <Link to="/users-accounts" className="country-link">
              <Card className="grade-card">
                <Card.Body>
                  <div className="grade">
                    <p>{item.GRADE_Name}</p>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SchoolYears;
