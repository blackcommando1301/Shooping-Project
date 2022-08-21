import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux/";
import { useDispatch } from "react-redux/es/exports";
import { addCreator } from "../Redux/action";

const Preview = () => {
  let {id}=useParams();
 let state=useSelector((state)=>state);
 let co=state[id];
 let dispatch=useDispatch();
  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 ">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
              <div className="card text-black">
                <img
                  src={co.img}
                  className="card-img-top"
                  alt="iPhone"
                />
                <div className="card-body">
                  <div className="text-center mt-1">
                    <h4 className="card-title">{co.name}</h4>
                    <h3 className="text-primary mb-1 pb-3">{co.price} $</h3>
                  </div>

                  <div className="text-center">
                    <div
                      className="p-3 mx-n3 mb-4"
                      style={{ backgroundColor: "#eff1f2" }}
                    >
                      <h5 className="mb-0">Description</h5>
                    </div>

                    <div className="d-flex flex-column mb-4">
                      
                      <span>{co.des}</span>
                    </div>

                    <div
                      className="p-3 mx-n3 mb-4"
                      style={{ backgroundColor: "#eff1f2" }}
                    >
                      <h5 className="mb-0">Features</h5>
                    </div>

                   

                    <ul className="list-group list-group-flush">
                        {co.points.map((des) => {
                          return <li className="list-group-item">{des}</li>;
                        })}
                      </ul>
                  </div>

                  <div className="d-flex flex-row">
                  
                    <button
                      type="button"
                      className="btn btn-danger flex-fill ms-1"
                      onClick={()=>{
                            dispatch(addCreator(co.id))
                            alert("added to cart ");
                          }}
                    >
                      Add To Cart
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
