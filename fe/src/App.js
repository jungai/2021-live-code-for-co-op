import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "antd";

function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [usersData, setUsersData] = useState();

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
  ];

  const createUser = async () => {
    const bodyData = { id, name };

    const response = await axios.post("http://localhost:3000/users", bodyData);
    console.log("res -> ", response);
    if (response.data.success) {
      await getUsers();
    }
  };

  const getUsers = async () => {
    const response = await axios.get("http://localhost:3000/users");
    console.log("data", response.data);
    setUsersData(response.data.result);
  };

  useEffect(() => {
    // IIFE
    (async () => {
      await getUsers();
    })();
  }, []);

  return (
    <div>
      <h1>Hello Mvc</h1>
      {usersData ? (
        <Table
          columns={columns}
          dataSource={usersData.map((user, index) => ({ ...user, key: index }))}
        />
      ) : (
        <h1>No Data</h1>
      )}
      <hr />
      <input
        style={{ marginBottom: "1rem" }}
        name="id"
        placeholder="your id"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <br />
      <input
        style={{ marginBottom: "1rem" }}
        name="name"
        placeholder="yout name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <button
        onClick={async () => {
          await createUser();
          setId("");
          setName("");
        }}
      >
        submit
      </button>
    </div>
  );
}

export default App;
