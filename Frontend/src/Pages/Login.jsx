// import { Button, Input } from "@chakra-ui/react";
// import React from "react";
// import { useDispatch } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import { login } from "../store/Auth/auth.actions";

// export const Login = () => {
//   const dispatch = useDispatch();
//   // const location = useLocation();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log("yahooo");
//     dispatch(login({ email: "eve.holt@reqres.in", password: "cityslicka" }));
//     navigate("/cart");
//   };
//   return (
//     <div>
//       <form action="" onSubmit={(e) => handleSubmit(e)}>
//         <Input type={"email"} value={"eve.holt@reqres.in"}></Input>
//         <Input type={"password"} value={"cityslicka"}></Input>
//         <Button type="submit">Submit</Button>
//       </form>
//     </div>
//   );
// };

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { login } from "./../store/Auth/auth.actions";

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = () => {
    const payload = {
      email,
      password,
    };
    console.log(payload);
    dispatch(login(payload));
    toast({
      title: "Logged in Successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate(`/products`);
  
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"red.400"}>Services</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"red.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"red.400"}
                color={"white"}
                _hover={{
                  bg: "red.500",
                }}
                onClick={handleSubmit}
              >
                Sign in
              </Button>
              <Link to="/signup">
                <Text style={{ cursor: "pointer" }} color={"red.500"}>
                  {" "}
                  Create new account
                </Text>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
