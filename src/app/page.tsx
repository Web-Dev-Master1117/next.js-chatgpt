"use client";

import { useCompletion } from "ai/react";
import { Github, Trash } from "lucide-react";
import Link from "next/link";
import { FormEvent, useEffect } from "react";

import Chat from "@/components/Chat";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useMessages } from "@/lib/store";

const Home = () => {
  const { messages, setMessages, clearMessages } = useMessages();

  const {
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    completion,
    isLoading,
  } = useCompletion({
    api: `/api`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (!input) {
      e.preventDefault();
      return;
    }
    Promise.all([handleSubmit(e)]);

    setMessages("USER", input);
    setInput("");
  };

  useEffect(() => {
    if (!completion || !isLoading) return;
    setMessages("AI", completion);
  }, [setMessages, completion, isLoading]);

  return (
    <div className="z-10 flex h-screen flex-col gap-5 p-5">
      <header className="flex items-center justify-between border-b px-6 py-3">
        <h1 className="text-xl font-bold">Flamingo ChatBot</h1>
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/gungho0619/chatgpt-bot-4.0"
            passHref={true}
          >
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
          </Link>
        </div>
      </header>
      <Chat messages={messages} />
      <Separator />
      <Chat.Input
        onChange={handleInputChange}
        value={input}
        onSubmit={onSubmit}
        disabled={isLoading}
      />
      <div
        className="flex cursor-pointer items-center gap-2 text-xs text-red-500"
        onClick={clearMessages}
      >
        <Trash className="h-4 w-4" /> Clear Chat
      </div>
    </div>
  );
};

export default Home;
