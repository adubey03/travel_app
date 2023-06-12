import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import { Button, Checkbox, Form, Input} from "antd";
import "../styles/AdminLogin.css";
import Footer from "../components/Footer";
import axios from "axios";
import { BrowserRouter as Router, useNavigate, Link} from "react-router-dom";


const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const HandleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      // Handle successful login response
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      // Redirect to the next page upon successful login
      navigate("/admin-dashboard");
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };
  return(
  <div className="adminlogin">
    <Form
     
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        onChange={(e) => setEmail(e.target.value)}
        label="Username"
        name="username"
        value={email}
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        name="password"
        value={password}
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button onClick={HandleLogin} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
);
};
export default AdminLogin;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, useNavigate } from 'react-router-dom';

// const AdminLogin = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://reqres.in/api/login', { email, password });
//       // Handle successful login response
//       console.log(response.data);
//       localStorage.setItem('token', response.data.token)
//       // Redirect to the next page upon successful login
//       navigate('/admin-dashboard');
//     } catch (error) {
//       // Handle error
//       console.error(error);
//     }
//   };

//   return (

//       <form onSubmit={handleLogin}>
//         {/* Form fields for email and password */}
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>

//   );
// };

// export default AdminLogin;
