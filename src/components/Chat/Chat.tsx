import { memo, useEffect, useRef } from "react";

import Avatar from "../Avatar";
import Message from "../Message";
import { TMessage } from "../Message/Message";

type Props = {
  messages: TMessage[];
};
const Chat = ({ messages }: Props) => {
  const scrollableContentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (scrollableContentRef.current) {
      scrollableContentRef.current.scrollTo({
        top: scrollableContentRef.current.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <main
      ref={scrollableContentRef}
      className="custom-scrollbar flex flex-1 flex-col gap-4 overflow-y-scroll bg-[#121212] rounded-lg "
    >
      {messages.map((message) => (
        <Message key={message.id} sender={message.creator}>
          {message.creator === "AI" ? <Avatar.Bot /> : null}
          <Message.Balloon
            sender={message.creator}
            message={message.text}
            date={message.createdAt}
          />
          {message.creator === "USER" ? <Avatar.User /> : null}
        </Message>
      ))}
    </main>
  );
};

export default memo(Chat);
