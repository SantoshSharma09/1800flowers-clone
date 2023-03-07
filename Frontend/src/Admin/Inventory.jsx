import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  Input,
  Flex,
  CloseButton,
  useToast,
  
} from "@chakra-ui/react";

import "./styles/Inventory.css";

import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import {FaSortNumericUpAlt,FaSortNumericDownAlt} from "react-icons/fa"
import {BiSortAZ,BiSortZA,BiSearchAlt2} from "react-icons/bi"
import axios from "axios";

const Inventory = () => {
  const Toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [name, setName] = useState("");
  const [img1, setImg1] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");

  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState("");
  const [searchName,SetSearchName] =useState("")
  

  useEffect(() => {
    fetchData();
  }, [skip,searchName]);

  const fetchData = async () => {
    let res = await axios.get(
      `https://wicked-long-underwear-slug.cyclic.app/products/?q=${searchName}&limit=5&skip=${skip}`
    );
    //  console.log(res.data.length)
    setData(res.data);
  };

// console.log(data)

  async function UpdateData(id) {
    const payload = {
      name,
      img1,
      brand,
      price,
    };

    let res = await axios.patch(
      `https://wicked-long-underwear-slug.cyclic.app/products/update/${id}`,
      payload
    );
    console.log(res);
    fetchData();
  }

  const Delete = async (id) => {
    let res = await axios.delete(
      `https://wicked-long-underwear-slug.cyclic.app/products/delete/${id}`
    );
    console.log(res);
    fetchData();
  };

  // <-----------------sorting by brand -------------------->
  // const ascendingbrand = async () => {
  //   let res = await axios.get(
  //     `https://wicked-long-underwear-slug.cyclic.app/products/?sort=category&order=1`
  //   );
  //   //  console.log(res.data.length)
  //   setData(res.data);
  //   // fetchData();
  // };

  // const descendingbrand = async () => {
  //   let res = await axios.get(
  //     `https://wicked-long-underwear-slug.cyclic.app/products/?sort=category&order=-1`
  //   );
  //   //  console.log(res.data.length)
  //   setData(res.data);
  //   // fetchData();
  // };

// <-----------------sorting by price --------------->
  const ascendingprice = async () => {
    let res = await axios.get(
      `https://wicked-long-underwear-slug.cyclic.app/products/?sort=price&order=1`
    );
     console.log(res.data)
    setData(res.data);
    // fetchData();
  };

  const descendingprice = async () => {
    let res = await axios.get(
      `https://wicked-long-underwear-slug.cyclic.app/products/?sort=price&order=-1`
    );
  
    setData(res.data);
    
  };
 


  const search = async () => {
    // let res = await axios.get(
    //   `https://glamorous-jumpsuit.cyclic.app/data/?q=name`
    // );
    // setData(res.data);
    
  };
 



  return (
    <>
      <TableContainer className="one">
        <Table>
          <Thead className="head">
            <Tr className="two">
              <Th fontSize={"18px"} className="three">
                Image
              </Th>
               <Th>
               <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "200px",
                    marginLeft:"-20px"
                  }}
                >
                  <p  style={{ display: show ? "none" : "flex" ,fontSize:"20px" ,marginLeft:"70px" ,marginTop:"5px",color:"#4a5568",fontWeight:"bold"}}>NAME</p>
                  {show ? (
                    <Input
                    border={"1px solid black"}
                      type={"search"}
                      w={"780px"}
                      h={"40px"}
                     onChange={(e)=>SetSearchName(e.target.value)}
                     
                    ></Input>
                  ) : null}

                  <button onClick={() => setShow(true)}>
                    <BiSearchAlt2  fontSize={25} onClick={()=>search()} mt={"25px"}  />
                  </button>
                  <button
                    onClick={() => setShow(false)}
                    style={{ display: show ? "flex" : "none",marginLeft:"20px" }}
                  >
                    <CloseButton fontSize={15} mt={"5px"}  />
                  </button>
                </div>

                </Th>


              <Th fontSize={"18px"} className="three">
                Product Id
              </Th>

              <Th fontSize={"18px"} className="three">
                <Flex gap={"20px"}>
                <FaSortNumericUpAlt   onClick={()=>ascendingprice()} id="fsize" />
                Price
                <FaSortNumericDownAlt onClick={()=>descendingprice()}  id="fsize"/>
                </Flex>
               
                 
              </Th>
              <Th fontSize={"18px"} className="three">
                <Flex gap={"20px"}>
              {/* <BiSortAZ onClick={()=>ascendingbrand()} id="fsize" /> */}
          
              Brand
              {/* <BiSortZA  onClick={()=>descendingbrand()}  id="fsize"/> */}
               
                </Flex>
              </Th>
              <Th fontSize={"18px"} className="three"  >
                Edit
              </Th>
              <Th fontSize={"18px"} className="three">
                Delete
              </Th>
            </Tr>
          </Thead>

          {data.map((ele) => {
            return (
              <Tbody>
                <Tr className="two">
                  <Td>
                    {" "}
                    <img src={ele.img} alt="" />{" "}
                  </Td>

                  <Td >{ele.name.substring(0,20)}</Td>
                  <Td>{ele._id}</Td>
                  <Td>₹ {ele.price}</Td>
                  <Td>{ele.category}</Td>
                  <Td>
                    <button onClick={() => setUpdate(ele._id)}>
                      <AiFillEdit onClick={onOpen} fontSize={"30px"} />
                    </button>
                  </Td>
                  <Td>
                    <button>
                      <MdOutlineDeleteOutline
                        fontSize={"30px"}
                        // onClick={() => Delete(ele._id)}
                        onClick={() => {
                          Delete(ele._id);
                          Toast({
                            title: " Product Deleted",
                            position: 'top',
                            status: "success",
                            duration: 4000,
                            isClosable: true,
                          });
                        }}
                      />
                    </button>
                  </Td>
                </Tr>
              </Tbody>
            );
          })}
        </Table>
      </TableContainer>

      <Box ml={"40%"} display={"flex"} gap={"20px"}>
        <Button className="btn1" onClick={() => setSkip(skip - 5)}>
          previous
        </Button>

        <Button className="btn2" onClick={() => setSkip(skip + 5)}>
          next
        </Button>
      </Box>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Inventory Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                ref={initialRef}
                placeholder="Product Image"
                onChange={(e) => setImg1(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <Input
                placeholder="Product Name"
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <Input
                placeholder="Product Brand"
                onChange={(e) => setBrand(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <Input
                placeholder="Product Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              // onClick={() => UpdateData(update)}
              onClick={() => {
                UpdateData(update)
                Toast({
                  title: " Product Edited",
                  position: 'top',
                  status: "success",
                  duration: 4000,
                  isClosable: true,
                });
              }}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Inventory;
