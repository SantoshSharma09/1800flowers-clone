import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

const SinglePage = ({ data }) => {
  const router = useRouter();
  const handleAdd = async () => {
    await axios.post(` https://fine-erin-turkey-hose.cyclic.app/addtocart/`,data)
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
export async function getStaticPaths(){
  let r=await fetch(`https://fine-erin-turkey-hose.cyclic.app/Birthday`)
  let d=await r.json()

  return{
    paths:d.map((el)=>({params: {id:String(el.id)}})),
    fallback: false,
  }
}
export async function getStaticProps(context) {
  console.log(context);
  const { id } = context.params;
  const r = await fetch(`https://fine-erin-turkey-hose.cyclic.app/Birthday/${id}`);
  const d = await r.json();
  return {
    props: {
      data: d,
    },
  };
}
export default SinglePage;