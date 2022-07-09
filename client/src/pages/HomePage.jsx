import axios from "axios";
import React from "react";

const HomePage = () => {
  const [users, setUsers] = React.useState([]);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    getUsers();
  }, []);

  let getUsers = () => {
    axios
      .get("http://localhost:5005/users")
      .then((results) => {
        setUsers(results.data.users);
      })

      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filtered = !search
    ? users
    : users.filter((user) =>
        user.name
          .replace(/\s/g, "")
          .toLowerCase()
          .includes(search.replace(/\s/g, "").toLowerCase())
      );

  return (
    <div>
      <div className="searchbars">
        <input
          className="input"
          name="search"
          type="text"
          placeholder="Search by Name"
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <div className="post">
        {filtered.map((user) => {
          return (
            <div key={user._id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <p>{user.occupation}</p>
              <p>{user.location}</p>
              <p>{user.email}</p>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
