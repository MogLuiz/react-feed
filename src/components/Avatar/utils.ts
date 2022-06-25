export const imageBorderModifier = (
  styles: CSSModuleClasses,
  hasBorder: boolean
) => (hasBorder ? styles.avatarWithBorder : styles.avatar);
