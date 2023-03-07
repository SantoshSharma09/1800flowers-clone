// import { Text, Box, Center, Image, Wrap, Button } from "@chakra-ui/react";
// import Link from "next/link";
// import React, { useState } from "react";

// const SeachData = ({ img, price, name, cate }) => {
//   return (
//     <>
//       <Center py={12} backgroundColor={"rgb(245,245,245)"}>
//         <Wrap spacing={"80px"} width={"90%"} justify="center">
//           <Box
//             w={{ base: "75%", md: "85%", lg: "95%" }}
//             display={"grid"}
//             gridTemplateColumns={{
//               base: "repeat(1,1fr)",
//               md: "repeat(2,1fr)",
//               lg: "repeat(4,1fr)",
//             }}
//             gap={"15px"}
//             m={"auto"}
//           >
//             <Box>
//               <Box
//                 m="auto"
//                 w={{ base: "", md: "", lg: "95%" }}
//                 bg="white"
//                 padding="25px"
//                 _hover={{
//                   boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
//                 }}
//               >
//                 <Image src={img} w="100%" alt="img" />
//               </Box>

//               <Text
//                 textAlign={"center"}
//                 color="blue.900"
//                 fontSize={"14px"}
//                 cursor="pointer"
//               >
//                 {name}
//               </Text>

//               <br />
//               <Text textAlign={"center"} color="black" fontWeight={"600"}>
//                 ${price}
//               </Text>

//               <Text
//                 textAlign={"center"}
//                 color="grey"
//                 fontSize={"12px"}
//                 fontWeight={"100"}
//               >
//                 {cate}
//               </Text>
//             </Box>
//           </Box>
//         </Wrap>
//       </Center>

//     </>
//   );
// };

// export default SeachData;
