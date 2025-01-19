import { Box, Link } from '@chakra-ui/react';
const Logo = (props) => {
  return(
    <Box {...props}>
      <Link _hover={{color: "darkturquo",}} href="/" fontSize="xl" fontWeight="bold" color={"turquo"} _focus={{boxShadow: "none"}}>
        Elvira
      </Link>
    </Box>
  )
};

export default Logo;