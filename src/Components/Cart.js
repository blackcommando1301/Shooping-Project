import React from "react";

import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { addCreator,removeCreater } from "../Redux/action";

const Cart = () => {
  let state = useSelector((state) => state);

  let dispatch=useDispatch()

  let filteredArr = state.filter((el) => el.qty > 0);

  let total = 0;

  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {filteredArr.length} </h5>
                </div>

                {/* from the product start  */}

                {filteredArr.map((el) => {
                  total += el.qty * el.price;
                  return (
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          <div
                            className="bg-image hover-overlay hover-zoom ripple rounded"
                            data-mdb-ripple-color="light"
                          >
                            <img
                              src={el.img}
                              alt="product  "
                              className="w-100"
                            />
                            <a href="#!">
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(251, 251, 251, 0.2)",
                                }}
                              ></div>
                            </a>
                          </div>
                        </div>

                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          <p>
                            <strong>{el.name}</strong>
                          </p>
                          <p>Color: blue</p>
                          <p>Size: M</p>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          <div
                            className="d-flex mb-4"
                            style={{ maxWidth: "300px" }}
                          >
                            <span className="material-symbols-outlined my-2"  onClick={()=>{
                              dispatch(removeCreater(el.id))
                            }}>
                              arrow_drop_down
                            </span>
                            <button type="button" className="btn btn-dark ">
                              Qty - {el.qty}
                            </button>
                            <span className="material-symbols-outlined" onClick={()=>{
                              dispatch(addCreator(el.id))
                            }} > 
                              arrow_drop_up
                            </span>
                          </div>

                          <p className="text-start text-md-center">
                            <strong>$ {el.price}</strong>
                          </p>
                        </div>
                      </div>
                      <hr></hr>
                    </div>
                  );
                })}

                {/* here the product ends */}
              </div>

              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>{total}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Free</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>{total} $</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
