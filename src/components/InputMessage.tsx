import { Box, HStack, IconButton, Text, VStack, Input } from "@chakra-ui/react";
import { FaRegPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { ISendMessageVariables, sendMessage } from "../api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Message from "../components/Message";
import { useState, useEffect, useRef } from "react";
import ChatResponse from "./ChatResponse";

interface IMessage {
  pk: number;
  text: string;
  response: string;
}

export default function InputMessage() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<ISendMessageVariables>();
  const mutation = useMutation(sendMessage, {
    onSuccess: () => {
      navigate(`/`);
    },
  });

  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [message, setMessage] = useState<string>("");
  let scrollRef = useRef<HTMLDivElement>(null);

  /**** http version ****/
  const fetchMessages = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/v1/messages");
    const json = await response.json();
    setMessages(json);
    setIsLoading(false);
  };

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    fetchMessages();
    scrollToBottom();
  }, [message]);

  const onSubmit = async (data: ISendMessageVariables) => {
    await mutation.mutateAsync(data);
    setMessage(data.text);
    setIsLoading(false);
    reset();
  };

  return (
    <VStack
      ref={scrollRef}
      paddingTop="13px"
      overflow="auto"
      className="chat"
      width="40%"
      bgGradient="linear(gray.50, whiteAlpha.50)"
      height="78%"
      position="relative"
    >
      <ChatResponse text={"홍익대 도서관 챗봇입니다."} />
      {messages.map((message) => (
        <Box width="100%">
          <Message text={message.text} />
          <ChatResponse text={message.response} />
        </Box>
      ))}
      <HStack
        bg="gray.300"
        height="10%"
        width="41%"
        padding="0px 10px"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        position="fixed"
        bottom="0px"
      >
        <Input
          autoFocus
          required
          type="text"
          width="90%"
          boxShadow="md"
          p="6"
          rounded="md"
          bg="white"
          placeholder="Send a message."
          size="lg"
          variant={"outline"}
          {...register("text")}
        />
        {mutation.isError ? <Text>Something went wrong.</Text> : null}
        <IconButton
          isLoading={mutation.isLoading}
          type="submit"
          width="50px"
          height="50px"
          aria-label="Send a message"
          icon={<FaRegPaperPlane />}
        />
      </HStack>
    </VStack>
  );
}
