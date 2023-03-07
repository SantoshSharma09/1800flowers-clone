
import './styles/Dashboard.css'
import { Box,Heading,Text} from '@chakra-ui/react';
import {RiShoppingCartFill} from 'react-icons/ri'
import {BsBag} from 'react-icons/bs'
import {FaUserFriends} from 'react-icons/fa'
import {RiAdminFill} from 'react-icons/ri'
import Graph from './graph';
import React, { useState, useEffect } from "react";
import axios from 'axios';
const Dashboard = () => {
 
const [users,setUsers]=useState([])
const [data,setData]= useState([])
const [cart,setCart]=useState([])

  useEffect(() =>{
    async function fetchData(){
       let res= await axios.get(`https://wicked-long-underwear-slug.cyclic.app/products`)
      //  console.log("data",res.data.length)
       setData(res.data)
      }
      fetchData()

  },[])

  useEffect(() =>{
   

      async function fetchD(){
        let res= await axios.get(`https://wicked-long-underwear-slug.cyclic.app/usersdata`)
        // console.log("users",res.data.length)
        setUsers( res.data)
       }
       fetchD()
  },[])
 

  useEffect(() =>{
  const getData = () => {
    fetch("https://wicked-long-underwear-slug.cyclic.app/cart", {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    }).then(res => res.json())
        .then(res => setCart(res))
        .catch(err => console.log(err))
}
getData()
},[])





  return (


   
        <>
         {/* <Heading ml={["10px","10px","-100px"]}>DashBoard</Heading> */}
    <Box className='main'>
     
         <Box className='in' >
          <Box className='on1'>
            <Text className='text' >
              <RiShoppingCartFill /></Text>
          </Box>
          <Box  className='on2' >
          <Text className='text1' >Orders</Text>
          <Text className='text2' >{cart.length}</Text>
          </Box>
         </Box>


         <Box className='in' >
          <Box className='on1'>
            <Text className='text' >
              <BsBag /></Text>
          </Box>
          <Box  className='on2' >
          <Text className='text1' >Inventory</Text>
          <Text className='text2' >{data.length}</Text>
          </Box>
         </Box>


         <Box className='in' >
          <Box className='on1'>
            <Text className='text' >
              <FaUserFriends /></Text>
          </Box>
          <Box  className='on2' >
          <Text className='text1' >Customers</Text>
          <Text className='text2' >{users.length}</Text>
          </Box>
         </Box>

         <Box className='in' >
          <Box className='on1'>
            <Text className='text' >
              <RiAdminFill /></Text>
          </Box>
          <Box  className='on2' >
          <Text className='text1' >No.of.Admins</Text>
          <Text className='text2' >5</Text>
          </Box>
         </Box>
          
    </Box>

    <Graph />
        </>
     
   

    
    
 )
}
 export default Dashboard




