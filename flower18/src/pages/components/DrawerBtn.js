import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineRight } from "react-icons/ai";
// import { Link as RouterLink } from "react-router-dom";
import Link from "next/link";

const DrawerBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Text
        style={{ cursor: "pointer" }}
        ref={btnRef}
        p="0"
        color="#fff"
        fontSize="3xl"
        onClick={onOpen}
      >
        <GiHamburgerMenu />
      </Text>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="#65388b" color="#fff">
          <DrawerCloseButton />
          <DrawerHeader>
            <Link href="/" onClick={onClose}>
              1800 Flower
            </Link>
          </DrawerHeader>

          <DrawerBody>
            <Link href="/newvalentine/vallen">
              <Flex
                p="2"
                justifyContent="space-between"
                alignItems="center"
                fontSize="lg"
                onClick={onClose}
                style={{ cursor: "pointer" }}
              >
                <Text>New valentine</Text>
                <AiOutlineRight />
              </Flex>
            </Link>

            <Link href={"/flowers"}>
              <Flex
                p="2"
                justifyContent="space-between"
                alignItems="center"
                fontSize="lg"
                onClick={onClose}
                style={{ cursor: "pointer" }}
              >
                <Text>flowers</Text>
                <AiOutlineRight />
              </Flex>
            </Link>

            <Link href="/ocassion">
              <Flex
                p="2"
                justifyContent="space-between"
                alignItems="center"
                fontSize="lg"
                onClick={onClose}
                style={{ cursor: "pointer" }}
              >
                <Text>Ocassion</Text>
                <AiOutlineRight />
              </Flex>
            </Link>

            <Link href="/plants">
              <Flex
                p="2"
                justifyContent="space-between"
                alignItems="center"
                fontSize="lg"
                onClick={onClose}
                style={{ cursor: "pointer" }}
              >
                <Text>Plants</Text>
                <AiOutlineRight />
              </Flex>
            </Link>

            <Link href="/gifts">
              <Flex
                p="2"
                justifyContent="space-between"
                alignItems="center"
                fontSize="lg"
                onClick={onClose}
                style={{ cursor: "pointer" }}
              >
                <Text>Gifts</Text>
                <AiOutlineRight />
              </Flex>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerBtn;
