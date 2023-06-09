import React from "react";
import "./../styles/About.css";
import { Divider, Space } from "antd";

const About = () => {
  return (
    <div >
      <div className="gap"></div>

      <div className="wave">
        <h1>About us</h1>
        <p>
          Welcome to our travel agency! We are dedicated to providing
          exceptional travel experiences and helping you create lifelong
          memories.
        </p>

        <p>
          At Birds Vaccation, we understand that travel is more than just
          visiting new destinations. It's about immersing yourself in different
          cultures, exploring breathtaking landscapes, and connecting with
          people from around the world. With our extensive knowledge and
          expertise, we strive to offer you personalized itineraries that cater
          to your unique interests and preferences.
        </p>

        <p>
          Our team of experienced travel experts is passionate about crafting
          unforgettable journeys. Whether you're seeking a relaxing beach
          getaway, an adventurous trek through the mountains, or a cultural
          exploration of bustling cities, we have the expertise to make it
          happen.
        </p>

        <p>
          We work closely with a network of trusted partners, including
          airlines, hotels, and local guides, to ensure that every aspect of
          your trip is carefully planned and executed. From the moment you reach
          out to us until you return home, we are here to provide support and
          assistance at every step.
        </p>

        <p>
          Discover the world with confidence and peace of mind, knowing that
          your travel plans are in the hands of professionals who are dedicated
          to delivering exceptional service and unforgettable experiences.
        </p> <br></br> <br></br>

        <p><b>
          Get in touch with us today and let's start planning your dream
          vacation!</b>
        </p>
        
      </div>
      <Divider></Divider>
    </div>
  );
};

export default About;
