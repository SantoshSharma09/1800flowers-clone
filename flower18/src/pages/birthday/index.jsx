import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
const Pages = ({ data }) => {
  const [page, setPage] = useState(3);
  const [total, setTotal] = useState(null);
  console.log(data, "mydata");
  const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: "20px";
    height: auto;
    width: 80%;
  `;
  return (
    <div>
      <ProductWrapper>
        {data.map((el) => {
          return (
            <div key={el.id}>
              <Link href={`birthday/${el.id}`}>
              <img src={el.img} alt={el.id}></img>
              <h1>{el.name}</h1>
              <p>{el.price}</p>
              </Link>
            </div>
          );
        })}
      </ProductWrapper>
    </div>
  );
};

export default Pages;

export const getStaticProps = async () => {
  const r = await fetch(` http://localhost:8080/Birthday?_limit=10`);
  const d = await r.json();
  return {
    props: {
      data: d,
    },
  };
};
