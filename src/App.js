import React, { useState, useEffect } from "react";

function App() {
  
  const url = `https://jsonplaceholder.typicode.com/users`;

  // Set the data into a state
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="mx-3 mt-3">
        <h1 className="card-title text-center page-title">User Info</h1>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 mt-3 ">
            <div className="card">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">User Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Address</th>
                      <th scope="col">Company</th>
                      <th scope="col">Website</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{user.id}</th>
                        <th className="user">{user.name}</th>
                        <th>{user.username}</th>
                        <th>{user.email}</th>
                        <th>
                          {user.address.city +
                            ", " +
                            user.address.street +
                            ", " +
                            user.address.zipcode}
                        </th>
                        <th>{user.company.name}</th>
                        <th>{user.website}</th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
