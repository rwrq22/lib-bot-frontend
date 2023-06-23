import { Box, HStack, IconButton, Image, Text, VStack } from "@chakra-ui/react";
import { FaChevronLeft, FaExternalLinkAlt } from "react-icons/fa";
import InitMessage from "../components/InitMessage";
import InputMessage from "./InputMessage";

export default function Root() {
  return (
    <Box
      height="100vh"
      width="100%"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      {/* Header */}
      <Box width="40%" bgGradient="linear(gray.300, gray.100)">
        <HStack
          justifyContent={"space-between"}
          py={5}
          px={5}
          borderBottomWidth={1.5}
          borderBottomColor={"gray.300"}
        >
          <HStack>
            <IconButton
              marginRight="5"
              bg="gray.100"
              borderRadius={"100%"}
              aria-label="Go home"
              icon={<FaChevronLeft />}
              fontSize="30px"
            />
            <Image
              borderRadius="full"
              boxSize="75px"
              src="/img/hongik-icon.jpg"
            />
            <VStack>
              <Text fontSize="23px">홍익대학교 중앙도서관</Text>
            </VStack>
          </HStack>
          <HStack>
            <IconButton
              marginRight="3"
              fontSize="30px"
              aria-label="Library link"
              icon={<FaExternalLinkAlt />}
            />
            <InitMessage />
          </HStack>
        </HStack>
      </Box>

      {/* Chatting & Propmt section */}
      <InputMessage />
    </Box>
  );
}
