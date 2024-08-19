import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Aboutus from "../Pages/Aboutus";
import Abouthome from "../Pages/Abouthome";
import Contactus from "../Pages/Contactus";
import Travels from "../Pages/Travels";
import Trek from "../Pages/Trek";

function Header() {
  const [backgroundColor, setBackgroundColor] = useState("#333");

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll > 200) {
        setBackgroundColor("#1E1E1E");
      } else {
        setBackgroundColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section className="navbar-p">
        <nav
          class="navbar navbar-expand-lg contain  "
          style={{ backgroundColor }}
        >
          <div class="container t">
            <Link class="navbar-brand" to="/">
              <img
                width="100"
                src="https://nepalwanders.com/wp-content/themes/nepalwanders/img/logo1.png"
                alt=""
              />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="text-white">
                <i class="bi bi-list"></i>
              </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-white gap-4">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item mainmenu">
                  <a class="nav-link active " href="#">
                    Trek <i class="bi bi-chevron-down on-off"></i>
                    <span>
                      <i class="bi bi-chevron-up off-on"></i>
                    </span>
                  </a>
                  <ul class="submenu">
                    <li>
                      <Link to="/trek">Anapurna Range</Link>
                    </li>
                    <li>
                      <a href="">Everest Range</a>
                    </li>
                    <li>
                      <a href="">Langtang Range</a>
                    </li>
                    <li>
                      <a href=""> Others</a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item mainmenu">
                  <a class="nav-link" href="#" role="button">
                    Tour <i class="bi bi-chevron-down on-off"></i>
                    <span>
                      <i class="bi bi-chevron-up off-on "></i>
                    </span>
                  </a>
                  <ul class="submenu">
                    <li>
                      <a href="">Bardia jungle safari tour</a>
                    </li>
                    <li>
                      <a href="">Buddhist cultural tour</a>
                    </li>
                    <li>
                      <a href="">Chitwan Jungle Safari tour</a>
                    </li>
                    <li>
                      <a href=""> Highlights of Kathmandu and Pokhara</a>
                    </li>
                    <li>
                      <a href=""> Nepals Golden Triangle tour</a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item mainmenu">
                  <Link class="nav-link" to="">
                    About <i class="bi bi-chevron-down on-off"></i>
                    <span>
                      <i class="bi bi-chevron-up off-on "></i>
                    </span>
                  </Link>
                  <ul class="submenu">
                    <li>
                      <Link to="/about">About US</Link>
                    </li>
                    <li>
                      <Link to="/aboutnepal">About Nepal</Link>
                    </li>
                    <li>
                      <a href="">Terms and Conditions</a>
                    </li>
                    <li>
                      <a href=""> FAQs</a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/travel">
                    Travel Guide
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/aboutnepal" element={<Abouthome />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/travel" element={<Travels />} />
        <Route path="/trek" element={<Trek />} />
      </Routes>
    </>
  );
}

export default Header;
