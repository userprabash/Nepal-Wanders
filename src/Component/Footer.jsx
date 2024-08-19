import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="">
        <div className="container">
          <div className="row text-white py-5 ">
            <div className="col-lg-3">
              <ul className="text-white">
                <li>
                  <Link className="text-white" to="/">
                    {" "}
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-white " to="/about">
                    {" "}
                    About Us
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link className="text-white" to="/contact">
                    {" "}
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <p>All day every day: info@nepalwanders.com</p>
            </div>
            <div className="col-lg-3">
              <p>
                Saraswatinagar, Bouddha – 6, Kathmandu
                +977-9841708209,977-9841255236
              </p>
            </div>
            <div className="col-lg-3">
              <ul className="flex">
                <li>
                  <i className="bi bi-facebook" />
                </li>
                <li>
                  <i className="bi bi-twitter" />
                </li>
                <li>
                  <i className="bi bi-google" />
                </li>
                <li>
                  <i className="bi bi-instagram" />
                </li>
                <li>
                  <i className="bi bi-linkedin" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="text-white" />
        <p className="text-white text-center pb-3">
          ©copyright | Nepalwanders 2023 .all right Reserved
        </p>
      </footer>
    </>
  );
}

export default Footer;
