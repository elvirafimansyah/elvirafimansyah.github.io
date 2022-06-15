import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";

const DarkModeToggle = ({...props}) => {
  const { toggleColorMode } = useColorMode()
  return (
    <IconButton
      aria-label="Toggle theme"
      colorScheme={"green"}
      icon={useColorModeValue(<i class="fa-solid fa-moon"></i>, <i class="fa-solid fa-sun"></i>)}
      onClick={toggleColorMode}
    ></IconButton>
  )
}
export default DarkModeToggle;