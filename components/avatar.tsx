interface Props {
  creator: string;
}

function Avatar({ creator }: Props) {
  return (
    <img
      src={avatarUrl(creator)}
      alt={`${creator} avatar`}
      className="w-8 h-8"
    />
  );
}

function avatarUrl(str: string) {
  return `https://avatars.dicebear.com/api/identicon/${str}.svg`;
}

export default Avatar;
