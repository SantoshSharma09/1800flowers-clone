import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import SinglePage from "../birthday/[id]";

const Pages = ({ data }) => {
  console.log(data);
  const router = useRouter();
  const refresh = () => {
    router.replace(router.asPath);
  };
  const handleRemove = async (id) => {
    await axios
      .delete(`https://fine-erin-turkey-hose.cyclic.app/addtocart/${id}`)
      .then((res) => {
        alert("Delete");
        refresh();
      })
      .catch((er) => {
        alert(er);
      });
  };
  return (
    <div style={{ marginTop: "220px",marginBottom:"200px" }}>
      <div style={{ marginLeft: "100px" }}>
        {data.map((el, ind) => {
          return (
            <div style={{ display: "flex" }} key={el.id}>
              <div>
                <img src={el.img} alt="img" />
              </div>
              <div style={{marginLeft:"20px" }}>
                <h1 style={{ fontSize: "24px", fontWeight: "600" }}>
                  {el.name}
                </h1>
                <h1 style={{ fontSize: "18px", fontWeight: "500" }}>
                  {" "}
                  Price : $ {el.price}
                </h1>
                <p style={{ fontSize: "18px", fontWeight: "500" }}>
                  Category : {el.category}
                </p>
                <button
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    backgroundColor: "#65388B",
                    color: "white",
                    padding: "8px 10px 8px 10px",
                    borderRadius: "5px",
                  }}
                  onClick={() => handleRemove(el.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  const r = await fetch(`https://fine-erin-turkey-hose.cyclic.app/addtocart`);
  const d = await r.json();

  return {
    props: {
      data: d,
    },
  };
}
export default Pages;
