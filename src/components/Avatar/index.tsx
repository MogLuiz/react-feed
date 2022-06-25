import { imageBorderModifier } from "./utils";

import styles from "./styles.module.css";

type TAvatarProps = {
  imageSrc: string;
  hasBorder: boolean;
};

const Avatar = ({ imageSrc, hasBorder = true }: TAvatarProps) => (
  <img className={imageBorderModifier(styles, hasBorder)} src={imageSrc} />
);

export default Avatar;
