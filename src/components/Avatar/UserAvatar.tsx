import { useSession } from "next-auth/react";
import Image from "next/image";
import Avatar from "./Avatar";

const UserAvatar = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>; // or a spinner component
  }

  return (
    <Avatar>
      <Image
        src={
          session?.user?.image ||
          "https://avatars.githubusercontent.com/u/20619?v=4"
        } // Fallback image URL
        alt={session?.user?.name || "User Avatar"}
        className="rounded-full"
        width={40}
        height={40}
        priority={true} // Optional: Loads the image with high priority
      />
    </Avatar>
  );
};

export default UserAvatar;
