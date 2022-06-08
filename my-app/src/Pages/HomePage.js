import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import * as api from "../Components/Utility/Api/index";
import CountriesAccounts from "./../Components/Home/CountriesAccounts/CountriesAccounts";
import ActiveCountries from "./../Components/Home/ActiveCountries/ActiveCountries";

function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const res = await api.getCountriesData();
      setData(res.data);
      setLoading(false);
    })();
  }, []);

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
              <div className="header">
                <h6>الرئيسية</h6>
              </div>
              <CountriesAccounts data={data} />
              <ActiveCountries data={data} />
            </>
          )}
        </Container>
      </Container>
    </Container>
  );
}

export default HomePage;
