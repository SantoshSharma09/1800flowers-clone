import React, { useEffect, useState } from "react";
import axios from "axios";
import FetchSearchData from "./FetchSearchData";
import { BsSearch } from "react-icons/bs";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
  Button,
  Box,
  Input,
  Image,
  RadioGroup,
  Stack,
  Radio,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Search = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = () => {
    FetchSearchData(query)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  const [scrollBehavior, setScrollBehavior] = React.useState("inside");

  const btnRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        mt={4}
        ref={btnRef}
        onClick={onOpen}
        // border={"1px solid white"}
        h={"8"}
        w={"28%"}
        mr={"10"}
        alignItems={"center"}
        gap={"10"}
        cursor="pointer"
      >
        <Box m={"auto"} color={'white'} fontSize={"3xl"}>
          <BsSearch width={'80'}/>
        </Box>
{/* 
        <Text color={"gray.500"}>Search</Text> */}
      </Flex>
      <Modal
      
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
      >
        <ModalOverlay />
        <ModalContent>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <Box h={"auto"}>
              <Box>
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="search"
                  onInput={handleSearch}
                  outline={"none"}
                  border={"none"}
                />
              </Box>
              <Box>
                {data.length > 0 &&
                  data.map((el, i) => {
                    return (
                      <>
                      <Link key={i} to="/products">
                        <Flex
                          
                          alignItems={"center"}
                          justifyContent={"space-around"}
                          mt={"5"}
                          gap={"10"}
                        >
                          <Image src={el.img} w={"74px"} />
                          <Text w={"75%"}>{el.name}</Text>
                        </Flex>
                        </Link>
                      </>
                    );
                  })}
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Search;

// https://wicked-long-underwear-slug.cyclic.app/products?q=vibrant
