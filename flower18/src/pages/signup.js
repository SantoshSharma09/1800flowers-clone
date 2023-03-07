import {
  Flex,
  Box,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormLabel,
} from "@chakra-ui/react";

import Image from "next/image";
import { useState } from "react";
import { auth, db, provider } from "../firebase/firebase-config";
import Link from "next/link";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Signup = async () => {
    // console.log(email, password);
    try {
      const { data } = await axios.post(`/api/register`, {
        email,
        password,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      mt={"1%"}
    >
      <Stack spacing={8} mx={"auto"} w={500} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Image
            src={"/Circle Flower Natural Brand Logo (1).png"}
            alt="Logo"
            width={150}
            height={150}
          />
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          bgImage={"/wave.jpg"}
          p={6}
        >
          <Stack spacing={4}>
            <Box>
              <FormLabel>Email address</FormLabel>
              <Input
                type={"email"}
                placeholder="Email"
                value={email}
                my="2"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>

            <Box>
              <FormLabel>Password</FormLabel>
              <Input
                type={"password"}
                placeholder="password"
                value={password}
                my="2"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Link href="/login">
              <Button onClick={Signup}>Sign Up</Button>
            </Link>
            {/* <Link href="/">
              <Button
                className="googlebtn"
                backgroundColor={"royalblue"}
                color={"white"}
                my="2"
                onClick={signInWithGoogle}
              >
                Sign In Google
              </Button>
            </Link> */}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
