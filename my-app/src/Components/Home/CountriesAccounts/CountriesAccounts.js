import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FiMoreHorizontal } from "react-icons/fi";
import Header from "../../Utility/Header/Header";
import "./CountriesAccounts.css";

function CountriesAccounts({ data }) {
  const newData = [
    {
      id: 0,
      title: "عدد الحسابات الكلي",
      student: data?.allStudentCounts,
    },
    {
      id: 1,
      title: "الحسابات الجديدة اليوم",
      student: data.allTodayRegisteredStudent,
    },
    {
      id: 2,
      title: "الحسابات الجديدة الاسبوع الحالي",
      student: data.allLastWeekRegisteredStudent,
    },
  ];

  return (
    <Container>
      <Header title="الحسابات" />
      <Row className="my-2">
        {newData.map((item) => (
          <Col key={item.id} xs={12} md={4}>
            <Card className="card-acc">
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <p>{item.title} </p>
                  <FiMoreHorizontal />
                </div>
                <div className="number d-flex justify-content-center align-items-center">
                  <h6>{item.student}</h6>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CountriesAccounts;
