import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";

// import styled from "styled-components";
// const Pages = ({ data }) => {
//   console.log(data, "mydata");
//   const ProductWrapper = styled.div`
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: "20px";
//     height: auto;
//     width: 80%;
//   `;
//   const Button=styled.button`
//     padding: 10px;
//     margin-left: 40%;
//     border: 1px solid red;
//   `
//   const [page, setPage] = useState(data);

//   const loadmore = async () => {
//     const res = await fetch(
//       `https://fine-erin-turkey-hose.cyclic.app/Birthday?_limit=6&&_start=6`
//     );
//     const posts = await res.json();
//     setPage((val) => [...val, ...posts]);
//   };
//    console.log(page)
//   return (
//     <div>
//       <ProductWrapper>
//         {page.map((el) => {
//           return (
//             <div key={el.id}>
//               <Link href={`birthday/${el.id}`}>
//                 <img src={el.img} alt={el.id}></img>
//                 <h1>{el.name}</h1>
//                 <p>{el.price}</p>
//               </Link>
//             </div>
//           );
//         })}
//       </ProductWrapper>
//       <Button onClick={loadmore}>Load More</Button>
//     </div>
//   );
// };

// export default Pages;

// export const getStaticProps = async () => {

//   const r = await fetch(` https://fine-erin-turkey-hose.cyclic.app/Birthday?_limit=6`);
//   const d = await r.json();
//   return {
//     props: {
//       data: d,
//     },
//   };
// };
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

const Birthday = ({ birthData }) => {
  // console.log(proj)

  const [page, setPage] = useState(birthData);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  function FetchProduct(query) {
    return axios.get(
      `
  https://fine-erin-turkey-hose.cyclic.app/Birthday?q=${query}
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
      `https://fine-erin-turkey-hose.cyclic.app/Birthday?_limit=6&&_start=6`
    );
    const posts = await res.json();
    setPage((val) => [...val, ...posts]);
  };

  const HtoL=async()=>{
    const res=await fetch(`
    https://fine-erin-turkey-hose.cyclic.app/Birthday?_sort=price&_order=asc&&_limit=6&&_start=6
    `);
    const posts=await res.json();
    setPage((val)=>[...val,...posts])
  }
  console.log(page);

  return (
    <>
    {/* <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search"
          style={{border:"1px solid red"}}
        />
        <Button onClick={handleSearch}>SEARCH</Button> */}
    <Box border={"0px solid black"} height={"700px"} display={"flex"} marginTop={"15%"} marginBottom={"35%"}>
      {/* <Box width={"18%"} mt={"0%"} height={"600px"} position={"fixed"}>
        <Text ml={"20%"} mt={"20%"} color={"#9062bc"} fontSize={"2xl"}>
          Search By Name
        </Text>
        
      </Box> */}
      <Box
        border={"0px solid red"}
        width={"20%"}
        // mt={"-300px"}
        height={"600px"}
        position={"fixed"}
        marginTop={"2px"}
        bgImage={"/wave.jpg"}
        p={6}
      >
        <Text ml={"20%"} mt={"20%"} color={"#9062bc"} fontSize={"2xl"}>
          Sort by Price
        </Text>

        <Box
        rounded={"lg"}
          borderRadius={"10px"}
          ml={"20%"}
          h={"100px"}
          // backgroundColor={"#9062bc"}
          color={"black"}
          mt={"3%"}
          direction="column"
        >
          <Radio
            mt={"25px"}
            size="lg"
            name="1"
            colorScheme="white"
            color={"black "}
            defaultChecked
            onClick={HtoL}
          >
            Low to High
          </Radio>

          <Radio size="lg" name="1" colorScheme="white" defaultChecked>
            High to Low
          </Radio>
        </Box>

        

        <Text ml={"20%"} mt={"10%"} color={"#9062bc"} fontSize={"2xl"}>
          Filter by Category
        </Text>
        <Stack
          borderRadius={"10px"}
          h={"250px"}
          // backgroundColor={"#9062bc"}
          ml={"20%"}
          color={"black"}
          mt={"3%"}
          direction="column"
        >
          

          <Radio size="lg" name="1" colorScheme="white" defaultChecked>
            sympathy
          </Radio>
          <Radio size="lg" name="1" colorScheme="white" defaultChecked>
            Occasion
          </Radio>
          <Radio size="lg" name="1" colorScheme="white" defaultChecked>
            Flower
          </Radio>
          <Radio size="lg" name="1" colorScheme="white" defaultChecked>
            Gifts 
          </Radio>
          <Radio size="lg" name="1" colorScheme="white" defaultChecked>
            Food
          </Radio>
        </Stack>
      </Box>
      <Box border={"0px solid blue"} ml={"20%"} width={"80%"}>
        <Grid templateColumns={"repeat(3,1fr)"} gap={6}>
          {data.map((el) => (
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
                      <Link href={`birthday/${el.id}`}>
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

export default Birthday;

export async function getStaticProps() {
  let res = await fetch(
    `https://fine-erin-turkey-hose.cyclic.app/Birthday?_limit=6`
  );

  let data = await res.json();

  return {
    props: {
      birthData: data,
    },
  };
}
