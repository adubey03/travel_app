import React, { useState } from "react";
import Header from "../components/Header";
import '../styles/ContactUs.css'
import "@coreui/coreui/dist/css/coreui.min.css";
import {
  CFormInput,
  CForm,
  CFormFeedback,
  CCol,
  CButton,
  CInputGroupText,
  CInputGroup,
  CFormLabel,
  CFormTextarea,
} from "@coreui/react";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <Header />
      <h2>Contact us</h2>
      <p>Fill the form below to get call back</p>
      <div className="contactusform">
        <CForm
          className="row g-3 needs-validation"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <CCol md={12}>
            <CFormLabel htmlFor="validationCustom01">First name</CFormLabel>
            <CFormInput
              type="text"
              defaultValue=""
              id="validationCustom01"
              required
            />
          </CCol>{" "}
          <br></br> <br></br><br></br><br></br><br></br>
          <CCol md={12}>
            <CFormLabel htmlFor="validationCustom02">Last name</CFormLabel>
            <CFormInput
              type="text"
              defaultValue=""
              id="validationCustom02"
              required
            />
          </CCol>
          <br></br> <br></br><br></br><br></br><br></br>
          <CCol md={12}>
            <CFormLabel htmlFor="validationCustomUsername">Email</CFormLabel>
            <CInputGroup className="has-validation">
              <CInputGroupText>@</CInputGroupText>
              <CFormInput
                type="email"
                aria-describedby="inputGroupPrependFeedback"
                feedback="Please choose a username."
                id="validationCustomUsername"
                required
              />
              <CFormFeedback invalid>Please enter a valid Email.</CFormFeedback>
            </CInputGroup>
          </CCol>
          <br></br> <br></br><br></br><br></br><br></br>

          <CCol md={12}>
            <CFormInput
              type="tel"
              id="validationPhone"
              label="Phone Number"
              placeholder="Enter your phone number"
              required
            />
          </CCol>
          <br></br> <br></br><br></br><br></br><br></br>

          
          <CCol md={12}>
            <CFormTextarea
              className="textarea"
              feedback="Please enter a message in the textarea."
              id="validationTextarea"
              label="Write your queries"
              placeholder="Write down your queries or other details"
              required
            ></CFormTextarea>
          </CCol>
          <br></br> <br></br><br></br><br></br><br></br>
          <CCol xs={12}>
            <CButton color="primary" type="submit">
              Submit form
            </CButton>
          </CCol>
        </CForm>

       
      </div>
      <Footer></Footer>
    </>
  );
};

export default ContactUs;
