import { Button, Heading, Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, getProductsData,htol,ltoh } from "./../store/App/app.actions";

import {
  Flex,
  Circle,
  Box,
  img,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

const data = {
  isNew: true,
  imgURL:
    "https://imgs.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

export const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, products } = useSelector((store) => store.app);
  const [page, setPage] = useState([]);
  const loadmore = async () => {
    const res = await fetch(
      `https://wicked-long-underwear-slug.cyclic.app/products?limit=4`
    );
    const posts = await res.json();
    setPage((val) => [...val, ...posts]);
  };
  const fd=async()=>{
    return fetch(`https://wicked-long-underwear-slug.cyclic.app/products?limit=12`)
    .then((res)=>res.json())
  }
  const htol = async () => {
    let res = await fetch(
      `https://wicked-long-underwear-slug.cyclic.app/products/?sort=price&order=1&limit=12`
    );
    let data = await res.json();
    setPage(data);
  };
  const ltoh = async () => {
    let res = await fetch(
      `https://wicked-long-underwear-slug.cyclic.app/products?sort=price&order=-1&limit=12`
    );
    let data = await res.json();
    setPage(data);
  };

  useEffect(() => {
    
    hfd()
  }, []);
  
 const hfd=async()=>{
  try{
    let d=await fd()
    setPage(d)
  }catch(err){
    console.log(err)
  }
 }
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };
   

  console.log(isLoading, isError, products);

  if (isLoading) return <Spinner />;
  else if (isError) {
    <Heading>Error.....</Heading>;
  }

  return (
    <>
    <Box display={"flex"} gap={"20px"} color={"white"} mt={"30px"}>
        <Button
          backgroundColor={"#65388B"}
          ml={["18%", "25%", "35%", "42%"]}
          onClick={() => htol()}
          _hover={{
            backgroundColor: "#65388B",
          }}
        >
          Low to High
        </Button>
        <Button
          backgroundColor={"#65388B"}
          onClick={() => ltoh()}
          _hover={{
            backgroundColor: "#65388B",
          }}
        >
          High to Low
        </Button>
      </Box>
    
      <SimpleGrid columns={[1, 2, 4]}>
        {page.map((el, ind) => (
          <SimpleGrid
            key={ind}
            minChildWidth="120px"
            spacing="40px"
            p={50}
            // w="full"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              bg={"white"}
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              shadow="lg"
              position="relative"
              w={'25'}
              h={'60vh'}
            >
              {data.isNew && (
                <Circle
                  size="10px"
                  position="absolute"
                  top={2}
                  right={2}
                  bg="red.200"
                />
              )}

              <Image
                src={el.img}
                alt={`Picture of ${data.name}`}
               
                h={'auto'}
              />

              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  {data.isNew && (
                    <Badge
                      rounded="full"
                      px="2"
                      fontSize="0.8em"
                      colorScheme="red"
                    >
                      New
                    </Badge>
                  )}
                </Box>
                <Flex
                  mt="1"
                  justifyContent="space-between"
                  alignContent="center"
                >
                  <Box
                    fontSize="2xl"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {el.name}
                  </Box>
                  <div onClick={() => handleAddToCart(el)}>
                    <Tooltip
                      label="Add to cart"
                      bg="white"
                      placement={"top"}
                      color={"gray.800"}
                      fontSize={"1.2em"}
                    >
                      <chakra.a href={"#"} display={"flex"}>
                        <Icon
                          as={FiShoppingCart}
                          h={7}
                          w={7}
                          alignSelf={"center"}
                        />
                      </chakra.a>
                    </Tooltip>
                  </div>
                </Flex>

                <Flex flexDirection={"column"} alignContent="center">
                  {/* <Rating rating={data.rating} numReviews={data.numReviews} /> */}
                  <Box display={"flex"}>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </Box>
                  <Box fontSize="2xl" color={"white"} textAlign="right">
                    <Box
                      as="span"
                      color={"gray.600"}
                      fontWeight={400}
                      fontSize="2xl"
                    >
                      ₹{el.price.toFixed(2)}
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </SimpleGrid>
        ))}
      </SimpleGrid>

      <Button
        backgroundColor={"#65388B"}
        // ml={["21%", "35%", "45%", "47%"]}
        m={'auto'}
        color="white"
        onClick={loadmore}
        mt={"10px"}
        mb={"10px"}
        _hover={{
          backgroundColor: "#65388B",
        }}
      >
        {" "}
        Load More
      </Button>
    </>
  );
};
