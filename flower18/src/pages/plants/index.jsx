import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";
import {
  Box,
  Radio,
  Flex,
  Stack,
  Card,
  CardBody,
  Text,
  Divider,
  Button,
  ButtonGroup,
  CardFooter,
  Image,
  Heading,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";
const Plants = ({ Plants }) => {
  const [page, setPage] = useState(Plants);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const loadmore = async () => {
    const res = await fetch(
      `https://mock-server-f2z5.onrender.com/plants?_limit=9&&_start=10`
    );
    const posts = await res.json();
    setPage((val) => [...val, ...posts]);
  };
  const htol = async () => {
    let res = await fetch(
      `https://mock-server-f2z5.onrender.com/plants?_sort=price&_order=asc`
    );
    let data = await res.json();
    setPage(data);
  };
  const ltoh = async () => {
    let res = await fetch(
      `https://mock-server-f2z5.onrender.com/plants?_sort=price&_order=desc`
    );
    let data = await res.json();
    setPage(data);
  };
  console.log(data);
  return (
    <>
      <Box border={"0px solid black"} height={"700px"} display={"flex"}>
        <Box
          border={"0px solid red"}
          width={"18%"}
          height={"600px"}
          position={"fixed"}
          marginTop={"70px"}
          bgImage={"https://thumbs.dreamstime.com/b/abstract-purple-wave-background-abstract-purple-wave-background-vector-illustration-116751938.jpg"}
        >
          <Text ml={"20%"} mt={"20%"} color={"#9062BC"} fontSize={"2xl"}>
            Sort by Price
          </Text>
          <Stack
            borderRadius={"10px"}
            ml={"20%"}
            h={"100px"}
            // backgroundColor={"#9062BC"}
            color={"black"}
            mt={"3%"}
            direction="column"
          >
            <Radio
              mt={"25px"}
              size="lg"
              name="1"
              colorScheme="black"
              color={"black"}
              
              onClick={() => htol()}
            >
              Low to High
            </Radio>
            <Radio
              size="lg"
              name="1"
              colorScheme="black"
              color={"black"}
              onClick={() => ltoh()}
            >
              High to Low
            </Radio>
          </Stack>
          
          
          <Text ml={"20%"} mt={"10%"} color={"#9062BC"} fontSize={"2xl"}>
            Filter by Category
          </Text>
          <Stack
            borderRadius={"10px"}
            h={"250px"}
            // backgroundColor={"#9062BC"}
            ml={"20%"}
            color={"black"}
            mt={"3%"}
            direction="column"
          >
        
            <Radio size="lg" name="1" colorScheme="white" >
              Plants
            </Radio>
            <Radio size="lg" name="1" colorScheme="white" >
              Plants
            </Radio>
            <Radio size="lg" name="1" colorScheme="white" >
              Flower
            </Radio>
            <Radio size="lg" name="1" colorScheme="white" >
              Gifts and Food
            </Radio>
            <Radio size="lg" name="1" colorScheme="white" >
              Sympathy
            </Radio>
          </Stack>
        </Box>
        <Box border={"0px solid blue"} ml={"20%"} width={"80%"}>
          <Grid templateColumns={"repeat(3,1fr)"} gap={6}>
            {page.map((el) => (
              <GridItem maxW="sm">
                <Card>
                  <CardBody>
                    <Image
                      src={el.img}
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Image
                      mt={"20px"}
                      width={"60%"}
                      src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg"
                    />
                    <Stack mt="6" spacing="3">
                      {/* <Heading size="md">{el.mbp318}</Heading> */}
                      <Heading fontSize={"24px"}>{el.name}</Heading>
                      <Flex gap={10}>
                        <Text color="#734F96" fontSize="2xl">
                          ${el.price}
                        </Text>
                        <Link href={`plants/${el.id}`}>
                          <Button ml={"120px"} colorScheme="purple">Check Out</Button>
                        </Link>
                      </Flex>
                    </Stack>
                  </CardBody>
                </Card>
              </GridItem>
            ))}
          </Grid>
          <Button onClick={loadmore} ml={"40%"} colorScheme="purple">
            Load More
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default Plants;
export async function getStaticProps() {
  let res = await fetch(
    `https://mock-server-f2z5.onrender.com/plants?_limit=12`
  );
  let data = await res.json();
  return {
    props: {
      Plants: data,
    },
  };
}