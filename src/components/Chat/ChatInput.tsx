import { Send, X } from "lucide-react";
import { ChangeEvent, useRef } from "react";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

type Props = {
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  value: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  disabled?: boolean;
};

const ChatInput = ({ onChange, value, onSubmit, disabled }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <div className="flex flex-row items-center gap-10">
        <div className="flex flex-1 items-center gap-3">
          <Textarea
            className="flex max-h-[14rem] min-h-[2.5rem] flex-1"
            placeholder="Type your message"
            value={value}
            autoFocus
            rows={value.split(`\n`)?.length || 1}
            onChange={onChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();

                if (e.shiftKey)
                  onChange({ target: { value: `${value}\n` } } as any);
                else formRef.current?.requestSubmit();

                return;
              }
            }}
          />
        </div>
        <Button
          className={cn(
            "bg-[#2b5278] text-white gap-2",
            disabled && "bg-neutral-300"
          )}
          type="submit"
          disabled={disabled}
        >
          Send <Send className="h-3 w-3" />
        </Button>
      </div>
    </form>
  );
};

export default ChatInput;
