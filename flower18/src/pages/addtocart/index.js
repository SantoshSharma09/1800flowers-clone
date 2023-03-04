import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import Page from "../movies/[id]";
const Pages = ({ data }) => {
  console.log(data);
  const router = useRouter();
 
  const handleRemove = async (id) => {
    await axios
      .delete(`https://wicked-long-underwear-slug.cyclic.app/cart/add/${id}`)
      .then((res) => {
        alert("Delete");
      })
      .catch((er) => {
        alert(er);
      });
  };
  return (
    <div>
      <h1>watchlist page</h1>
      {data.map((el, ind) => {
        return (
          <div key={el._id}>
            <h3>{el.name}</h3>
            <p>{el.price}</p>
            <img src={el.img} alt="img" width={"200px"}></img>
            <button onClick={() => handleRemove(el.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};
export async function getServerSideProps(context) {
  const r = await fetch(`https://wicked-long-underwear-slug.cyclic.app/cart/add`);
  const d = await r.json();
  return {
    props: {
      data: d,
    },
  };
}

export default Pages;
