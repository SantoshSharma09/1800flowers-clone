import React from "react";
import "./styles/AdminNavSideBar.css";
import Dashboard from "./Dashboard";
import Inventory from "./Inventory";
import Customers from "./customers";
import AddProduct from "./AddProduct";
import { useNavigate} from "react-router-dom"
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
  useColorMode,
  Image,
  Center,
} from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FiMenu } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { MdInventory, MdAddBox } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const LinkItems = [
  { name: "DashBoard", icon: RxDashboard},
  { name: "Inventory", icon: MdInventory},
  { name: "Customers", icon: FaUserFriends},
  { name: "Add Products", icon: MdAddBox},
];

export default function AdminNavSideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pageopen,setPageOpen]=React.useState(LinkItems[0].name);
  // console.log(pageopen)

 

  return (
    <Box
      minH="100vh"
      maxW={"100%"}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
     
      <SidebarContent
        top={0}
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}

        pageopen={pageopen}
        setPageOpen={setPageOpen}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
      {pageopen === "Dashboard" ? (
          <Dashboard />
        ) :pageopen === "Inventory" ? (
          <Inventory />
        ) :pageopen === "Add Products" ? (
          <AddProduct />
        ) :pageopen === "Customers" ? (
          <Customers />
        ) : (
          <Dashboard />
        )}
      </Box> 
    </Box>
  );
}

const SidebarContent = ({onClose, setPageOpen, pageOpen, ...rest}) => {

  
const navigate = useNavigate()
  function redirect(){
    navigate('/')
  }

  return (
    <Box
   
      top={0}
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      //   border={"1px solid red"}
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="40px" mt={10} marginBottom={20} alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <Image src="https://i.postimg.cc/pLqmtY0m/Blossom-removebg-preview.png" border={"0px solid red"} w={"80%"}  
            onClick={()=>redirect()}
          />
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        // <NavItem key={link.name} icon={link.icon}>
        //   {link.name}
        // </NavItem>
        <NavItem
          key={link.name}
          icon={link.icon}
          onClick={() => {
            setPageOpen(link.name);
          }}
        >
          {link.name}
        </NavItem>
      ))}
      
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        mt={"20px"}
         border={"1px solid white"}
        borderRadius="lg"
        role="group"
        cursor="pointer"
        backgroundColor="#9565aa"
        _groupHover={{
          color: "white",
          border: "0px solid red",
       
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "black",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
      
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {

  let datas =JSON.parse(localStorage.getItem("admindata"))
  console.log("datas",datas);

  const navigate = useNavigate()
  function tosignin(){
    navigate('/adminsignin')
  }

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      // border={"1px solid red"}
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <Text className="adminPanelText" >ADMIN PANEL</Text> 
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      ></Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
        <Flex alignItems={"center"}>

         
          
              <>
               <Menu>
            <MenuButton  py={2}>
              
             
                  <HStack>
                    <Avatar size={"sm"}>
                      <Image   src={datas.image} />
                    </Avatar>
                    <VStack
                      display={{ base: "none", md: "flex" }}
                      alignItems="flex-start"
                      spacing="1px"
                      ml="2"
                    >
                      <Text fontSize="sm">{datas.name}</Text>
                      <Text fontSize="xs" color="gray.600">
                        Admin
                      </Text>
                    </VStack>
                    <Box display={{ base: "none", md: "flex" }}>
                      <FiChevronDown />
                    </Box>
                  </HStack>
                
            </MenuButton>
            <MenuList alignItems={"center"}>
              <br />
              <Center>
                <Avatar
                  size={"2xl"}
                 src={datas.image}
                />
              </Center>
              <br />
              <Center>
                <p>{datas.name}</p>
                 
              </Center>
              <br />
              <MenuDivider />
              <MenuItem> email: {datas.email}</MenuItem>
              <MenuItem> Ph.No: {datas.phoneNumber}</MenuItem>
              <MenuItem> Gender: {datas.gender}</MenuItem>
              
              <MenuItem backgroundColor={"#fe0039"} color={"white"}
               onClick={()=>tosignin()}
              >

                Logout
              </MenuItem>
            </MenuList>
          </Menu>
              </>
          
         
        </Flex>
      </HStack>
    </Flex>
  );
};
