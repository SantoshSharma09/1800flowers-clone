import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const CartCount = () => {
    const [count,setCount]=useState(null)
    useEffect(() => {
        const getData = async () => {
          await fetch("https://wicked-long-underwear-slug.cyclic.app/cart/", {
            method: "GET",
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          })
            .then((res) => res.json())
            .then((res) => {
                setCount(res.length)
            })
            .catch((err) => console.log(err));
    
          // await axios
          //   .get("https://wicked-long-underwear-slug.cyclic.app/cart/")
          //   .then((res) => console.log(res))
          //   .catch((err) => console.log(err));
        };
        getData();
      }, []);
    

  return (
    <Box >{count}</Box>
  )
}

export default CartCount