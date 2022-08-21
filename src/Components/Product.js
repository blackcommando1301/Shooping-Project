import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux/es/exports";
import { addCreator } from "../Redux/action";


const Product = (props) => {

  let history =useHistory();
  let dispatch=useDispatch();
  return (
    <>
      <section style={{ backgroundColor: "#eee" }} >
        <div className="container py-3">
          <div className="row justify-content-center mb-3">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div className="bg-image hover-zoom ripple rounded ripple-surface">
                        <img onClick={()=>{
                          history.push(`/preview/${props.data.id}`)
                        }}
                          src={props.data.img}
                          alt="product"
                          className="w-100"
                        />
                        <a href="#!">
                          <div className="hover-overlay">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(253, 253, 253, 0.15)",
                              }}
                            ></div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <h5 onClick={()=>{
                          history.push(`/preview/${props.data.id}`)
                        }}>{props.data.name}</h5>
                      <div className="d-flex flex-row">
                        <div className="text-danger mb-1 me-2">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                      </div>
                      <ul className="list-group list-group-flush">
                        {props.data.points.map((des) => {
                          return <li className="list-group-item">{des}</li>;
                        })}
                      </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div className="d-flex flex-row align-items-center mb-1">
                        <h4 className="mb-1 me-1">{props.data.price}</h4>
                        <span className="text-danger">
                          <s>
                            {props.data.price +
                              2 +
                              Math.floor(Math.random() * 100)}$
                          </s>
                        </span>
                      </div>
                      <h6 className="text-success">Free shipping</h6>
                      <div className="d-flex flex-column mt-4">
                        <button
                          className="btn btn-outline-primary btn-sm mt-2"
                          type="button"
                          onClick={()=>{
                            
                            dispatch(addCreator(props.data.id));

                            alert("added to cart ");
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
