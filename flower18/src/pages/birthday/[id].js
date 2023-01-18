import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

const SinglePage = ({ data }) => {
  const router = useRouter();
  const handleAdd = async () => {
    await axios.post(` http://localhost:8080/addtocart/`,data)
    .then((res)=>alert("Successfully added to cart"),router.push("/addtocart"))
    .catch((er)=>alert(er))
  };
  return(
    <div>
      <img src={data.img} alt="img"></img>
      <h1>{data.name}</h1>
      <button onClick={handleAdd}>Add To Cart</button>
    </div>
  )
};

export async function getServerSideProps(context) {
  console.log(context);
  const { id } = context.params;
  const r = await fetch(`http://localhost:8080/Birthday/${id}`);
  const d = await r.json();
  return {
    props: {
      data: d,
    },
  };
}
export default SinglePage;