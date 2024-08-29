import Image from "next/image"; // Import Next.js Image component
import Avatar from "./Avatar";

const BotAvatar = () => {
  return (
    <Avatar>
      <Image
        src="https://avatars.githubusercontent.com/u/20619?v=4"
        alt="Bot Avatar"
        className="rounded-full"
        width={40}
        height={40}
        priority={true} // Optional: Loads the image with high priority
      />
    </Avatar>
  );
};

export default BotAvatar;
