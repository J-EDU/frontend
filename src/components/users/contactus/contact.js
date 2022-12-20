import { useState } from "react";
import { FaFacebookSquare, FaLinkedin,FaInstagramSquare } from "react-icons/fa";

import emailjs from "emailjs-com";

import Swal from "sweetalert2";
import "./contact.css"
import Address from './Address'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import data from './data.json'


const render = (status) => {
  return <h1>{status}</h1>;
};

const initialState = {
  name: "",

  email: "",

  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  //   const colorMode = useColorMode();

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, message);

    emailjs

      .sendForm(
        "service_i9hh4sf",
        "template_ksw1ett",
        e.target,
        "wdxxKSJkAz_LEFXdQ"
      )

      .then(
        (result) => {
          Swal.fire(
            "Thanks for contacting us ",

            "Email Sent Successfully ",

            "success"
          );

          clearState();
        },

        (error) => {
          Swal.fire({
            icon: "error",

            title: "Oops...",

            text: "Something went wrong!",

            footer: "Email was not Sent ",
          });
        }
      );
  };

  return (
    <>
          
          <div>
        {/*doctype html*/}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Us</title>
        {/*link-stylesheet---------*/}
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        {/*using-fontAwesome----------*/}
        {/*contact-form-container-----------------*/}
        <section id="contact">
          {/*socail---------*/}
         
          {/*contact-box-----------*/}
         
          <div className="contact-box">
            {/*heading--------*/}
            <div className="c-heading">
              <h1>Get In Touch</h1>
              <p>Email Us Regarding Question Or Issues</p>
            </div>
            {/*inputs----------------*/}
            <div className="c-inputs">
              <form onSubmit={handleSubmit} action="#">
                <label>Full Name</label>
                <input type="text" placeholder="Full Name" onChange={handleChange} className="input"/>	
                <label>Email</label>
                <input type="email" placeholder="Example@gmail.com" onChange={handleChange} className="input"/>
                <label>Message</label>
                <textarea name="message" placeholder="Write Message" defaultValue={""} onChange={handleChange} className="input"/>
                {/*sumbit-btn---------*/}
                <button className="input btn">SEND</button>
                
              </form>
              
            </div>
          </div>
          {/*map-----------------*/}
            {/* <h2 className="address">Address</h2>
            <p>Amman, Jordan
            <br/>
            dftgh@gmail.com
            <br/>
            +962 4845 5251
        </p> */}
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1701.5252574812218!2d74.31603229143637!3d31.46779655679461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391906abd2d8f2db%3A0x2d4bd93a1eb25b41!2sArfa%20Technologies!5e0!3m2!1sen!2s!4v1596774150754!5m2!1sen!2s" width={600} height={650} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />	
        </div>
          
      
        </section>
      </div>
     
    </>

         
  );
};