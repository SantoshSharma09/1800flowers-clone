import { Box, Button, FormControl, Input, Select,Flex,useToast } from "@chakra-ui/react";

import "./styles/Inventory.css";
import axios from "axios";
import { useState } from "react";

export default function AddProduct() {


const [name,setname]=useState('')

const [price,setprice]=useState('')

const [category,setCategory]=useState('')

const [img,setimg]=useState('')

const Toast = useToast()

  const adddata = async () => {

  const payload={
    img,
    name,
    price:Number(price),
    category,
  
  }
console.log(payload)

    let res = await axios.post(
      `https://wicked-long-underwear-slug.cyclic.app/products/create`,payload
    );
    console.log(res);
  };


  return (
    <Box pb={6} className="abc">
     
<FormControl borderRadius={"10px"} border={"1px solid #9565aa"} mt={"-10px"}>
        <Input placeholder="Product Name"  onChange={(e)=>setname(e.target.value)} />
      </FormControl> 

      <FormControl borderRadius={"10px"} border={"1px solid #9565aa"} mt={4}>
        <Input placeholder="Product Image" type='url' onChange={(e)=>setimg(e.target.value)} />
      </FormControl>
     
      <FormControl borderRadius={"10px"} border={"1px solid #9565aa"} mt={4}>
        <Input placeholder="Product Price" type='Number' onChange={(e)=>setprice(e.target.value)} />
      </FormControl>

      <FormControl borderRadius={"10px"} border={"1px solid #9565aa"} mt={4}>
        <Input placeholder="Product Category"  onChange={(e)=>setCategory(e.target.value)} />
      </FormControl>


      
     

    
      <Button  onClick={() => {
                adddata();
                Toast({
                  title: " Product Added ",
                  position: 'top',
                  status: "success",
                  duration: 4000,
                  isClosable: true,
                });
              }}
              id="button">Add Data</Button>
    </Box>
  );
}
