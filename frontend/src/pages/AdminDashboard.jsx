import React from "react";
import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { DeleteOutlined, CheckCircleOutlined } from "@ant-design/icons";

const AdminDashboard = () => {
  const [isactive, setIsActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/admin-login");
    }
  }, []);

  const HandleCheck =() =>{
    setIsActive(true)
    
  }

  const HandleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => (
        <>
          <DeleteOutlined style={{ padding: "10px" }} />
          <CheckCircleOutlined
            // style={{ 
            //   color: isactive ? "green" : "blue",
            // }}
            onClick={HandleCheck}
          />
        </>
      ),
    },
  ];

  const data = [
    {
      key: 1,
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    },
    {
      key: 2,
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      description:
        "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
    },
    {
      key: 3,
      name: "Not Expandable",
      age: 29,
      address: "Jiangsu No. 1 Lake Park",
      description: "This not expandable",
    },
    {
      key: 4,
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      description:
        "My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.",
    },

    {
      key: 5,
      name: "Harry",
      age: 29,
      address: "Jiangsu No. 2 Lake Park",
      description: "This not expandable",
    },
  ];

  // Configure pagination
  const paginationConfig = {
    pageSize: 5, // Display 4 items per page
  };

  return (
    <div>
      <Button onClick={HandleLogout} type="link" danger>
        Logout
      </Button>
      <h5>Admin Dashboard</h5>
      <Table  
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p
              style={{
                margin: 0,
              }}
            >
              {record.description}
            </p>
          ),
        }}
        dataSource={data}
        pagination={paginationConfig}
      />
    </div>
  );
};

export default AdminDashboard;
