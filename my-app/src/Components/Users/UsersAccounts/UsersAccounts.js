import React, { useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { users } from "../../Utility/Api/UserData";
import { FiMoreVertical } from "react-icons/fi";
import "./UsersAccounts.css";

function UsersAccounts() {
  const [search, setSearch] = useState("");

  const filterSearch = users.filter((user) => {
    if (user.name.trim().toUpperCase().includes(search.toUpperCase())) {
      return user;
    }
    return null;
  });

  return (
    <Container>
      <Row className="users-parent">
        <Col xs={12}>
          <div className=" search d-flex align-items-center">
            <h6 className="ms-2">بحث</h6>
            <input
              type="text"
              value={search}
              placeholder=" بحث ..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
            <Table responsive>
              <tbody>
                <tr>
                  <th></th>
                  <th>الاسم</th>
                  <th>النقاط</th>
                  <th>تاريخ الاشتراك</th>
                  <th>اخر تسجيل دخول</th>
                  <th></th>
                </tr>
                {filterSearch.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <input className="mx-3" type="checkbox" />
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src={user.image} alt="" />
                        <div>
                          <h6>{user.name}</h6>
                          <p>{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p>{user.points}</p>
                    </td>
                    <td>
                      <p> {user.subscription}</p>
                    </td>
                    <td>
                      <p>{user.login}</p>
                    </td>
                    <td>
                      <FiMoreVertical />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default UsersAccounts;
