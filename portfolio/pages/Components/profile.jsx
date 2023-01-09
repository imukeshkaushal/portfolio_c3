import {
  Avatar,
  Box,
  Button,
  Text,
  Center,
  Flex,
  Heading,
  Spacer,
  Stack,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Profile = ({ avatar, name, link, bio, login }) => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Flex>
        <Box>
          <Center py={6}>
            <Box
              maxW={"390px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"xl"}
              border="2px solid gray"
              rounded={"lg"}
              p={6}
              textAlign={"center"}
            >
              <Avatar
                size={"xl"}
                src={avatar}
                alt={"Avatar Alt"}
                mb={4}
                height="150px"
                width="150px"
                pos={"relative"}
                _after={{
                  content: '""',
                  w: 5,
                  h: 5,
                  bg: "green.300",
                  border: "2px solid white",
                  rounded: "full",
                  pos: "absolute",
                  bottom: 0,
                  right: 3,
                }}
              />
              <Heading fontSize={"2xl"} fontFamily={"body"} color = {"gray"}>
                {name}
              </Heading>
              <Text fontWeight={600} color={"gray.500"} mb={4}>
                {login}
              </Text>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
                {bio}{" "}
              </Text>

              <Stack mt={8} direction={"row"} spacing={4}>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  _focus={{
                    bg: "gray.200",
                  }}
                >
                  <Link style={{color : "gray"}} href="https://drive.google.com/file/d/1ZrqRrRlDK5BMtD2JMXIn2Kc6hocr7j-S/view?usp=share_link">
                    Resume
                  </Link>
                </Button>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  p={2}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  <Link href={link}>Follow</Link>
                </Button>
              </Stack>
            </Box>
          </Center>
        </Box>

        <Spacer />
      </Flex>
    </div>
  );
};

export default Profile;
