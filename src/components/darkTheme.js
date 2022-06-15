import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const darkTheme = extendTheme({ 
  config,
  colors: {
    twhite: "#cbd5e1",
    language: {
      js: "#f0db4f",
      html: "#E54C21",
      css: "#2965f1",
      bootstrap: "#7711F6",
      react: "#61DAFB",
      github: "#1B1F23",
      git: "#E94E31"
    },
    bg_putih: "#F8FAFC"
  }
})



export default darkTheme;