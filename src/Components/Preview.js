import React from "react";

const Preview = () => {
  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 ">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
              <div className="card text-black">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img1.webp"
                  className="card-img-top"
                  alt="iPhone"
                />
                <div className="card-body">
                  <div className="text-center mt-1">
                    <h4 className="card-title">iPhone X</h4>
                    <h6 className="text-primary mb-1 pb-3">Starting at $399</h6>
                  </div>

                  <div className="text-center">
                    <div
                      className="p-3 mx-n3 mb-4"
                      style={{ backgroundColor: "#eff1f2" }}
                    >
                      <h5 className="mb-0">Quick Look</h5>
                    </div>

                    <div className="d-flex flex-column mb-4">
                      <span className="h1 mb-0">5.8″</span>
                      <span>Super Retina HD display1</span>
                    </div>

                    <div className="d-flex flex-column mb-4">
                      <span className="h1 mb-0">
                        <i className="fas fa-camera-retro"></i>
                      </span>
                      <ul className="list-unstyled mb-0">
                        <li aria-hidden="true">—</li>
                        <li>Wide</li>
                        <li>Telephoto</li>
                        <li aria-hidden="true">—</li>
                      </ul>
                    </div>

                    <div className="d-flex flex-column mb-4">
                      <span className="h1 mb-0">2x</span>
                      <span>Optical zoom range</span>
                    </div>

                    <div
                      className="p-3 mx-n3 mb-4"
                      style={{ backgroundColor: "#eff1f2" }}
                    >
                      <h5 className="mb-0">Capacity</h5>
                    </div>

                    <div className="d-flex flex-column mb-4 lead">
                      <span className="mb-2">64GB</span>
                      <span className="mb-2">256GB</span>
                      <span style={{ color: "transparent" }}>0</span>
                    </div>
                  </div>

                  <div className="d-flex flex-row">
                  
                    <button
                      type="button"
                      className="btn btn-danger flex-fill ms-1"
                    >
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Preview;
