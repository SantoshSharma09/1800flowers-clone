import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import SinglePage from "../birthday/[id]";
<<<<<<< HEAD
import { Box,Text,Image ,Button,Flex,Divider} from "@chakra-ui/react";
import {MdDeleteForever} from "react-icons/md"
import {AiOutlineCheck} from "react-icons/ai"

const Pages=({data})=>{
    console.log(data)
    const router=useRouter()
    const refresh=()=>{
        router.replace(router.asPath);
    }
    const handleRemove=async(id)=>{
        await axios
        .delete(`https://fine-erin-turkey-hose.cyclic.app/addtocart/${id}`)
        .then((res)=>{
            alert("Delete");
            refresh();
        })
        .catch((er)=>{
            alert(er)
        })
    }
    return(
        // <div>
        //    <h1>Cart Page</h1>
        //    {
        //     data.map((el,ind)=>{
        //         return(
        //             <div key={el.id}>
        //                 <img src={el.img} alt="img"></img>
        //                 <h1>{el.name}</h1>
        //                 <h1>{el.price}</h1>
        //                 <p>{el.category}</p>
        //                 <button onClick={()=>handleRemove(el.id)}>Remove</button>
        //             </div>
        //         )
        //     })
        //    }
        // </div>
        <Box>
        {data.map((el)=>{
              return(
                <div key={el.id}>
                <Box display={"flex"} border={"0px solid red"} gap={10} height={"auto"}>
        
                <Box border={"0px solid black"} height={"400px"} ml={"150px"} width={"45%"}>
                <Text fontSize={"3xl"}>Shopping Cart</Text>
        
                <Box mt={"50px"} display={"flex"} shadow={"lg"}>
                    <Image borderRadius={"10px"} width={"200px"} height={"200px"} src={el.img}/>
                    <Box ml={"20px"}>
                        <Text fontSize={"xl"}>{el.name} </Text>
                        <Text fontSize={"xl"}>Item #: 192735L </Text>
                        <Box display={"flex"}>
                  
                        <Text fontSize={"xl"}>Price: ${el.price}</Text>
                         
                        <Button onClick={()=>handleRemove(el.id)} fontSize={"4xl"} ml={"280px"}  ><MdDeleteForever color="#734F96"/></Button>
                        </Box>
                        <Text fontSize={"xl"}>Sold by: 1800 Flowers</Text>
                      </Box>
                </Box>
                </Box>
               
              </Box>
              </div>
              )
        })}
         <Box  border={"0px solid black"} height={"400px"} mt={"-300px"} width={"32%"} ml={"58%"} position={"fixed"}>
                <Button _hover={{bgColor:"red"}} fontSize={"xl"} mt={"20px"} ml={"20px"} w={"90%"} height={"50px"} color={"white"} bgColor={"#61c278"}>PROCEED TO CHECKOUT</Button>
                  <Box shadow={"lg"} mt={"20px"} p={4}>
                    <Text  fontSize={"22px"} ml={"20px"}>ORDER SUMMARY</Text>
                    <Flex >
                    <Text fontSize={"20px"} ml={"20px"}>Merchandise:</Text>
                    <Text fontSize={"20px"} ml={"240px"}>$50.50</Text>
                    </Flex>
                    <Flex >
                    <Text fontSize={"20px"} ml={"20px"}>Estimated Service:</Text>
                    <Text fontSize={"20px"} ml={"200px"}>$0.0</Text>
                    </Flex>
                    <Flex >
                    <Text fontSize={"20px"} ml={"20px"}> Before tax:</Text>
                    <Text fontSize={"20px"} ml={"265px"}>$50.50</Text>
                    </Flex>
                    <Flex >
                    <Text fontSize={"20px"} ml={"20px"}>Taxes:</Text>
                    <Text fontSize={"20px"} ml={"310px"}>$0.0</Text>
                    </Flex>
                    <Divider mt={"20px"}/>
                    <Flex >
                    <Text fontSize={"22px"} ml={"20px"}>Order Total</Text>
                    <Text fontSize={"20px"} ml={"260px"}>$50.50</Text>
                    </Flex>
                    <Box mt={"30px"}  border={"0px solid red"} height={"200px"}>
                    <Image ml={"20px"} h={"40px"} w={"200px"} src=' https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltc723326dc66beda5/image-20220307-142252.png' />
                   
                    <Flex >
                    <Text mt={"20px"} color={"#4ba13e"} ml={"20px"}><AiOutlineCheck /></Text>
                    <Text  mt={"20px"} ml={"20px"}>Free Standard Shipping</Text>
                    </Flex>
                  
                    <Flex >
                    <Text color={"#4ba13e"} ml={"20px"}><AiOutlineCheck /></Text>
                    <Text ml={"20px"}>Reduce & Expedited Shipping</Text>
                    </Flex>
                    <Flex >
                    <Text color={"#4ba13e"} ml={"20px"}><AiOutlineCheck /></Text>
                    <Text ml={"20px"}>No Minimums or Promo Codes Needed</Text>
                    </Flex>
                    <Flex >
                    <Text color={"#4ba13e"} ml={"20px"}><AiOutlineCheck /></Text>
                    <Text ml={"20px"}> Automatically Renews, Cancel Anytime</Text>
                    </Flex>
                    </Box>
                    
                    
                  </Box>
                </Box>
        </Box>
  
    )
=======

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
    <div>
      <h1>Cart Page</h1>
      {data.map((el, ind) => {
        return (
          <div key={el.id}>
            <img src={el.img} alt="img"></img>
            <h1>{el.name}</h1>
            <h1>{el.price}</h1>
            <p>{el.category}</p>
            <button onClick={() => handleRemove(el.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export async function getServerSideProps(context) {
  const r = await fetch(`https://fine-erin-turkey-hose.cyclic.app/addtocart`);
  const d = await r.json();

  return {
    props: {
      data: d,
    },
  };
>>>>>>> main
}
export default Pages;
