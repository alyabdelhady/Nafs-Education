import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { IoMdArrowRoundBack } from "react-icons/io";
import UsersAccounts from "../Components/Users/UsersAccounts/UsersAccounts";

function UseraPage() {
  const navigate = useNavigate();

  const countryId = localStorage.getItem("countryId");

  return (
    <Container>
      <Container>
        <Container>
          <div className=" header d-flex justify-content-between align-items-center">
            <h4>حسابات المستخدمين</h4>
            <IoMdArrowRoundBack
              className="backIcon"
              onClick={() => navigate(-1)}
            />
          </div>
          <div className="header">
            <div className="header d-flex">
              <h6>الرئيسية</h6> &nbsp; / &nbsp;
              {(countryId === "113" && <h6>مملكة الاردن</h6>) ||
                (countryId === "66" && <h6>مصر</h6>) ||
                (countryId === "194" && <h6>المملكة العربية السعودية</h6>)}
              &nbsp; / &nbsp; <h6>الحسابات</h6>
            </div>
          </div>

          <UsersAccounts />
        </Container>
      </Container>
    </Container>
  );
}

export default UseraPage;
