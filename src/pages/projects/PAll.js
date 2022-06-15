import Dev from "./PDev"
import DesignProjects from "./PDesign"

import { Box } from "@chakra-ui/react"

export default function AllProjects(){
  return (
    <Box>
      <Dev />
      <hr />
      <DesignProjects />
    </Box>
  )
}