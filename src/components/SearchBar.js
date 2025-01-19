import {
  Flex,
  InputGroup,
  InputLeftElement,
  Stack,
  Button,
  Input,
  useColorModeValue,
  Box
} from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";
const SearchBar = ({value, handleArticle, handleSearchKey}) => {
  return (
    <form formSubmit={handleArticle}>
      <Stack direction={"row"} spacing={3} pt="5">
        <InputGroup  alignSelf="end">
          <InputLeftElement
            pointerEvents="none"
            children={<Box as={IoSearch}  />}
          />
          <Input variant='filled' border="1px" borderColor={useColorModeValue("gray.200", "lightdark2")} bg={useColorModeValue("lightgray", "lightdark1")} focusBorderColor='turquo' type="text" placeholder="Search article..." name="article" required onChange={handleSearchKey} value={value} />
        </InputGroup>
        <Button type="submit" display={"flex"} alignItems={"center"} color={"white"} bg="turquo" _hover={{ bg: "darkturquo" }}  _focus={{ boxShadow: "none" }} onClick={handleArticle}  rounded="lg">
            <i class="fa-solid fa-magnifying-glass"></i> 
            &nbsp; 
            Search 
        </Button>
      </Stack>
    </form>
  )
}
export default SearchBar;