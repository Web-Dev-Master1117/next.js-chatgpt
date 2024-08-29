type AvatarProps = {
  children: React.ReactNode
}
const Avatar = ({children}: AvatarProps) => {
  return (
    <div className="items-center justify-center rounded-full bg-neutral-200 p-4 dark:bg-neutral-700">
      {children}
    </div>
  )
}

export default Avatar
