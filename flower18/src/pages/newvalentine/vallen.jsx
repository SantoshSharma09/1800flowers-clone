import { Text, Box, Center, Image, Wrap } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Pages = ({ data }) => {
  // console.log(data);
  return (
    <>
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
            {data.length > 0 &&
              data.map((e, i) => (
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
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    `https://wicked-long-underwear-slug.cyclic.app/products/`
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}

export default Pages;
