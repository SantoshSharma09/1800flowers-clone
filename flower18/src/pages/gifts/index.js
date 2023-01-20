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
// import {BsCircle} from "react-icons/bs"

const Gifts = ({ gifts }) => {
  // console.log(proj)

  const [page, setPage] = useState(gifts);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  function FetchProduct(query) {
    return axios.get(
      `
      https://fine-erin-turkey-hose.cyclic.app/gifts?q=${query}
  `
    );
  }

  useEffect(() => {
    FetchProduct("")
      .then((res) => {
        setData(res.data);
      })
      .catch((er) => {
        console.log("err:", er);
      });
  }, []);

  const handleSearch = () => {
    FetchProduct(query)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  const loadmore = async () => {
    const res = await fetch(
      `https://fine-erin-turkey-hose.cyclic.app/gifts?_limit=27&&_start=28`
    );
    const posts = await res.json();
    setPage((val) => [...val, ...posts]);
  };

  console.log(page);

  return (
    <>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search"
        style={{ border: "1px solid red" }}
      />
      <Button onClick={handleSearch}>SEARCH</Button>
      <Box border={"0px solid black"} height={"700px"} display={"flex"}>
        <Box width={"18%"} mt={"0%"} height={"600px"} position={"fixed"}>
          <Text ml={"20%"} mt={"20%"} color={"#9062bc"} fontSize={"2xl"}>
            Search By Name
          </Text>
        </Box>
        <Box
          border={"0px solid red"}
          width={"18%"}
          mt={"0%"}
          height={"600px"}
          position={"fixed"}
          marginTop={"70px"}
        >
          <Text ml={"20%"} mt={"20%"} color={"#9062bc"} fontSize={"2xl"}>
            Sort by Price
          </Text>
          <Stack
            borderRadius={"10px"}
            ml={"20%"}
            h={"100px"}
            backgroundColor={"#9062bc"}
            color={"white "}
            mt={"3%"}
            direction="column"
          >
            <Radio
              mt={"25px"}
              size="lg"
              name="1"
              colorScheme="white"
              color={"white "}
              defaultChecked
            >
              Low to High
            </Radio>

            <Radio size="lg" name="1" colorScheme="white" defaultChecked>
              High to Low
            </Radio>
          </Stack>

          <Text ml={"20%"} mt={"10%"} color={"#9062bc"} fontSize={"2xl"}>
            Filter By Names
          </Text>
          <Stack
            borderRadius={"10px"}
            h={"100px"}
            backgroundColor={"#9062bc"}
            ml={"20%"}
            color={"white "}
            mt={"3%"}
            direction="column"
          >
            <Radio
              mt={"25px"}
              size="lg"
              name="1"
              colorScheme="white"
              defaultChecked
            >
              Ascending
            </Radio>

            <Radio size="lg" name="1" colorScheme="white" defaultChecked>
              Descending
            </Radio>
          </Stack>

          <Text ml={"20%"} mt={"10%"} color={"#9062bc"} fontSize={"2xl"}>
            Filter by Category
          </Text>
          <Stack
            borderRadius={"10px"}
            h={"250px"}
            backgroundColor={"#9062bc"}
            ml={"20%"}
            color={"white "}
            mt={"3%"}
            direction="column"
          >
            <Radio
              mt={"25px"}
              size="lg"
              name="1"
              colorScheme="white"
              defaultChecked
            >
              Ascending
            </Radio>

            <Radio size="lg" name="1" colorScheme="white" defaultChecked>
              Gifts
            </Radio>
            <Radio size="lg" name="1" colorScheme="white" defaultChecked>
              Gifts
            </Radio>
            <Radio size="lg" name="1" colorScheme="white" defaultChecked>
              Flower
            </Radio>
            <Radio size="lg" name="1" colorScheme="white" defaultChecked>
              Gifts and Food
            </Radio>
            <Radio size="lg" name="1" colorScheme="white" defaultChecked>
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
                      <Heading size="md">{el.mbp318}</Heading>
                      <Heading size="sm">{el.name}</Heading>
                      <Flex gap={10}>
                        <Text color="#734f96" fontSize="2xl">
                          {el.price}
                        </Text>
                        <Link href={`gifts/${el.id}`}>
                          <Button colorScheme="purple">Check Out</Button>
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

export default Gifts;

export async function getStaticProps() {
  let res = await fetch(
    `https://fine-erin-turkey-hose.cyclic.app/gifts?_limit=27`
  );

  let data = await res.json();

  return {
    props: {
      gifts: data,
    },
  };
}
