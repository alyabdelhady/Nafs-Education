import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../Utility/Header/Header";
import "./ActiveCountries.css";

function ActiveCountries({ data }) {
  return (
    <Container>
      <Header title="الدول النشطة" />
      <Row>
        {data?.countryList?.map((item) => (
          <Col key={item.ccoCountryId} xs={12} md={4}>
            <Link to={`/country/${item.ccoCountryId}`} className="country-link">
              <Card className="countryCard">
                <Card.Body>
                  <div className=" m d-flex justify-content-between align-items-center">
                    <div>
                      <p>{item.name}</p>
                      <h6>{item.selectedStandard} </h6>
                    </div>
                    <img className="countryImg" src={item.flagIconurl} alt="" />
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

export default ActiveCountries;
