import React, { useEffect, useState } from "react";
import {
  Link,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useMediaQuery,
  HStack,
  Image,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import KampusLogo from "../assets/KampusWhite.png";
import KampusLogoBlack from "../assets/KampusBlack.png";
interface NavBarProps {
  // Add any specific props needed for NavBar
}

const NavBar: React.FC<NavBarProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile] = useMediaQuery("(min-width: 1000px )");

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Flex
        pl="5vw"
        direction={{ base: "row", md: "row", lg: "row", xl: "row" }}
        align={{ base: "center", md: "center", lg: "", xl: "" }}
        justify="space-between"
        w="100%"
        height="100%"
        bg="rgba(255, 255, 255, 0.3)"
        zIndex={999}
      >
        {/* LOGO appears at the very top on mobile */}
        {isMobile ? (
          <Box
            pb="5vh" //pl={6}
          >
            <MenuLinks isOpen={isOpen} />
            {/* <Box position="relative" fontSize="xl" color="#ff7700">
              <Text>LOGO</Text>
            </Box>
            {/* <MenuItem to="/signup" isLast>
              <Button size="sm" rounded="md">
                Create Account
              </Button>
            </MenuItem> */}
          </Box>
        ) : (
          // {Whatever is here displays on mobile and tablets only }
          <Flex w="100%" justifyContent="space-between" flexDirection="row">
            {/* <Text
              position="fixed"
              zIndex="9999"
              fontSize="xl"
              color="#ff7700"
              mt="15px"
              mb={{ base: 2, md: 2 }}
            >
              {" "}
              {/*mobile view logo LOGOS
              KAMPUS !
            </Text> */}
            <Box
              w="100vw"
              h={{ base: "10vh", md: "10vh" }}
              pt="15px"
              pl="15px"
              ml="-5vw"
              bgColor="rgba(255,255,255,0.4)"
              position="fixed"
              zIndex="9999"
              fontSize="xl"
              color="#ff7700"
              //   mt="15px"
              //   mb={{ base: 2, md: 2 }}
            >
              <Image w="120px" src={KampusLogo} />
            </Box>
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
            {/* <MenuItem to="/signup" isLast>
              <Button size="sm" rounded="md">
                Create Account
              </Button>
            </MenuItem> */}
          </Flex>
        )}
      </Flex>
    </NavBarContainer>
  );
};
interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ toggle, isOpen }) => {
  useEffect(() => {
    // Update body overflow based on isOpen state
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    //allow scroll after menu closes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <Box
      zIndex="99999"
      display={{ base: "block", md: "block" }}
      onClick={toggle}
    >
      {isOpen ? (
        <Text
          mt="15px"
          fontSize="35px"
          left="85vw"
          position="fixed"
          color="#000"
        >
          <IoClose />
        </Text>
      ) : (
        <Text
          mt="15px"
          fontSize="35px"
          left="85vw"
          position="fixed"
          color="#000"
        >
          <RxHamburgerMenu />
        </Text>
      )}
    </Box>
  );
};

interface MenuItemProps {
  children: React.ReactNode;
  isLast?: boolean;
  to?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, isLast, to = "/" }) => {
  return (
    <Link href={to}>
      <Text display="block">{children}</Text>
    </Link>
  );
};

interface MenuLinksProps {
  isOpen: boolean;
}

