import React from "react";

function Home() {
  return (
    <>
      <section class="hero">
        <div class="content text-white indexing-1 ">
          <h1>
            Where Your <span class="text-warning">Journey Begins.</span>
          </h1>
          <p>
            Discover your next great adventure, become an explorer to get
            started!
          </p>
        </div>
      </section>
      <section className="bg-body-tertiary hero-2 py-5">
        <div className="container text-center">
          <h2>Welcome To Nepal Wanders!</h2>
          <p className="py-3">
            We manage and you travel easy – that’s the motto of our company.
            Connect with us and we will do the rest. The responsibility is huge
            and we are here to make sure even the miniscule is served without
            any reluctance.
          </p>
          <a className href>
            Learn More
          </a>
        </div>
      </section>
      <section className="py-5 aav">
        <div className="container">
          <div className="text-center">
            <h2>Wanders Signatures</h2>
            <p>
              Despite many destinations and trails, the best of Nepal among the
              good ones are selected here – on the basis of Popularity and the
              Most Wandered
            </p>
          </div>
          <div className="row gy-3 gx-3">
            <div className="col-lg-8 family">
              <img
                className="w-100"
                src="https://nepalwanders.com/wp-content/uploads/2023/08/mteverf-1.jpg"
                alt
              />
              <h3 className="child text-white">Everest base camp trek</h3>
            </div>
            <div className="col-lg-4 family">
              <img
                className="w-100"
                src="https://nepalwanders.com/wp-content/uploads/2023/08/Pokharabeauty-1.jpg"
                alt
              />
              <h4 className="child text-white">Nepals Golden Triangle tour</h4>
            </div>
            <div className="col-lg-4 family">
              <img
                className="w-100"
                src="https://nepalwanders.com/wp-content/uploads/2023/08/Untitleddolpo-1.jpg"
                alt
              />
              <h4 className="child text-white">Upper dolpo trek</h4>
            </div>
            <div className="col-lg-4 family">
              <img
                className="w-100"
                src="https://nepalwanders.com/wp-content/uploads/2023/08/manasluganesh-ght-wildlife-1-1.jpeg"
                alt
              />
              <h4 className="child text-white">Manaslu trek</h4>
            </div>
            <div className="col-lg-4 family">
              <img
                className="w-100"
                src="https://nepalwanders.com/wp-content/uploads/2023/08/choose-2560-1-1.jpg"
                alt
              />
              <h4 className="child text-white">Everest high passes</h4>
            </div>
            <div className="col-lg-4 family">
              <img
                className="w-100"
                src="https://nepalwanders.com/wp-content/uploads/2023/08/mardihimalannapurnanew-1.jpg"
                alt
              />
              <h4 className="child text-white">Mardi Himal trek</h4>
            </div>
            <div className="col-lg-8 family">
              <img
                className="w-100"
                src="https://nepalwanders.com/wp-content/uploads/2023/08/gauri-shanker-rolwaling-langtang-helambu-1.jpg"
                alt
              />
              <h4 className="child text-white">Langtang valley trek</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-body-tertiary  py-5">
        <div className="container text-center ">
          <h2 className="fw-bold">Why Book On Nepalwanders</h2>
          <ul
            className="nav nav-pills mb-3 justify-content-center text-black"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active "
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                THE COMPLETE EXPERIENCE
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                EDUCATION &amp; EXPERTISE
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                {" "}
                RESPONSIBILE TRAVEL
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact1-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact1"
                type="button"
                role="tab"
                aria-controls="pills-contact1"
                aria-selected="false"
              >
                VALUE
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabIndex={0}
            >
              We understand that your trip is not a sum of transactions, however
              it is a complex collection of experiences that begin with your
              first inquiry. We learn about your interests and preferences so
              that we can craft an itinerary that you will love. Whether you’d
              like experiences centered around your passions such as cuisine,
              architecture, adventure, or a specific destination, we will ensure
              your trip is inspired by you. Moreover we will guide you through
              the entire process, from pre-travel advice on packing,
              vaccinations, and assistance with travel documents to a
              comfortable and stress-free return home, we work with you to
              design a seamless journey catered to your unique interests.
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabIndex={0}
            >
              Travel is our passion and daily focus and we are continuously
              working to experience and encounter many of the resorts,
              activities and destinations that you are seeking. In addition to
              our vast first-hand travels, we stay up to date on the latest
              travel news, itineraries, trends, and policies through constant
              communication with our network, ongoing training and industry
              events. Our knowledge, relationships and expertise allow us to
              design exclusive experiences that you will treasure for a
              lifetime.
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
              tabIndex={0}
            >
              Sustainable travelling is at the core of everything we do, which
              is why have policies in place to ensure destinations retain their
              natural character and cultural diversity. We develop our trips to
              help people become more culturally and environmentally aware. The
              aim is to give you big adventures while we maintain a small
              footprint!
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact1"
              role="tabpanel"
              aria-labelledby="pills-contact1-tab"
              tabIndex={0}
            >
              We all want value for money. By negotiating contracted rates with
              the hotels, expert guides, activity providers and airlines we work
              with, we can keep our prices as competitive as possible. One thing
              we can offer that is truly priceless though is time – while we do
              all the heavy lifting, you can sit back safe in the knowledge that
              we will plan your perfect trip down to the smallest detail.
            </div>
          </div>
        </div>
      </section>
      <section className="yt">
        <div className="content text-white">
          {" "}
          <p
            className="ok "
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="bi bi-play-circle" />
          </p>
          <h2>Travelling Highlights</h2>
        </div>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <iframe
                width="100%"
                height={278}
                src="https://www.youtube.com/embed/jbXhcO7J5fA"
                title="Travel agency Nepal"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <div className="modal-footer">
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="owner py-5">
        <div className="container">
          <h2 className="text-center pb-5">Professional Team</h2>
          <div className="row">
            <div className="col-lg-4">
              <img
                className="w-100 rounded-circle"
                src="https://nepalwanders.com/wp-content/uploads/2023/08/1-1.jpg"
                alt
              />
              <p className="text-center">Tshering Wongdi Sherpa</p>
            </div>
            <div className="col-lg-4">
              <img
                className="w-100 rounded-circle"
                src="https://nepalwanders.com/wp-content/uploads/2023/08/IMG_4245-1.jpg"
                alt
              />
              <p className="text-center">Gelbu Sherpa</p>
            </div>
            <div className="col-lg-4">
              <img
                className="w-100 rounded-circle"
                src="https://nepalwanders.com/wp-content/uploads/2023/08/2-1.jpg"
                alt
              />
              <p className="text-center">Dawa Sherpa</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
