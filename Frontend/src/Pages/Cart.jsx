import { deleteCity } from "./FetchSearchData";
import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Cart() {
  const [prod, setProd] = React.useState([]);
  const [count, setCount] = React.useState(1);

  let sum = 0;
  let arr = [];

  prod.map((ele) => {
    arr.push(ele.price);
  });

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const getData = async () => {
    await fetch("https://wicked-long-underwear-slug.cyclic.app/cart/", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setProd(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  //Fetching the data:

  // const handleDel = async (id) => {
  //   await fetch(
  //     `https://wicked-long-underwear-slug.cyclic.app/cart/delete/${id}`,
  //     {
  //       method: "DELETE",
  //       headers: {
  //         Authorization: localStorage.getItem("token"),
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // setProd(res)
  //       getData();
  //       console.log("del hua?", res);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // 64006015666e1bbf3a7c376d64006015666e1bbf3a7c376d
     const handleDel=async(id)=>{
      try {
        const res = await axios.delete(`https://wicked-long-underwear-slug.cyclic.app/cart/delete/${id}}`)
        console.log('Item successfully deleted.')
        // setProd(res)
        // get/Data();
      } catch (error) {
        alert(error)
      }
     }
  return (
    <>
      <div
        style={{
          backgroundColor: "#3D5962",
          color: "white",
          padding: "10px 0px 10px 0px",
          fontSize: "18px",
        }}
      >
        Free Shipping on Orders of $40 or More
      </div>
      <div
        style={{
          // border:"1px solid red",

          dispaly: "flex",
          flexDirection: "column",
          width: "80%",
          marginTop: "80px",
          margin: "auto",
        }}
      >
        <div
          style={{
            marginBottom: "40px",
            display: "flex",
            // margin: "auto",
          }}
          // className="container"
        >
          <div style={{ width: "60%" }} className="left-container">
            <div style={{ marginBottom: "70px" }} className="description">
              <p
                style={{
                  fontSize: "13px",
                  textAlign: "left",
                }}
              >
                The availability of one or more item in your Shopping Bag has
                changed.
              </p>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "12px",
                  paddingLeft: "10px",
                }}
              >
                Got Your Number: The Greatest Sports Legends and the Numbers
                They Own (Signed Book) is temporarily out of stock online.
              </p>
            </div>
            <div style={{ marginBottom: "30px" }}>
              <h3 style={{ fontSize: "28px", fontWeight: "600" }}>
                <hr></hr>My Shopping Cart
              </h3>
            </div>
            <div
              style={{
                backgroundColor: "#3D6DB5",
                color: "white",
                padding: "10px 5px 10px 5px",
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "30px",
              }}
            >
              You've got great taste, if we do say so ourselves.
            </div>
            <div>
              <div
                style={{
                  border: "1px solid grey",
                  textAlign: "left",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "17px",
                    marginTop: "20px",
                    marginBottom: "50px",
                  }}
                >
                  {" "}
                  ({prod.length}) Items from Barnes & Noble
                </p>
                {prod.map((ele) => (
                  <div key={ele._id}>
                    <div key={ele._id}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: "16px",
                          marginTop: "20px",
                        }}
                      >
                        {ele.name}
                      </p>
                      {/* <p
                        style={{
                          marginBottom: "30px",
                          fontSize: "13px",
                        }}
                      >
                        {ele.price}
                      </p> */}
                    </div>
                    <div style={{ display: "flex", gap: "15px" }}>
                      <div className="rate-div">
                        <img
                          style={{ width: "45%" }}
                          src={ele.img}
                          alt="isdffmage"
                        />
                      </div>
                      <div style={{ display: "flex" }}>
                        {" "}
                        <p
                          style={{
                            marginRight: "10px",
                            // paddingTop: "8px",
                            fontSize: "16px",
                            // padding: "3px 10px 4px 10px",
                            fontWeight: "600",
                          }}
                        >
                          Price : ${ele.price}
                        </p>
                        <div
                          style={{
                            // paddingTop: "3px",
                            height: "40px",
                            width: "80px",
                            // border: "1px solid grey",
                            display: "flex",
                            justifyContent: "center",
                            fontSize: "16px",
                            fontWeight: "600",
                          }}
                        >
                          Qnt : 1
                        </div>
                        <p
                          style={{
                            marginLeft: "10px",
                            // paddingTop: "8px",
                            fontSize: "16px",
                            // padding: "3px 10px 4px 10px",
                            fontWeight: "600",
                          }}
                        >
                          Total Price : ${ele.price * count}
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        color: "teal",
                        fontSize: "13px",
                        margin: "20px",
                      }}
                    >
                      {/* <button onClick={() => handleDel(ele._id)}>Remove</button> */}
                    </div>
                    <div style={{ marginBottom: "20px", fontSize: "13px" }}>
                      Choose Int'l Express*** at checkout for delivery by
                      Friday, March 3
                    </div>
                    <hr></hr>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              // border: "1px solid red",
              boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
              width: "35%",
              marginLeft: "20px",
              height: "600px",
              padding: "20px 20px 10px 20px",
              marginTop: "0px",
              display: "grid",
            }}
            className="right-container"
          >
            <div>
              <h3
                style={{
                  fontSize: "22px",
                  textAlign: "left",
                  fontWeight: "600",
                  marginBottom: "20px",
                }}
              >
                Order Summary
              </h3>
              <div
                className="subtotal"
                style={{ display: "flex", marginBottom: "10px" }}
              >
                <div style={{ width: "70%" }}>
                  <p style={{ fontSize: "15px", float: "left" }}>
                    Subtotal ({prod.length}{" "}
                    <span style={{ fontSize: "12px" }}>items</span>)
                  </p>
                </div>
                <div style={{ width: "30%", float: "right" }}>
                  {" "}
                  <p>${sum.toFixed(2)}</p>
                </div>
              </div>{" "}
              <div
                className="estimate"
                style={{ display: "flex", marginBottom: "10px" }}
              >
                <div style={{ width: "70%" }}>
                  <p style={{ fontSize: "15px", float: "left" }}>
                    Estimated Shipping
                  </p>
                </div>
                <div style={{ width: "30%", float: "right" }}>
                  <p>${36.94}</p>
                </div>
              </div>{" "}
              <div
                className="estimate-tax"
                style={{ display: "flex", marginBottom: "20px" }}
              >
                <div style={{ width: "70%" }}>
                  <p style={{ fontSize: "15px", float: "left" }}>
                    Estimated Tax
                  </p>
                </div>
                <div style={{ width: "30%", float: "right" }}>
                  <p>${0.0}</p>
                </div>
              </div>
              <hr></hr>
              <div
                className="order-total"
                style={{ display: "flex", marginTop: "15px" }}
              >
                <div style={{ width: "70%" }}>
                  <p
                    style={{
                      fontSize: "18px",
                      float: "left",
                      fontWeight: "bold",
                    }}
                  >
                    Order Total:{" "}
                  </p>
                </div>
                <div
                  style={{ width: "30%", float: "right", fontWeight: "bold" }}
                >
                  <p>${(sum + 36.94).toFixed(2)}</p>
                </div>
              </div>
              <Link to={"/payment"}>
                <button
                  style={{
                    backgroundColor: "#346250",
                    color: "white",
                    marginTop: "20px",
                    width: "100%",
                    fontSize: "18px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  CHECKOUT
                </button>
              </Link>
              <div style={{ fontSize: "12px", marginTop: "10px" }}>
                Or Checkout With
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                <img
                  alt="sdfgsfg"
                  style={{
                    width: "80%",
                  }}
                  src="https://www.barnesandnoble.com/static/redesign/srcs/images/masterpass/v3_MP_button_dark_290x48.svg"
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "50px",
                gap: "10px",
                // backgroundColor: "smoke-white",
              }}
            >
              <div>
                <img
                  alt="fdsf"
                  style={{ width: "120%" }}
                  src="https://img.images-bn.com/static/redesign/srcs/images/PremMemShipCard@2x.png"
                />
              </div>
              <div>
                <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                  Have a B&N Membership?
                </span>{" "}
                <p style={{ fontSize: "12px" }}>
                  <span style={{ color: "green" }}>Sign In</span> and add your
                  member number to your account to start enjoying free Shipping
                  today!
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "33% 33% 33%",
            marginTop: "40px",
            textAlign: "left",
            marginBottom: "30px",
          }}
          className="info"
        ></div>
      </div>
    </>
  );
}

export default Cart;
