import {
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react"

import Dev from "./PDev"
import DesignProjects from "./PDesign";
import AllProjects from "./PAll";

const TabItem = ({ ...props }) => {
  return (
    <>
      <Stack {...props}>
        <Tabs variant='unstyled ' align='center'>
          <TabList >
            <Stack direction="row" pb="5" spacing={3} >
              <Tab
                _selected={{ color: 'white', bg: "green.400", }}
                bg={useColorModeValue('#F1F2F6', "whiteAlpha.200")}
                rounded="lg"
                _focus={{ boxShadow: "none"}}
                fontSize="14px"
              >
                All
              </Tab>
              <Tab
                _selected={{ color: 'white', bg: "green.400" }}
                bg={useColorModeValue('#F1F2F6', "whiteAlpha.200")}
                rounded="lg"
                _focus={{ boxShadow: "none", outline: "none" }}
                fontSize="14px"
              >
                Dev
              </Tab>
              <Tab
                _selected={{ color: 'white', bg: "green.400" }}
                rounded="lg"
                bg={useColorModeValue('#F1F2F6', "whiteAlpha.200")}
                _focus={{ boxShadow: "none", outline: "none" }}
                fontSize="14px"
              >
                Designs
              </Tab>
            </Stack>
          </TabList>
          <Divider />

          <TabPanels align="start">
            <TabPanel>
              <AllProjects />
            </TabPanel>
            <TabPanel>
              <Dev />
            </TabPanel>
            <TabPanel>
              <DesignProjects />
            </TabPanel>
          </TabPanels>

        </Tabs>
      </Stack>
    </>
  )
}

export default TabItem;