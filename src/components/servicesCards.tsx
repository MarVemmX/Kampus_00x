import {
  Card,
  SimpleGrid,
  Image,
  CardBody,
  Heading,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import bag from "../assets/bag.png";
import calculator from "../assets/CalculatorHand.png";
import hands from "../assets/hands.png";
import money from "../assets/money.png";
import store from "../assets/store.png";

const ServicesCards = () => {
  return (
    <SimpleGrid
      overflowX="auto"
      scrollSnapType="x"
      overflowY="hidden"
      w={{ base: "320px", md: "730px", lg: "95vw", xl: "95vw" }}
      columns={{ base: 5, md: 5, lg: 5, xl: 5 }}
      spacing={{ base: "250px", md: "250px", lg: "15vw", xl: "2vw" }}
      padding={2}
      //   pr="30vw"
      marginTop={3}
      flexWrap="nowrap"
    >
      <Card
        as="a"
        href="/"
        boxShadow="md"
        transition="all 0.3s ease-in-out"
        _hover={{ transform: "scale(1.05)" }}
        border="1px solid "
        borderRadius="32px"
        w="220px"
        h="200px"
      >
        <Image w="100px" src={store} />
        <Stack pl="10%" textAlign="start" align="center" w="90%">
          <Text fontWeight="bold" fontSize="20px">
            Buy/Sell Products
          </Text>
          <Text fontWeight="normal" fontSize="14px">
            Put your stuffs up for sake or buy what you need
          </Text>
        </Stack>
      </Card>
      <Card
        as="a"
        href="/"
        boxShadow="md"
        transition="all 0.3s ease-in-out"
        _hover={{ transform: "scale(1.05)" }}
        border="1px solid "
        borderRadius="32px"
        w="220px"
        h="200px"
      >
        <Stack>
          <Image pl="10px" w="100px" src={bag} />
          <Stack pl="10%" textAlign="start" align="center" w="90%">
            <Text fontWeight="bold" fontSize="20px">
              Jobs / Internships
            </Text>
            <Text fontWeight="normal" fontSize="14px">
              Elevate your financial status on our hub
            </Text>
          </Stack>
        </Stack>
      </Card>
      <Card
        as="a"
        href="/"
        boxShadow="md"
        transition="all 0.3s ease-in-out"
        _hover={{ transform: "scale(1.05)" }}
        border="1px solid "
        borderRadius="32px"
        w="220px"
        h="200px"
      >
        <Stack>
          <Image pl="10px" w="100px" src={money} />
          <Stack pl="5%" textAlign="start" align="center" w="90%">
            <Text fontWeight="bold" fontSize="20px">
              Task / Earn Section
            </Text>
            <Text pl="5%" fontWeight="normal" fontSize="14px">
              Stay active to earn rewards and cash prizes
            </Text>
          </Stack>
        </Stack>
      </Card>
      <Card
        as="a"
        href="/"
        boxShadow="md"
        transition="all 0.3s ease-in-out"
        _hover={{ transform: "scale(1.05)" }}
        border="1px solid "
        borderRadius="32px"
        w="220px"
        h="200px"
      >
        <Stack>
          <Image pl="10px" w="100px" src={hands} />
          <Stack pl="5%" textAlign="start" align="center" w="90%">
            <Text fontWeight="bold" fontSize="20px">
              Community / Blog
            </Text>
            <Text pl="5%" fontWeight="normal" fontSize="14px">
              Join our vibrant comm and engaging blog
            </Text>
          </Stack>
        </Stack>
      </Card>
      <Card
        as="a"
        href="/"
        boxShadow="md"
        transition="all 0.3s ease-in-out"
        _hover={{ transform: "scale(1.05)" }}
        border="1px solid "
        borderRadius="32px"
        w="220px"
        h="200px"
      >
        <Stack>
          <Image pl="10px" w="100px" src={calculator} />
          <Stack pl="5%" textAlign="start" align="center" w="90%">
            <Text fontWeight="bold" fontSize="20px">
              GP Calculator
            </Text>
            <Text pl="5%" fontWeight="normal" fontSize="14px">
              Calculate your academic success on Kampus!
            </Text>
          </Stack>
        </Stack>
      </Card>
    </SimpleGrid>
  );
};

export default ServicesCards;
