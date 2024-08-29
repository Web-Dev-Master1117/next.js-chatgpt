import { User } from "lucide-react";

import Avatar from "./Avatar";

const BotAvatar = () => {
  return (
    <Avatar>
      {/* <User className="h-7 w-7 text-zinc-600 dark:text-zinc-200" /> */}
      <img
        src={"https://avatars.githubusercontent.com/u/20619?v=4"}
        alt=""
        className="rounded-full"
        width={40}
        height={40}
      />
    </Avatar>
  );
};

export default BotAvatar;
