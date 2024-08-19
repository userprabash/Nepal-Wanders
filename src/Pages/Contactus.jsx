import React from "react";

function Contactus() {
  return (
    <>
      <section class="hero-contact">
        <div class="content text-white indexing-1 ">
          <h1>Contact Us</h1>
        </div>
      </section>
      <section className="contactus">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h3>Contact Us</h3>
              <form action="">
                <label htmlFor="name"> Your name</label>
                <br />
                <input
                  maxlength="400"
                  size={35}
                  type="text"
                  name="name"
                  id="name"
                />
                <br />
                <br />
                <label htmlFor="email"> Your email</label>
                <br />
                <input
                  maxlength="400"
                  size={35}
                  type="email"
                  name="name"
                  id="email"
                />
                <br />
                <br />
                <label htmlFor="sub"> Subject</label>
                <br />
                <input
                  maxlength="400"
                  size={35}
                  type="text"
                  name="name"
                  id="sub"
                />
                <br />
                <br />
                <label htmlFor="message">Message</label>
                <br />
                <textarea
                  maxlength="2000"
                  rows={10}
                  cols={40}
                  name=""
                  id="message"
                ></textarea>
                <br />
                <button>Submit</button>
              </form>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 pt-5 two">
              <h3>Nepal Wanders Pvt. Ltd.</h3>
              <p>
                Saraswatinagar, Bouddha – 6, Kathmandu <br />
                +977-9841255236,+977-9841708209 <br /> nepalwanders 977
                9841255236
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactus;
