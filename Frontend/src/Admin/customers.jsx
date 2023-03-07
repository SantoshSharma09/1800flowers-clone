import React, { useEffect ,useState} from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,

  TableContainer,

} from '@chakra-ui/react'
import './styles/Inventory.css'
import axios from 'axios'
const Customers = () => {

  const [data,setData]= useState([])


  useEffect(()=>{

      async function fetchdata(){
        let res= await axios.get(`https://wicked-long-underwear-slug.cyclic.app/usersdata`)  
        console.log(res)
        setData(res.data)
      }
      fetchdata()
  },[])
  
  return (
    <>
    <TableContainer  className='one'>
    <Table  colorScheme='white'>
     
      <Thead  className='head'>
        <Tr className='two' >
        

          <Th className='three' >Name</Th>
          <Th  className='three' >Phone Number</Th>
          <Th className='three' >Email Adress</Th>
          <Th className='three' >User ID</Th>
          <Th className='three' >Gender</Th>
        </Tr>
      </Thead>

      {data && data.map((ele)=>{
        return(
          <>
            <Tbody>
        <Tr className='two'>
          <Td>{ele.username}</Td>
          <Td>{ele.number}</Td>
          <Td >{ele.email}</Td>
          <Td>{ele._id}</Td>
          <Td>{ele.gender}</Td>
         
        </Tr>
 
      </Tbody>
          </>
        )
      })}
    
      {/* <Tfoot>
        <Tr backgroundColor={"white"}>
          <Th>To convert</Th>
          <Th>into</Th>
          <Th >multiply by</Th>
          
        </Tr>
      </Tfoot> */}
    </Table>
  </TableContainer>
    
    {/* <Box ml={"45%"} display={"flex"} gap={"10px"}  mt={"20px"}>
    <Button >Previous</Button>
  <Button >1</Button>
  <Button >2</Button>
  <Button >3</Button>
  <Button >4</Button>
  <Button >Next</Button>
    </Box> */}
  </>
  )
}

export default Customers