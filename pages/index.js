import { useState, useEffect } from "react";
import styles from "../styles/index.module.css";

const Index = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data); // Set filteredUsers to all users initially
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleSearch = (value) => {
    setSearch(value); // Update the search value
    // Filter users based on the search value
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredUsers(filtered); // Update filteredUsers
  };

  return (
    <div>
      <section className="satu pt-5">
        <div
          className="text-bold text-center text-white"
          style={{
            fontFamily: "Josefin Sans, sans-serif",
            fontSize: 40,
            fontWeight: "700",
            letterSpacing: 10,
          }}
        >
          USER LIST
        </div>
        <div className="py-3"></div>
        <div className={`input-group ${styles.inputgroup}`}>
          <input
            type="search"
            id="form2Example18"
            className={`form-control form-control-lg fs-6 border border-0 ${styles.customInput}`}
            style={{ background: "#25273D", color: "#767992" }}
            placeholder="Search User"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </section>

      <section className="dua p-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {filteredUsers.map((user) => (
            <div className="col" key={user.id}>
              <div className="card h-100" style={{ background: "#25273D" }}>
                <div className="card-body">
                  <div className="row row-cols-auto text-white">
                    <div className="col">
                      <img src="assets/Avatar.svg" alt="Avatar" />
                    </div>
                    <div className="col">
                      <div
                        style={{
                          color: "#C8CBE7",
                          fontSize: 18,
                          fontFamily: "Josefin Sans, sans-serif",
                        }}
                      >
                        {user.name}
                        <div
                          className="py-1"
                          style={{
                            color: "rgba(91, 94, 126, 0.70)",
                            fontSize: 16,
                          }}
                        >
                          {user.company.name}
                        </div>
                        <div className="py-1" style={{ fontSize: 14 }}>
                          <img src="assets/telp.svg" alt="Phone" /> {user.phone}
                        </div>
                        <div className="py-1" style={{ fontSize: 14 }}>
                          <img src="assets/location.svg" alt="Location" />{" "}
                          {user.address.city}
                        </div>
                      </div>
                    </div>
                    <div className="container py-2">
                      <div className="row row-cols-auto">
                        <div
                          className="col"
                          style={{
                            color: "#3A7CFD",
                            fontSize: 12,
                            fontFamily: "Josefin Sans, sans-serif",
                            wordWrap: "break-word",
                          }}
                        >
                          <img
                            className="px-1"
                            src="assets/web.svg"
                            alt="Website"
                          />
                          {user.website}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
