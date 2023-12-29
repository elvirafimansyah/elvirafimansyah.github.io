import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter';

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const darkTheme = extendTheme({ 
  config,
  fonts: {
    body: "Inter",
    heading: "Inter"
  },
  colors: {
    twhite: "#cbd5e1",
    turquo: "#14b8a6",
    darkturquo: "#0d9488",
    bg: "#121212",
    lightdark1: "#181818",
    lightdark2: "#222222",
    lightdark3: "#383838",
    language: {
      js: "#f0db4f",
      html: "#E54C21",
      css: "#2965f1",
      bootstrap: "#7711F6",
      react: "#61DAFB",
      github: "#1B1F23",
      git: "#E94E31"
    },
    lightgray: "#F1F2F6",
    lightgray2: "#d0d1d6"
  },
  styles: {
    global: ({ colorMode }) => ({
      body: {
        bg: colorMode === "light" ? "white" : "bg",
      },
    }),
  }
})



export default darkTheme;