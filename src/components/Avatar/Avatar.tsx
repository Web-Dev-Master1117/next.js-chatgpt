type AvatarProps = {
  children: React.ReactNode;
};
const Avatar = ({ children }: AvatarProps) => {
  return (
    <div className="items-center justify-center rounded-full bg-transparent pt-4">
      {children}
    </div>
  );
};

export default Avatar;