const MenuLinks: React.FC<MenuLinksProps> = ({ isOpen }) => {
  return (
    <Box
      // transition="all 2s ease-in-out"
      display={{
        base: isOpen ? "block" : "none",
        md: isOpen ? "block" : "none",
        lg: "block",
        xl: "block",
      }}
      flexBasis={{ base: "100%", md: "100%", lg: "100%", xl: "100%" }}
      height={{ base: "100vh", md: "100vh", lg: "8vh", xl: "8vh" }}
      w="100%"

      //   transition="transform 2s ease-in-out"
      //   transform={{ base: isOpen ? "translateX(0)" : "translateX(100%)" }}
    >
      <Flex
        mt={{ base: "15vh", md: "20vh", lg: "5vh", xl: "5vh" }}
        align=""
        justify={["center", "center", "space-around", "space-between"]}
        direction={["column", "column", "column", "row"]}
        w="90vw"
        //issue seems to be here
      >
        <Flex
          align={{ base: "center", md: "center", lg: "", xl: "" }}
          pl=""
          gap={8}
          flexDirection={{ base: "column", md: "column", lg: "row", xl: "row" }}
        >
          {" "}
          <Box as="a">
            <Box
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                width: "100%",
                transform: "scaleX(0)",
                height: "5px",
                borderRadius: "8px",
                bottom: "-2",
                left: "0",
                backgroundColor: "#ff7700",
                transformOrigin: "bottom right",
                transition: "transform 0.35s ease-out",
              }}
              _hover={{
                "&:after": {
                  transform: "scaleX(1)",
                  transformOrigin: "bottom left",
                },
              }}
            >
              <Text
                as="a"
                fontSize="20px"
                fontWeight="bold"
                color="#131313"
                _active={{
                  color: "#ff7700",
                }}
              >
                {" "}
                Home
              </Text>{" "}
            </Box>
          </Box>
          <Box as="a">
            <Box
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                width: "100%",
                transform: "scaleX(0)",
                height: "5px",
                borderRadius: "8px",
                bottom: "-2",
                left: "0",
                backgroundColor: "#ff7700",
                transformOrigin: "bottom right",
                transition: "transform 0.35s ease-out",
              }}
              _hover={{
                "&:after": {
                  transform: "scaleX(1)",
                  transformOrigin: "bottom left",
                },
              }}
            >
              <Text
                as="a"
                fontSize="20px"
                fontWeight="bold"
                color="#131313"
                _active={{
                  color: "#ff7700",
                }}
              >
                {" "}
                Features
              </Text>{" "}
            </Box>
          </Box>
          <Box as="a">
            <Box
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                width: "100%",
                transform: "scaleX(0)",
                height: "5px",
                borderRadius: "8px",
                bottom: "-2",
                left: "0",
                backgroundColor: "#ff7700",
                transformOrigin: "bottom right",
                transition: "transform 0.35s ease-out",
              }}
              _hover={{
                "&:after": {
                  transform: "scaleX(1)",
                  transformOrigin: "bottom left",
                },
              }}
            >
              <HStack>
                <Text
                  as="a"
                  fontSize="20px"
                  fontWeight="bold"
                  color="#131313"
                  _active={{
                    color: "#ff7700",
                  }}
                >
                  {" "}
                  Community
                </Text>{" "}
                <FaChevronDown color="#131313" />
              </HStack>
            </Box>
          </Box>
        </Flex>

        {/* <Text
          fontSize="40px"
          color="#ff7700"
          display={{ base: "none", md: "none", lg: "block", xl: "block" }}
        >
          Kampus !
        </Text> */}
        <Image
          display={{ base: "none", md: "none", lg: "block", xl: "block" }}
          cursor="pointer"
          src={KampusLogoBlack}
        />
        <Flex
          flexDirection={{ base: "column", md: "column", lg: "row", xl: "row" }}
          mt={{ base: "20px", md: "20px", lg: "0", xl: "0" }}
          align={{ base: "center", md: "center", lg: "", xl: "" }}
          gap="20px"
        >
          <Button
            display={{ base: "block", md: "block", lg: "block", xl: "block" }}
            as="a"
            width="149px"
            height="64px"
            borderRadius="50px"
            background="whitesmoke"
            boxShadow="0 20px 30px -6px rgba(205, 205, 205, 0.5)"
            outline="none"
            cursor="pointer"
            border="none"
            fontSize="24px"
            color="#131313"
            transition="all 0.3s ease-in-out"
            fontFamily="'Mena Grotesk', sans-serif"
            _hover={{
              transform: "translateY(3px)",
              boxShadow: "none",
            }}
            _active={{
              opacity: 0.5,
            }}
          >
            <Text
              mt="1.5em"
              textAlign="center"
              justifyContent="center"
              fontSize="15px"
            >
              Login
            </Text>
          </Button>
          <Button
            display={{ base: "block", md: "block", lg: "block", xl: "block" }}
            as="a"
            width="225px"
            height="64px"
            borderRadius="50px"
            background="#ff7700"
            boxShadow="0 20px 30px -6px rgba(255, 119, 0, 0.5)"
            outline="none"
            cursor="pointer"
            border="none"
            fontSize="24px"
            color="white"
            transition="all 0.3s ease-in-out"
            fontFamily="'Mena Grotesk', sans-serif"
            _hover={{
              transform: "translateY(3px)",
              boxShadow: "none",
            }}
            _active={{
              opacity: 0.5,
            }}
          >
            <Text
              mt="1.5em"
              textAlign="center"
              justifyContent="center"
              fontSize="15px"
            >
              Sign Up
            </Text>
          </Button>
        </Flex>

        {/* <MenuItem to="/signup" isLast>
          <Button
            size="sm"
            rounded="md"
            // ...Button styling properties
          >
            Create Account
          </Button>
        </MenuItem> */}
      </Flex>
    </Box>
  );
};

interface NavBarContainerProps {
  children: React.ReactNode;
  // Add any specific props needed for NavBarContainer
}

const NavBarContainer: React.FC<NavBarContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <Flex
      overflowY="hidden"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={2}
      // Adjust the blur value
      // zIndex={999}
      // transformOrigin="bottom right"
      // transition="transform 5s ease-out"
      bg="rgba(255, 255, 255, 0.8)" // Adjust the alpha value for transparency
      // backdropFilter="blur(8px)" // Adjust the blur value
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={999}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
