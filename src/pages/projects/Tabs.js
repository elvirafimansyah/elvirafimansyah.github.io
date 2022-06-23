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
                _selected={{ color: 'white', bg: "green.400" }}
                bg={useColorModeValue('gray.100', "whiteAlpha.200")}
                rounded="md"
                _hover={{ border: "1px", borderColor: "green.400" }}
                border="1px"
                borderColor={useColorModeValue('gray.300', "whiteAlpha.200")}
              >
                All
              </Tab>
              <Tab
                _selected={{ color: 'white', bg: "green.400" }}
                bg={useColorModeValue('gray.100', "whiteAlpha.200")}
                rounded="md"
                _hover={{ border: "1px", borderColor: "green.400" }}
                border="1px"
                borderColor={useColorModeValue('gray.300', "whiteAlpha.200")}
              >
                Dev
              </Tab>
              <Tab
                _selected={{ color: 'white', bg: "green.400" }}
                rounded="md"
                bg={useColorModeValue('gray.100', "whiteAlpha.200")}
                _hover={{ border: "1px", borderColor: "green.400" }}
                border="1px"
                borderColor={useColorModeValue('gray.300', "whiteAlpha.200")}
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