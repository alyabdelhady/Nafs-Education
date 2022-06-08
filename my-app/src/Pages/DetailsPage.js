import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import * as api from "../Components/Utility/Api/index";
import SchoolYears from "./../Components/Details/SchoolYears/SchoolYears";
import CountryAccounts from "./../Components/Details/CountryAccounts/CountryAccounts";

function DetailsPage() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    (async () => {
      const res = await api.getCountryData(id);
      setData(res.data);
      setLoading(false);
      localStorage.setItem("countryId", id);
    })();
  }, [id]);

  return (
    <Container>
      <Container>
        <Container>
          {loading ? (
            <div className="spinner">
              <Spinner animation="border" />
            </div>
          ) : (
            <>
              <div className="d-flex justify-content-between align-items-center">
                <div className="header d-flex">
                  <h6>الرئيسية</h6> &nbsp; / &nbsp;
                  {(id === "113" && <h6>مملكة الاردن</h6>) ||
                    (id === "66" && <h6>مصر</h6>) ||
                    (id === "194" && <h6>المملكة العربية السعودية</h6>)}
                </div>
                <IoMdArrowRoundBack
                  className="backIcon"
                  onClick={() => navigate(-1)}
                />
              </div>
              <CountryAccounts data={data} />
              <SchoolYears data={data} />
            </>
          )}
        </Container>
      </Container>
    </Container>
  );
}

export default DetailsPage;
