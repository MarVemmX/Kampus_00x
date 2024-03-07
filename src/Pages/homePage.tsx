import {
  Box,
  Text,
  Stack,
  HStack,
  Flex,
  Button,
  Image,
  Heading,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import firstImage from "../assets/firstImage.png";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import ServicesCards from "../components/servicesCards";
import sideman from "../assets/sideMan.png";
import imgPeople from "../assets/image 7.png";
import imgCalcultor from "../assets/image 8.png";
import KampusWhiteLogo from "../assets/KampusWhite.png";
import KampusBlackLogo from "../assets/KampusBlack.png";
const HomePage = () => {
  document.body.style.overflowX = "hidden";
  return (
    <Box fontFamily="MGThin">
      <NavBar />
      <Box
        position="relative"
        color="#fff"
        background={`linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${firstImage}) no-repeat`}
        backgroundSize="cover"
        mt={{ base: "", md: "", lg: "18vh", xl: "18vh" }}
        height={{ base: "100vh", md: "60vh", lg: "85vh", xl: "80vh" }}
        width="100vw"
      >
        <Flex
          pl="10%"
          w="90%"
          gap="3vh"
          flexDirection="column"
          align="center"
          pt={{ base: "20vh", md: "15vh", lg: "17vh", xl: "17vh" }}
        >
          <Text
            letterSpacing={{ base: "4px", md: "10px", lg: "10px", xl: "10px" }}
            fontSize={{ base: "12px", md: "20px", lg: "30px", xl: "30px" }}
            fontWeight="thin"
          >
            WELCOME TO KAMPUS
          </Text>
          <HStack
            fontSize={{ base: "14px", md: "35px", lg: "45px", xl: "60px" }}
            fontFamily="MGBold"
            gap="12px"
          >
            <Text>EMPOWER </Text>
            <Text color="#ff7700">. CONNECT .</Text>
            <Text>THRIVE</Text>
          </HStack>
          <Stack
            color="fff"
            fontSize={{ base: "16px", md: "25px", lg: "30px", xl: "30px" }}
            fontWeight=""
            lineHeight={{ base: "20px", md: "30px", lg: "30px", xl: "30px" }}
            width="85vw"
            textAlign="center"
          >
            <Text> What do you need on Kampus?</Text>
            <Text> Unlock impossibilities with a variety students' hub</Text>
          </Stack>
          <Flex
            align="center"
            flexDir={{
              base: "column-reverse",
              md: "row",
              lg: "row",
              xl: "row",
            }}
            gap="2vw"
          >
            <Button
              display={{ base: "block", md: "block", lg: "block", xl: "block" }}
              as="a"
              width={{ base: "225px", md: "225px", lg: "225px", xl: "225px" }}
              height="64px"
              borderRadius="50px"
              background="#ff7700"
              outline="none"
              cursor="pointer"
              border="none"
              opacity="0.85"
              fontSize="24px"
              color="white"
              transition="all 0.3s ease-in-out"
              fontFamily="'Mena Grotesk', sans-serif"
              _hover={{
                opacity: "1",
                boxShadow: "none",
              }}
              _active={{
                opacity: 1,
                transform: "scale(0.95)",
              }}
            >
              <Text
                mt="1em"
                textAlign="center"
                justifyContent="center"
                fontSize="20px"
                fontFamily="MGRegular"
              >
                See Activities
              </Text>
            </Button>
            <Button
              opacity="0.85"
              color="#131313"
              cursor="pointer"
              w="200px"
              h="64px"
              fontWeight="700"
              transition="all 0.3s ease-in-out"
              fontFamily="'Mena Grotesk', sans-serif"
              borderRadius="100px"
              background="#Fff"
              border="none"
              display="flex"
              alignItems="center"
              fontSize="15px"
              _hover={{
                transition: "all 0.3s ease-in-out",
                opacity: "1",
                "& > div": {
                  marginLeft: "15px",
                },
              }}
              _active={{ transform: "scale(0.95)" }}
            >
              <Text fontFamily="MGRegular" fontSize="20px">
                Continue
              </Text>
              <Box marginLeft="5px" transition="margin-left 0.4s ease-in-out">
                <IoArrowForwardCircleOutline
                  style={{
                    fontSize: "35px",
                  }}
                />
              </Box>
            </Button>
          </Flex>
        </Flex>
      </Box>
      {/*  features section */}
      <Flex
        id="features"
        flexDirection="column"
        p="2vw"
        align="center"
        justifyContent="center"
      >
        <Text
          fontWeight="extrabold"
          color=""
          fontSize="30px"
          textAlign="center"
        >
          {" "}
          EXPLORE OUR FEATURES
        </Text>
        <ServicesCards />
      </Flex>
      {/* Elevate financial status section */}
      <Box pt={{ base: "4vh", md: "4vh", lg: "0", xl: "0" }}>
        <Box
          w={{ base: "100vw", md: "90vw", lg: "100vw", xl: "100vw" }}
          h="100vh"
        >
          <Box
            borderTopRightRadius={{
              base: "0",
              md: "0",
              lg: "32px",
              xl: "32px",
            }}
            borderBottomRightRadius={{
              base: "0",
              md: "0",
              lg: "32px",
              xl: "32px",
            }}
            w={{ base: "100vw", md: "100vw", lg: "85%", xl: "85%" }}
            h={{ base: "80%", md: "70%", lg: "70%", xl: "70%" }}
            bgColor="rgba(255, 119, 0, 0.12)"
          >
            <HStack>
              <Box
                p={{ base: "10px", md: "10vw", lg: "7%", xl: "7%" }}
                w={{ base: "100%", md: "100%", lg: "60%", xl: "60%" }}
              >
                <Box alignItems="center">
                  <Flex
                    gap={2}
                    textAlign="center"
                    pt={{ base: "15vh", md: "10vh", lg: "0", xl: "10" }}
                    pb={10}
                    w={{ base: "100%", md: "80%", lg: "120%", xl: "150%" }}
                    fontSize={{
                      base: "14px",
                      md: "18px",
                      lg: "25px",
                      xl: "25px",
                    }}
                    fontWeight="extrabold"
                  >
                    <Text> Elevate your financial Status with</Text>{" "}
                    <Text color="#ff7700">Kampus!</Text>
                  </Flex>
                  <Stack fontSize="16px">
                    <Text>
                      In three ways: <br />
                    </Text>
                    <HStack>
                      <Text>1. </Text>
                      <Text>
                        {" "}
                        Discover Job opportunities tailored to your unique
                        skill/talent
                      </Text>
                    </HStack>{" "}
                    <HStack>
                      <Text>2. </Text>
                      <Text>
                        {" "}
                        Deposit investments and get a fixed percentage interest
                        after a specified period.
                      </Text>
                    </HStack>{" "}
                    <HStack>
                      <Text>3 </Text>
                      <Text>
                        {" "}
                        Complete our daily tasks to earn rewards and cash prizes{" "}
                      </Text>
                    </HStack>
                    {/* Buttons */}
                    <HStack pt="8%" spacing={6}>
                      <Button
                        display="block"
                        as="a"
                        width="160px"
                        height="40px"
                        borderRadius="50px"
                        background="#ff7700"
                        boxShadow="0 20px 30px -6px rgba(0, 0, 0, 0.3)"
                        outline="none"
                        cursor="pointer"
                        border="none"
                        fontSize="24px"
                        color="#fff"
                        transition="all 0.3s ease-in-out"
                        fontFamily="'Mena Grotesk', sans-serif"
                        _hover={{
                          transform: "translateY(2px)",
                          boxShadow: "none",
                        }}
                        _active={{
                          opacity: 0.5,
                        }}
                      >
                        <Text
                          mt="10px"
                          textAlign="center"
                          justifyContent="center"
                          fontSize="15px"
                        >
                          See Jobs/Tasks
                        </Text>
                      </Button>
                      <Button
                        display="block"
                        as="a"
                        width="160px"
                        height="40px"
                        borderRadius="50px"
                        background="whitesmoke"
                        boxShadow="0 20px 30px -6px rgba(0, 0, 0, 0.3)"
                        outline="none"
                        cursor="pointer"
                        border="none"
                        fontSize="24px"
                        color="#131313"
                        transition="all 0.3s ease-in-out"
                        fontFamily="'Mena Grotesk', sans-serif"
                        _hover={{
                          transform: "translateY(2px)",
                          boxShadow: "none",
                        }}
                        _active={{
                          opacity: 0.5,
                        }}
                      >
                        <Text
                          mt="10px"
                          textAlign="center"
                          justifyContent="center"
                          fontSize="15px"
                        >
                          Invest Now
                        </Text>
                      </Button>
                    </HStack>
                  </Stack>
                </Box>
              </Box>
              <Box
                w={{ lg: "400px", xl: "410px" }}
                display={{ base: "none", md: "none", lg: "block", xl: "block" }}
                position="absolute"
                ml={{ lg: "60vw", xl: "66vw" }}
                // mt={{ lg: "vh", xl: "vh" }}
              >
                <Image src={sideman} />
              </Box>
            </HStack>
          </Box>
        </Box>
      </Box>

      <Flex justify="center" align="center" h="100px">
        Products component here with Simple Grid from Chakra UI
      </Flex>
      {/* Connect.Inspire.Stay Informed */}
      <Box
        w="100vw"
        h={{ base: "55vh", md: "50vh", lg: "50vh", xl: "50vh" }}
        pb="5vh"
      >
        <Flex
          justifyContent="space-between"
          w="100%"
          h="100%"
          background="#131313"
        >
          <Box
            pt={{ base: "5%", md: "15%", lg: "2%", xl: "5%" }}
            pl={{ base: "5%", md: "15%", lg: "10%", xl: "10%" }}
          >
            <Stack color="#fff">
              <Text
                w={{ base: "80%", md: "80%", lg: "90%", xl: "80%" }}
                fontSize={{ base: "20px", md: "25px", lg: "32px", xl: "32px" }}
                fontWeight="extrabold"
              >
                Connect . Inspire. Stay Informed
              </Text>
              <Text
                w="65%"
                fontSize={{ base: "15px", md: "18px", lg: "20px", xl: "20px" }}
                lineHeight="32px"
              >
                Chat with fellow students on trending topics, connect and
                explore in our Kampus community blog.
              </Text>
            </Stack>
            <Flex
              w="100%"
              flexDir={{ base: "column", md: "row", lg: "row", xl: "row" }}
              pl=""
              pr=""
              pt="3vh"
              gap={{ base: "2", md: "6", lg: "6", xl: "6" }}
            >
              <Button
                display="block"
                as="a"
                width="160px"
                height="40px"
                borderRadius="50px"
                background="#ff7700"
                boxShadow="0 20px 30px -6px rgba(255, 255, 255, 0.1)"
                outline="none"
                cursor="pointer"
                border="none"
                fontSize="24px"
                color="#fff"
                transition="all 0.3s ease-in-out"
                fontFamily="'Mena Grotesk', sans-serif"
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "none",
                }}
                _active={{
                  opacity: 0.5,
                }}
              >
                <Text
                  mt="10px"
                  textAlign="center"
                  justifyContent="center"
                  fontSize="15px"
                >
                  View Blog posts
                </Text>
              </Button>
              <Button
                display="block"
                as="a"
                width="160px"
                height="40px"
                borderRadius="50px"
                background="whitesmoke"
                boxShadow="0 20px 30px -6px rgba(255, 255, 255, 0.1)"
                outline="none"
                cursor="pointer"
                border="none"
                fontSize="24px"
                color="#131313"
                transition="all 0.3s ease-in-out"
                fontFamily="'Mena Grotesk', sans-serif"
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "none",
                }}
                _active={{
                  opacity: 0.5,
                }}
              >
                <Text
                  mt="10px"
                  textAlign="center"
                  justifyContent="center"
                  fontSize="15px"
                >
                  Chat Now
                </Text>
              </Button>
            </Flex>
          </Box>
          <Image
            display={{ base: "none", md: "none", lg: "block", xl: "block" }}
            src={imgPeople}
          />
        </Flex>
      </Box>
      <Box
        w="100vw"
        h={{ base: "100vh", md: "55vh", lg: "75vh", xl: "75vh" }}
        pl="7vw"
        pr="7vw"
        mt="7vh"
      >
        <Flex
          flexDir="column-reverse"
          borderRadius="32px"
          background="rgba(255, 119, 0, 0.12)"
          w="100%"
          h="90%"
          //   p="%"
        >
          <Flex align="center" gap="2.5vh" flexDir="column" pl="15%" pr="15%">
            <Image
              src={KampusBlackLogo}
              w="100px"
              display={{ base: "block", md: "block", lg: "none", xl: "none" }}
            />
            <Text
              fontWeight="extrabold"
              textAlign="center"
              fontSize={{ base: "25px", md: "25px", lg: "32px", xl: "32px" }}
            >
              CGPA Calculator for students
            </Text>
            <Text
              textAlign="center"
              fontSize={{ base: "18px", md: "15px", lg: "20px", xl: "20px" }}
            >
              Visit the GP calculator page, input requested information's and
              our AI GP Calculator would immediately display your current GP
            </Text>
            <Button
              display="block"
              as="a"
              width="160px"
              height="40px"
              borderRadius="50px"
              background="#ff7700"
              boxShadow="0 20px 30px -6px rgba(255, 255, 255, 0.1)"
              outline="none"
              cursor="pointer"
              border="none"
              fontSize="24px"
              color="#fff"
              transition="all 0.3s ease-in-out"
              fontFamily="'Mena Grotesk', sans-serif"
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "none",
              }}
              _active={{
                opacity: 0.5,
              }}
            >
              <Text
                mt="10px"
                textAlign="center"
                justifyContent="center"
                fontSize="15px"
              >
                Calculate GP
              </Text>
            </Button>
            <Image pl="10%" pt="" pr="10%" src={imgCalcultor} />
          </Flex>
        </Flex>
      </Box>
      {/* LAST SECTION */}
      <Box
        p={{ base: "5%", md: "10", lg: "20", xl: "24" }}
        w="100vw"
        h="50vh"
        bgColor="#131313"
      >
        <Flex gap="2vh" flexDir={"column"}>
          <Image
            pt={{ base: "5vh", md: "5vh", lg: "0", xl: "0" }}
            w={{ base: "50%", md: "50%", lg: "15%", xl: "15%" }}
            src={KampusWhiteLogo}
          />
          <Text
            fontSize={{ base: "13px", md: "16px", lg: "20px", xl: "20px" }}
            color="#fff"
            w={{ base: "95%", md: "95%", lg: "50%", xl: "50%" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rerum
            tenetur libero, accusamus, commodi laborum odit pariatur saepe
            recusandae accusantium molestias reprehenderit minima illo eveniet?
          </Text>
          <HStack fontSize="xl" color="#ff7700">
            <Text>SOCIAL MEDIA</Text>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default HomePage;
