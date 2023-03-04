import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </SessionProvider>
  );
}
