import styles from "./styles.module.css";

type TAvatarProps = {
  imageSrc: string;
};

const Avatar = ({ imageSrc }: TAvatarProps) => {
  return <img className={styles.avatar} src={imageSrc} />;
};

export default Avatar;
