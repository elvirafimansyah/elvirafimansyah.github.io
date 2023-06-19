import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";

const DarkModeToggle = ({...props}) => {
  const { toggleColorMode } = useColorMode()
  return (
    <IconButton
      aria-label="Toggle theme"
      bg={useColorModeValue('#F1F2F6', "whiteAlpha.200")}
      color={useColorModeValue('green.300', 'green.400')}
      icon={useColorModeValue(<i class="fa-solid fa-moon"></i>, <i class="fa-solid fa-sun"></i>)}
      onClick={toggleColorMode}
      _focus={{ boxShadow: "none"}}

    ></IconButton>
  )
}
export default DarkModeToggle;