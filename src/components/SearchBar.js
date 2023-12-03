import {
  Flex,
  Stack,
  Button,
  Input
} from "@chakra-ui/react";

const SearchBar = ({value, handleArticle, handleSearchKey}) => {
  return (
    <form formSubmit={handleArticle}>
      <Stack direction={"row"} spacing={3} pt="5">
        <Input variant='filled' focusBorderColor='green.400' type="text" placeholder="Search article..." name="article" required onChange={handleSearchKey} value={value}/>
        <Button type="submit" display={"flex"} alignItems={"center"} color={"white"} bg="green.400" _hover={{ bg: "green.500" }} _focus={{ boxShadow: "none" }} onClick={handleArticle}  rounded="lg">
            <i class="fa-solid fa-magnifying-glass"></i> 
            &nbsp; 
            Search 
        </Button>
      </Stack>
    </form>
  )
}
export default SearchBar;