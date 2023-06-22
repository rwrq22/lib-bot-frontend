import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

interface IResponseProps {
  text: string;
}

export default function ChatResponse({ text }: IResponseProps) {
  return (
    <HStack width={"100%"} padding="10px" paddingLeft="10px">
      <Image borderRadius="full" boxSize="50px" src="/img/hongik-icon.jpg" />
      <VStack align={"left"}>
        <Text paddingLeft={"5px"} fontSize="16px">
          홍익대 도서관
        </Text>
        <Box marginTop="0 !important" width="fit-content" paddingRight="100px">
          <Text bg="white" boxShadow="md" p="3" rounded="md">
            {text}
          </Text>
        </Box>
      </VStack>
    </HStack>
  );
}
