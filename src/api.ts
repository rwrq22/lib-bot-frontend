import axios from "axios";
import Cookie from "js-cookie";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  withCredentials: true,
});

export interface ISendMessageVariables {
  text: string;
}

export const getMessages = () =>
  instance.get("messages").then((response) => response.data);

/* 현재 사용 안함 */
export const getChatResponses = () =>
  instance.get("responses").then((response) => response.data);

export const sendMessage = (variables: ISendMessageVariables) =>
  instance
    .post(`messages`, variables, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);

export const deleteMessages = () => instance.delete("messages");
