import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import React from "react";

const Category = ({ data }) => {
  console.log(data);
  
  return (
    <Box>
      {data.map((el, i) => {
        return <p key={i}>{el.name}</p>;
      })}
    </Box>
  );
};

export default Category;

// export async function getStaticPaths() {
//   let r = await fetch(`https://wicked-long-underwear-slug.cyclic.app/products`);
//   let d = await r.json();

//   return {
//     paths: d.map((el) => ({ params: { id: String(el._id) } })),
//     fallback: false,
//   };
// }

export async function getStaticPaths() {
  let r = await fetch(`https://wicked-long-underwear-slug.cyclic.app/products`);
  let d = await r.json();
  console.log(d);
  return {
    paths: d.map((el) => ({ params: { id: String(el._id) } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const { id } = context.params;
  const r = await fetch(
    `https://wicked-long-underwear-slug.cyclic.app/products/${id}`
  );
  const d = await r.json();
  console.log(d);
  return {
    props: {
      data: d,
    },
  };
}
