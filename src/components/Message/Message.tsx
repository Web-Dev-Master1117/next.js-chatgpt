import { cn } from "@/lib/utils";

export type TMessage = {
  id: string;
  text: string;
  createdAt: Date;
  creator: "USER" | "AI";
};

type MessageProps = {
  sender: "USER" | "AI";
  children: React.ReactNode;
};

const Message = ({ sender, children }: MessageProps) => {
  return (
    <div
      className={cn(
        "flex flex-row items-start gap-3 ",
        sender === "USER" && "justify-end"
      )}
    >
      {children}
    </div>
  );
};

export default Message;
