import React from "react";
import { Container, Box, Flex, Stack, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom"
import DarkModeToggle from "./DarkMode";
import Logo from './Logo'

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };
  const closeMenu = () => {
    setIsOpen(false)
  };

  return (
    <NavBarContainer {...props} >
      <Container maxW="container.lg" alignItems="center" zIndex={10}>
        <Flex
          justify="space-between"
          alignItems={["none", "center"]}
        >
          <Logo
            width="100px"
            display={isOpen ? "none" : "block"}
          />
          <MenuLinks isOpen={isOpen} onClick={() => closeMenu()} />
          <MenuToggle toggle={toggle} isOpen={isOpen} />
        </Flex>
      </Container>
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill={useColorModeValue("black", "white")}
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill={useColorModeValue("black", "white")}
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuLinks = ({ isOpen, ...props }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }} fontWeight='600'
    >
      <Stack
      spacing={4}
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[6, 6, 0, 0]}
      color={useColorModeValue('black', "white")}
      >
        <Box
          _hover={useColorModeValue({ bg: "#F1F2F6" }, { bg: "whiteAlpha.200" })}
          px={4}
          py={2}
          rounded="lg"
        >
          <Link to="/" {...props}> Home</Link>
        </Box>
        <Box
          _hover={useColorModeValue({ bg: "#F1F2F6" }, { bg: "whiteAlpha.200" })}
          px={4}
          py={2}
          rounded="lg"
        >
          <Link to="about" {...props}>About</Link>
        </Box>
        <Box
          _hover={useColorModeValue({ bg: "#F1F2F6" }, { bg: "whiteAlpha.200" })}
          px={4}
          py={2}
          rounded="lg"
        >
          <Link to="projects" {...props}>Projects</Link>
        </Box>
        <Box
          _hover={useColorModeValue({ bg: "#F1F2F6" }, { bg: "whiteAlpha.200" })}
          px={4}
          py={2}
          rounded="lg"
        >
          <Link to="blog" {...props}>Blog</Link>
        </Box>
        <Box
          _hover={useColorModeValue({ bg: "#F1F2F6" }, { bg: "whiteAlpha.200" })}
          px={4}
          py={2}
          rounded="lg"
        >
          <Link to="contact" {...props}>Contact</Link>
        </Box>
        <DarkModeToggle />
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      w="100%"
      mb={8}
      py={4}
      bg={useColorModeValue('white', 'gray.800')}
      color={"white"}
      borderBottom='1px' borderColor={useColorModeValue("#F1F2F6",'whiteAlpha.100')}
      pos="fixed"
      zIndex={10}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;