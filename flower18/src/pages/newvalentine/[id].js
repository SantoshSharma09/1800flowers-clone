import {
  ArrowRightIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  TriangleDownIcon,
} from "@chakra-ui/icons";
import {
  Button,
  Text,
  Image,
  Card,
  CardBody,
  Divider,
  Stack,
  Box,
  Radio,
  RadioGroup,
  Checkbox,
  MenuItem,
  MenuList,
  Menu,
  MenuButton,
  Input,
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb,
  HStack,
  Link,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

import React, { useEffect, useState } from "react";

const SinglePage = ({ data }) => {
  const [value, setValue] = React.useState("1");
  const toast = useToast();

  const handleAdd = async () => {
    await axios.post(
      `https://wicked-long-underwear-slug.cyclic.app/cart/add`,data
    )
    .then((res)=>{
      alert("Item has been added"),router.push("/addtocart")
    })
    .catch((err)=>{
      alert(err)
    })
    toast({
      title: "Item has been added to cart.",
      description: "Item has been successfully added to cart.",
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <div>
      <Breadcrumb
        color="#65388B"
        spacing="3px"
        fontSize={14}
        ml={4}
        mt="90px"
        separator={<ChevronRightIcon />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/">Birthday</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/">Birthday Flowers</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Stack direction={{ base: "column", md: "row" }}>
        <Box w={{ base: "90%", md: "35%" }} mx={"auto"}>
          <Card>
            <CardBody>
              {data.map((el, i) => {
                return <Image key={i} src={el.img} alt="img" />;
              })}
              <Stack mt="6" spacing="3">
                <Text style={{ textAlign: "left", fontSize: "16px" }}>
                  Our local florists put love into every arrangement. Sometimes
                  they have to substitute flower types, colors & containers to
                  give you the freshest blooms available. Although your bouquet
                  may vary from the photo shown, we promise your recipient will
                  love it just as much!
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </Box>

        <Box w={{ base: "90%", md: "65%" }} m={"auto"} paddingLeft={"35px"}>
          <h1 style={{ fontSize: "25px", textAlign: "left" }}></h1>
          <img
            style={{ height: "20px", marginTop: "10px" }}
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg?quality=75&auto=webp&optimize={medium}"
            alt="img"
          />

          <div
            style={{
              paddingLeft: "10px",
              marginTop: "15px",
              padding: "4px",
              height: "40px",
              textAlign: "left",
              backgroundColor: "#EAE8EC",
              borderRadius: "2px",
            }}
          >
            <Text as="b">1. Pick Your Item</Text>
          </div>

          <div
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              height: "220px",
              padding: "20px",
            }}
          >
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction="column">
                <Radio colorScheme={"purple"} size="lg" value="1">
                  <Text as="b">Extra Large - 100.00 </Text>
                </Radio>
                <Radio colorScheme={"purple"} size="lg" value="2">
                  <Text as="b">Large - 69.99</Text>
                </Radio>
                <Radio colorScheme={"purple"} size="lg" value="3">
                  <Text as="b">Medium - 59.99</Text>
                </Radio>
                <Radio colorScheme={"purple"} size="lg" value="4">
                  <Text as="b">Small - 49.99</Text>
                </Radio>
              </Stack>
            </RadioGroup>

            <div style={{ display: "flex", marginTop: "20px" }}>
              <h3
                style={{
                  backgroundColor: "pink",
                  width: "80px",
                  height: "35px",
                  borderRadius: "4px",
                }}
              >
                <Text as="b">Klarna.</Text>
              </h3>
              <h3 style={{ marginLeft: "10px" }}>
                4 interest-free payments of $12.49.
              </h3>
              <u style={{ color: "#65388B" }}>
                <h3>Learn More</h3>
              </u>
            </div>
          </div>

          <Stack
            direction={{ base: "column", lg: "row" }}
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              padding: "20px",
              marginTop: "20px",
              height: "150px",
              textAlign: "left",
              display: "flex",
            }}
          >
            <Box>
              <Checkbox colorScheme="green">
                <Text as="b">Start a subscription & save 15% Off</Text>
              </Checkbox>
            </Box>

            <Box>
              <div
                style={{
                  marginLeft: "10px",

                  display: "flex",
                }}
              >
                <Text as="b">Frequency:</Text>
                <Box borderRadius={"6px"} border={"1px solid #DCDCDC"} ml={5}>
                  <Menu w={"100%"}>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                      Every 4 Weeks
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Every Week</MenuItem>
                      <MenuItem>Every 2 Week</MenuItem>
                      <MenuItem>Every 4 Week</MenuItem>
                      <MenuItem>Every 6 Week</MenuItem>
                      <MenuItem>Every 8 Week</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
              </div>
              <div>
                <div>
                  <div
                    style={{
                      marginLeft: "10px",

                      display: "flex",
                    }}
                  >
                    <Text as="b">Duration:</Text>
                    <Box
                      borderRadius={"6px"}
                      border={"1px solid #DCDCDC"}
                      ml={8}
                      mt={1}
                    >
                      <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                          Twelve Months
                        </MenuButton>
                        <MenuList>
                          <MenuItem>continue until I stop</MenuItem>
                          <MenuItem>Three Months</MenuItem>
                          <MenuItem>Six Months</MenuItem>
                          <MenuItem>Twelve Months</MenuItem>
                        </MenuList>
                      </Menu>
                    </Box>
                  </div>
                </div>
              </div>
            </Box>
          </Stack>

          <div
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              padding: "20px",
              marginTop: "20px",

              textAlign: "left",
              display: "flex",
            }}
          >
            <Checkbox colorScheme="green"></Checkbox>
            <img
              style={{ marginTop: "5px", width: "15%", marginLeft: "5px" }}
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt199dfd765a419907/61e09d4f14ef402247cebaac/PP_UpsellIcon.svg"
              alt=""
            />
            <p style={{ marginLeft: "20px", marginTop: "4px" }}>
              Free Shipping/No service Charge for One Full Year for Only
              $29.99/Year
            </p>
          </div>

          <div
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",

              height: "200px",
              textAlign: "left",
            }}
          >
            <div
              style={{
                marginTop: "15px",
                padding: "4px",
                height: "40px",

                textAlign: "left",
                backgroundColor: "#EAE8EC",
                borderRadius: "2px",
              }}
            >
              <Text as="b">2. Enter Delivery Destination</Text>
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "400px",
                  marginLeft: "20px",
                }}
              >
                <Stack spacing={3}>
                  <Input variant="flushed" placeholder="Delivery Zip Code*" />
                </Stack>
              </div>

              <Box p={5}>
                <Box>
                  <p style={{ color: "grey" }}>Location type</p>
                </Box>

                <Box pt={2}>
                  <Menu isLazy>
                    <MenuButton>
                      <HStack gap={10}>
                        <Text> Residence</Text>
                        <Box>
                          <TriangleDownIcon />{" "}
                        </Box>
                      </HStack>
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Residence</MenuItem>
                      <MenuItem>Business</MenuItem>
                      <MenuItem>Funeral home</MenuItem>
                      <MenuItem>Hospital</MenuItem>
                      <MenuItem>Apartment</MenuItem>
                      <MenuItem>School</MenuItem>
                      <MenuItem>Church</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
              </Box>
            </div>

            <div>
              <Button
                onClick={handleAdd}
                marginTop="20px"
                marginLeft="20px"
                w={"90%"}
                fontSize="20px"
                bg="#61C278"
                color={"white"}
                _hover={{
                  bg: "#00c876",
                  color: "white",

                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              >
                Add to Cart <CalendarIcon ml={2} />
              </Button>
            </div>
          </div>

          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
              padding: "20px",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            <Text as="b">DESIGNED & DELIVERED BY LOCAL SHOP</Text>
          </div>
        </Box>
      </Stack>
    </div>
  );
};

export default SinglePage;

export async function getStaticPaths() {
  let r = await fetch(`https://wicked-long-underwear-slug.cyclic.app/products`);
  let d = await r.json();
  console.log(d);
  return {
    paths: d.map((el) => ({ params: { id: String(el._id) } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const { id } = context.params;
  const r = await fetch(
    `https://wicked-long-underwear-slug.cyclic.app/products/${id}`
  );
  const d = await r.json();
  console.log(d);
  return {
    props: {
      data: d,
    },
  };
}
