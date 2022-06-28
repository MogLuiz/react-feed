import { ImgHTMLAttributes } from "react";

import { imageBorderModifier } from "./utils";

import styles from "./styles.module.css";

interface TAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

const Avatar = ({ hasBorder = true, ...props }: TAvatarProps) => (
  <img className={imageBorderModifier(styles, hasBorder)} {...props} />
);

export default Avatar;
