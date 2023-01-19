import {
  Flex,
  Box,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  FormLabel,
} from "@chakra-ui/react";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Image from "next/image";
import { useState } from "react";
import { auth, provider } from "./firebase/firebase-config";

export default function Login() {
  //---------------Signup------------------//
  const [emailSignIn, setEmailSignIn] = useState("");
  const [passwordSignIn, setPasswordSignIn] = useState("");

  const Login = async () => {
    try {
      const email = emailSignIn;
      const password = passwordSignIn;

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // console.log(user);
      setEmailSignIn("");
      setPasswordSignIn("");
    } catch (error) {
      alert("Wrong Credentials");
      console.log(error);
    }
  };
  const Logout = async () => {
    try {
      await signOut(auth);
      alert("Logout Successful");
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
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Image src={"/logo.png"} alt="Logo" width={150} height={150} />
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Login
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <Box>
              <FormLabel>Email address</FormLabel>
              <Input
                type={"email"}
                placeholder="Email"
                value={emailSignIn}
                my="2"
                onChange={(e) => setEmailSignIn(e.target.value)}
              />
            </Box>

            <Box>
              <FormLabel>Password</FormLabel>
              <Input
                type={"password"}
                placeholder="password"
                value={passwordSignIn}
                my="2"
                onChange={(e) => setPasswordSignIn(e.target.value)}
              />
            </Box>
            <Button onClick={Login}>Login</Button>
            <Button my="2" onClick={Logout}>
              Logout
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}