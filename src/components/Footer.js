import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image,
} from '@chakra-ui/react';

export default function Footer() {
  const SocialButton = ({ children, ...props }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'md'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={props.href}
        target="_blank"
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
          color: useColorModeValue("green.500", "green.300")
        }}>
        <VisuallyHidden>{props.label}</VisuallyHidden>
        {children}
      </chakra.button>
    )
  }
  return (
    <Box
      bg={useColorModeValue('bg_putih', 'gray.900')}
      color={useColorModeValue('gray.900', 'gray.200')}
      pos="absolute"
      bottom={["-18", "0", "0"]}
      left="0"
      width="full"
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
        borderBottom="1px"
        borderColor={useColorModeValue("blackAlpha.300", "whiteAlpha.300")}
      >
        <Stack direction={'row'} spacing={6} alignItems={"center"} >
          <a
            href="https://github.com/elvirafimansyah/elvirafimansyah.github.io"
            target="blank"

          >
            <chakra.span
              color={useColorModeValue("gray.800", "white")}
              _hover={{
                cursor: "pointer",
                textDecoration: "underline",
                textDecorationColor: "green.300",
                textDecorationThickness: "2px"
              }}
              textUnderlineOffset={3}>
              <i class="fa-brands fa-github"></i> &nbsp;Source Code
            </chakra.span>
          </a>
          <a
            href="https://www.buymeacoffee.com/elvira"
            target="blank"
          >
            <Image src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" rounded="md" />
          </a>
        </Stack>
      </Container>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© 2022 Elvira Firmansyah. All rights reserved</Text>
        <Stack direction={'row'} spacing={3}>
          <SocialButton label={'Github'} href={'https://github.com/elvirafimansyah'}>
            <i class="fa-brands fa-github"></i>
          </SocialButton>
          <SocialButton label={'Twitter'} href={'https://twitter.com/elvirafirmansy1'}>
            <i class="fa-brands fa-twitter"></i>
          </SocialButton>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/elvinaelvira.s'}>
            <i class="fa-brands fa-instagram"></i>
          </SocialButton>
          <SocialButton label={'Dribbble'} href={'https://dribbble.com/ElviraFir'}>
            <i class="fa-brands fa-dribbble"></i>
          </SocialButton>
        </Stack>
      </Container>
    </Box >
  );
}