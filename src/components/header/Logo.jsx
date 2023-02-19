import React from "react";
import { Box, Text } from "@chakra-ui/react";
import logo from "../../assests/images/logo.jpg";
import "./Header.css";
export default function Logo(props) {
  return (
    <Box {...props}>
      <Text className="logo-text" fontSize="lg" fontWeight="bold">
        {/* <img src={logo} alt="" /> */}
        <span className="logo-f-letter">S</span>
        movin
        <span className="logo-l-letter">g</span>
      </Text>
    </Box>
  );
}
