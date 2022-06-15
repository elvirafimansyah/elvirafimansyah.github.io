import { Box, Link, useColorModeValue } from '@chakra-ui/react';
const Logo = (props) => {
  return(
    <Box {...props}>
      <Link _hover={{color: "green.300",}} href="/" fontSize="xl" fontWeight="bold" color={useColorModeValue("green.400", "green.300")}>
        Elvira
      </Link>
    </Box>
  )
};

export default Logo;