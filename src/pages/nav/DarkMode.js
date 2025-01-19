import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";

const DarkModeToggle = ({...props}) => {
  const { toggleColorMode } = useColorMode()
  return (
    <IconButton
      aria-label="Toggle theme"
      bg={useColorModeValue('lightgray', "lightdark1")}
      border="1px"
      borderColor={useColorModeValue("gray.200", "lightdark2")}
      color={"turquo"}
      icon={useColorModeValue(<i class="fa-solid fa-moon"></i>, <i class="fa-solid fa-sun"></i>)}
      onClick={toggleColorMode}
      _focus={{ boxShadow: "none"}}

    ></IconButton>
  )
}
export default DarkModeToggle;