import styles from "./styles.module.css";

type TAvatarProps = {
  imageSrc: string;
  hasBorder: boolean;
};

const Avatar = ({ imageSrc, hasBorder = true }: TAvatarProps) => {
  const imageBorderModifier = () =>
    hasBorder ? styles.avatarWithBorder : styles.avatar;

  return <img className={imageBorderModifier()} src={imageSrc} />;
};

export default Avatar;
