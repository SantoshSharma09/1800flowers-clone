import { Text, Box, Center, Image, Wrap, Button } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";

const Pages = ({ data }) => {
  const [page, setPage] = useState(data);

  const loadmore = async () => {
    const res = await fetch(
      `https://wicked-long-underwear-slug.cyclic.app/products?limit=8`
    );
    const posts = await res.json();
    setPage((val) => [...val, ...posts]);
  };
  const htol = async () => {
    let res = await fetch(
      `https://wicked-long-underwear-slug.cyclic.app/products?sort=price&order=1`
    );
    let data = await res.json();
    setPage(data);
  };
  const ltoh = async () => {
    let res = await fetch(
      `https://wicked-long-underwear-slug.cyclic.app/products?sort=price&order=-1`
    );
    let data = await res.json();
    setPage(data);
  };
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
      <Center py={12} backgroundColor={"rgb(245,245,245)"}>
        <Wrap spacing={"80px"} width={"90%"} justify="center">
          <Box
            w={{ base: "75%", md: "85%", lg: "95%" }}
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(4,1fr)",
            }}
            gap={"15px"}
            m={"auto"}
          >
            {page.length > 0 &&
              page.map((e, i) => (
                <Box key={i}>
                  <Link href={`/newvalentine/${e._id}`}>
                    <Box
                      m="auto"
                      w={{ base: "", md: "", lg: "95%" }}
                      bg="white"
                      padding="25px"
                      _hover={{
                        boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
                      }}
                    >
                      <Image src={e.img} w="100%" alt="img" />
                    </Box>
                  </Link>
                  <Text
                    textAlign={"center"}
                    color="blue.900"
                    fontSize={"14px"}
                    cursor="pointer"
                  >
                    {e.name}
                  </Text>

                  <br />
                  <Text textAlign={"center"} color="black" fontWeight={"600"}>
                    ${e.price}
                  </Text>

                  <Text
                    textAlign={"center"}
                    color="grey"
                    fontSize={"12px"}
                    fontWeight={"100"}
                  >
                    {e.category}
                  </Text>
                </Box>
              ))}
          </Box>
        </Wrap>
      </Center>

      <Button
        backgroundColor={"#65388B"}
        ml={["21%", "35%", "45%", "47%"]}
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

export async function getServerSideProps() {
  const res = await fetch(
    `https://wicked-long-underwear-slug.cyclic.app/products/?limit=8`
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}

export default Pages;
