import React from "react";
import { Col, Row, Divider } from "antd";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import "./../styles/Homepage.css";
import About from "../components/About";

const Homepage = () => {
  return (
    <>
      <Header />
      <Slider />
      <About />
      
      <div>
      <h2>Exciting News!</h2>
      <div className="gap"></div>


        <Row>
          <Col sm={24} md={12} lg={12} xs={24}>
        <div className="image-container">
          <img
            alt="example"
            src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            className="responsive-image"
          />
        </div>
      </Col>

          <Col sm={24} md={12} lg={12} xs={24}>
            <div className="texts">
              <p>
                We are thrilled to announce that our highly anticipated mobile
                app will be launching soon! Get ready to experience our services
                right at your fingertips.
              </p>
              
              <p>
                With our mobile app, you'll have access to exclusive features,
                personalized recommendations, and convenient booking options for
                your next adventure.
              </p>
              <p>
                Thank you for your continued support, and we can't wait to
                provide you with an enhanced travel experience through our
                mobile app!
              </p>
              <p><b>
                Stay tuned for the official release date and be among the first
                to download our app on your iOS or Android device.</b>
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <Divider></Divider>


      <Footer />
    </>
  );
};

export default Homepage;
