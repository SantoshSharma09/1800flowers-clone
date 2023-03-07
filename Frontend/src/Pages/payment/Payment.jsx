import React from "react";
import { useState } from "react";

import Loading from "./Loading";
import Otp from "./Otp";

function Payment() {
  const [loading, setLoding] = useState(false);
  const [pay, setPay] = useState(false);

  const handleClick = () => {
    setLoding(true);
    setTimeout(() => {
      setLoding(false);
      setPay(true);
    }, 4000);
  };

  if (pay) {
    return <Otp />;
  }

  {
    if (loading) {
      return <Loading />;
    }
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "25px",
        }}
        class="container"
      >
        <form
          style={{
            padding: "30px",
            width: "95%",
            background: "#fff",
            boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
            // display: "flex",
            flexdirection: "column",
            alignItems: "center",
          }}
          action=""
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "35px",
              padding: "20px",
            }}
            class="row"
          >
            <div
              style={{
                padding: "20px",
                textAlign: "center",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
              class="col col1"
            >
              <h3
                style={{
                  fontSize: "20px",
                  color: "#333",
                  paddingBottom: "5px",
                  textTransform: "uppercase",
                }}
                class="title"
              >
                Billing Address
              </h3>

              <div style={{ margin: "15px 0", width: "93%" }} class="inputBox">
                <span style={{ marginBottom: "10px", display: "block" }}>
                  Full Name :
                </span>
                <input
                  style={{
                    width: "100%",
                    border: "1px solid #ccc",
                    padding: "10px 15px",
                    fontSize: "15px",
                    textTransform: "none",
                    width: "85%",
                    marginTtop: "5px",
                  }}
                  type="text"
                  placeholder="john deo"
                />
              </div>
              <div class="inputBox">
                <span style={{ marginBottom: "10px", display: "block" }}>
                  Email :
                </span>
                <input
                  style={{
                    width: "100%",
                    border: "1px solid #ccc",
                    padding: "10px 15px",
                    fontSize: "15px",
                    textTransform: "none",
                    width: "85%",
                    marginTtop: "5px",
                  }}
                  type="email"
                  placeholder="example@example.com"
                />
              </div>
              <div class="inputBox">
                <span style={{ marginBottom: "10px", display: "block" }}>
                  Address :
                </span>
                <input
                  style={{
                    width: "100%",
                    border: "1px solid #ccc",
                    padding: "10px 15px",
                    fontSize: "15px",
                    textTransform: "none",
                    width: "85%",
                    marginTtop: "5px",
                  }}
                  type="text"
                  placeholder="room - street - locality"
                />
              </div>
              <div class="inputBox">
                <span style={{ marginBottom: "10px", display: "block" }}>
                  City :
                </span>
                <input
                  style={{
                    width: "100%",
                    border: "1px solid #ccc",
                    padding: "10px 15px",
                    fontSize: "15px",
                    textTransform: "none",
                    width: "85%",
                    marginTtop: "5px",
                  }}
                  type="text"
                  placeholder="mumbai"
                />
              </div>

              <div class="flex">
                <div class="inputBox">
                  <span style={{ marginBottom: "10px", display: "block" }}>
                    State :
                  </span>
                  <input
                    style={{
                      width: "100%",
                      border: "1px solid #ccc",
                      padding: "10px 15px",
                      fontSize: "15px",
                      textTransform: "none",
                      width: "85%",
                      marginTtop: "5px",
                    }}
                    type="text"
                    placeholder="india"
                  />
                </div>
                <div class="inputBox">
                  <span style={{ marginBottom: "10px", display: "block" }}>
                    Zip Code :
                  </span>
                  <input
                    style={{
                      width: "100%",
                      border: "1px solid #ccc",
                      padding: "10px 15px",
                      fontSize: "15px",
                      textTransform: "none",
                      width: "85%",
                      marginTtop: "5px",
                    }}
                    type="text"
                    placeholder="123 456"
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                textAlign: "center",
                padding: "20px",
                // width: "50%",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
              class="col col2"
            >
              <h3
                style={{
                  fontSize: "20px",
                  color: "#333",
                  paddingBottom: "5px",
                  textTransform: "uppercase",
                }}
                class="title"
              >
                Payment
              </h3>

              <div class="inputBox">
                <span style={{ marginBottom: "10px", display: "block" }}>
                  Cards Accepted :
                </span>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img src="https://bookwik-project.vercel.app/static/media/card_img.942a5891094842eda4f3.png" />
                </div>
              </div>
              <div class="inputBox">
                <span style={{ marginBottom: "10px", display: "block" }}>
                  Name on Card :
                </span>
                <input
                  style={{
                    width: "100%",
                    border: "1px solid #ccc",
                    padding: "10px 15px",
                    fontSize: "15px",
                    textTransform: "none",
                    width: "85%",
                    marginTtop: "5px",
                  }}
                  type="text"
                  placeholder="mr. john deo"
                />
              </div>
              <div class="inputBox">
                <span style={{ marginBottom: "10px", display: "block" }}>
                  Credit Card Number :
                </span>
                <input
                  style={{
                    width: "85%",
                    border: "1px solid #ccc",
                    padding: "10px 15px",
                    fontSize: "15px",
                    textTransform: "none",
                    // width: "85%", marginTtop: "5px",
                  }}
                  type="number"
                  placeholder="1111-2222-3333-4444"
                />
              </div>
              <div class="inputBox">
                <span style={{ marginBottom: "10px", display: "block" }}>
                  Exp month :
                </span>
                <input
                  style={{
                    width: "100%",
                    border: "1px solid #ccc",
                    padding: "10px 15px",
                    fontSize: "15px",
                    textTransform: "none",
                    width: "85%",
                    marginTtop: "5px",
                  }}
                  type="text"
                  placeholder="january"
                />
              </div>

              <div class="flex">
                <div class="inputBox">
                  <span style={{ marginBottom: "10px", display: "block" }}>
                    Exp year :
                  </span>
                  <input
                    style={{
                      width: "100%",
                      border: "1px solid #ccc",
                      padding: "10px 15px",
                      fontSize: "15px",
                      textTransform: "none",
                      width: "85%",
                      marginTtop: "5px",
                    }}
                    type="number"
                    placeholder="2022"
                  />
                </div>
                <div class="inputBox">
                  <span style={{ marginBottom: "10px", display: "block" }}>
                    CVV :
                  </span>
                  <input
                    style={{
                      width: "100%",
                      border: "1px solid #ccc",
                      padding: "10px 15px",
                      fontSize: "15px",
                      textTransform: "none",
                      width: "85%",
                      marginTtop: "5px",
                    }}
                    type="text"
                    placeholder="123"
                  />
                </div>
              </div>
            </div>
          </div>

          <input
            style={{
              width: "40%",
              padding: "12px",
              fontSize: "17px",
              backgroundColor: "#65388B",
              color: "#fff",
              marginTop: "5px",
              cursor: "pointer",
              borderRadius: "5px",

              display: "flex",
              margin: "auto",
              justifyContent: "center",
            }}
            type="submit"
            value="Proceed to Payment"
            class="submit-btn"
            onClick={handleClick}
          />
        </form>
      </div>
    </div>
  );
}

export default Payment;
