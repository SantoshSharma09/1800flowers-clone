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
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    try {
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
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
            Login
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
                my="2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box>
              <FormLabel>Password</FormLabel>
              <Input
                type={"password"}
                placeholder="password"
                my="2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Button onClick={onSubmit}>Login</Button>
            <Text color="white" fontSize={20}>
              Not a member{" "}
              <Link fontStyle="underlined" href="/signup">
                Register
              </Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
