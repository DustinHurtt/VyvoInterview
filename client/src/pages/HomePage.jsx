import axios from "axios";
import React from "react";
// import { baseUrl } from "../authService/baseUrl";
// import Photo from "../components/Photo";

const HomePage = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    getPhotos();
  }, []);

  let getPhotos = () => {
    axios
      .get("http://localhost:5005/users")
      .then((results) => {
        setUsers(results.data);
        console.log("users", results.data)
        console.log("HOok", users)
      })

      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <section className="main">
        <div className="grid">
          <div className="wrapper">
            <div className="left-col">

            <div className="post">
                {users.users.map((user) => {
                  return (
                    <div className="post-image" key={user._id}>
                      <p>{user.name}</p>
                      <p>{user.age}</p>
                      <p>{user.occupation}</p>
                      <p>{user.location}</p>
                      <p>{user.email}</p>
                      <br></br>
                    </div>
                  );
                })}
              </div>




            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;