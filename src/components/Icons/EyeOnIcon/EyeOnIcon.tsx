import { FC } from "react";
import IconBase, { IconBaseProps } from "../IconBase";

export type EyeOnIconProps = Omit<IconBaseProps, "viewBox">;

const EyeOnIcon: FC<EyeOnIconProps> = (props) => {
  return (
    <IconBase
      viewBox="0 0 30 30"
      width={props.width}
      height={props.height}
      color={props.color}
      position={props.position}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.13416 14.9089C6.71284 14.0813 7.8758 12.5754 9.45243 11.2864C11.0387 9.98947 12.9345 9 15 9C17.0654 9 18.9614 9.98947 20.5475 11.2864C22.1242 12.5754 23.2872 14.0813 23.8659 14.9089C23.9063 14.9667 23.9063 15.0333 23.8659 15.0911C23.2872 15.9187 22.1242 17.4246 20.5475 18.7136C18.9614 20.0105 17.0654 21 15 21C12.9345 21 11.0387 20.0105 9.45243 18.7136C7.8758 17.4246 6.71284 15.9187 6.13416 15.0911C6.09374 15.0333 6.09374 14.9667 6.13416 14.9089ZM15 7C12.221 7 9.85144 8.32223 8.08061 9.77001C6.30014 11.2257 5.01437 12.8974 4.38207 13.8017C3.87264 14.5303 3.87264 15.4697 4.38207 16.1983C5.01437 17.1026 6.30014 18.7743 8.08061 20.23C9.85144 21.6777 12.221 23 15 23C17.779 23 20.1485 21.6777 21.9194 20.23C23.6998 18.7743 24.9857 17.1026 25.6179 16.1983C26.1274 15.4697 26.1274 14.5303 25.6179 13.8017C24.9857 12.8974 23.6998 11.2257 21.9194 9.77001C20.1485 8.32223 17.779 7 15 7ZM15 17.6667C16.5492 17.6667 17.8051 16.4728 17.8051 15C17.8051 13.5272 16.5492 12.3333 15 12.3333C13.4508 12.3333 12.1949 13.5272 12.1949 15C12.1949 16.4728 13.4508 17.6667 15 17.6667Z"
      />
    </IconBase>
  );
};

export default EyeOnIcon;