import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  HStack,
  Image,
  Heading,
} from "@chakra-ui/react";
import { FiMail } from "react-icons/fi";
// import { HiAcademicCap } from "react-icons/hi2";
import { MdLocationOn } from "react-icons/md";
import logo from "../../assets/amsrt3.png";

const Logo = (props) => {
  return (
    <HStack spacing="2">
      <Image
        boxSize="36px"
        objectFit="cover"
        src={logo}
        alt="Dan Abramov"
      ></Image>
      <Heading size="md">iDeviceFix.in</Heading>
    </HStack>
  );
};
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"600"} fontSize={"lg"} mb={-1} textTransform="uppercase">
      {children}
    </Text>
  );
};

export default function LargeWithLogoCentered() {
  return (
    <Box mt="20" color="white" bgGradient="linear(to-b, #492C81 ,#7928CA)">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={23}>
          <Stack align={"flex-start"} spacing="3">
            <ListHeader>Services</ListHeader>
            <Container
              bg="brand"
              height="3px"
              width="16"
              borderRadius="50px"
            ></Container>
            <Stack direction={"row"} align={"center"} spacing={2}>
              <Link href={"#"}>MacBook Repair</Link>
              <Tag size={"sm"} bg="brand" ml={2} color={"white"}>
                New
              </Tag>
            </Stack>
            <Text>iPhone Repair</Text>
            <Text>Battery Replacement</Text>
            <Text>Mobile Screen Replacement</Text>
          </Stack>

          <Stack align={"flex-start"} spacing="3">
            <ListHeader>Quick Links</ListHeader>
            <Container
              bg="brand"
              height="3px"
              width="16"
              borderRadius="50px"
            ></Container>
            <Text href={"#"}>Privacy Policy</Text>
            <Text href={"#"}>Terms of Service</Text>
            <Text href={"#"}>Refund Policy</Text>
          </Stack>
          <Stack align={"flex-start"} spacing="3">
            <ListHeader>Contact Us</ListHeader>
            <Container
              bg="brand"
              height="3px"
              width="16"
              borderRadius="50px"
            ></Container>
            <HStack alignItems="start">
              <MdLocationOn height="40" size="30"></MdLocationOn>
              <Link href={"#"} style={{ textDecoration: "none" }}>
                Sri Ranga complex, Dommsandra circle
                <br /> Sarjapur Main road, Bangalore 572125.
              </Link>
            </HStack>
            <HStack alignItems="center">
              <PhoneIcon size="30"></PhoneIcon>
              <Link style={{ textDecoration: "none" }} href={"tel:9900000642"}>
                +91 9900000642
              </Link>
            </HStack>
            <HStack alignItems="center">
              <FiMail></FiMail>
              <Link style={{ textDecoration: "none" }} href={"#"}>
                repair@idevicefix.in
              </Link>
            </HStack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"} px={{ base: 4 }}>
          Copyright © iDeviceFix {new Date().getFullYear()}. All Rights
          Reserved.
        </Text>
      </Box>
    </Box>
  );
}
