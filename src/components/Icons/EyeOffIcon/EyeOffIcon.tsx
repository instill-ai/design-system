import { FC } from "react";
import IconBase, { IconBaseProps } from "../IconBase";

export type EyeOffIconProps = Omit<IconBaseProps, "viewBox">;

const EyeOffIcon: FC<EyeOffIconProps> = (props) => {
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
        d="M4.19607 7.41355C4.53011 6.96624 5.17486 6.86621 5.63616 7.19013L25.5735 21.19C26.0348 21.5139 26.138 22.1391 25.8039 22.5864C25.4699 23.0337 24.8252 23.1338 24.3639 22.8098L21.2719 20.6388C19.6002 21.9184 17.4642 23 15 23C12.2757 23 9.95265 21.6777 8.21664 20.2299C6.47116 18.7743 5.21068 17.1025 4.59081 16.1983C4.09191 15.4705 4.09036 14.5319 4.59023 13.8026C5.07707 13.0923 5.95867 11.9092 7.15959 10.7292L4.42648 8.80999C3.96519 8.48608 3.86203 7.86087 4.19607 7.41355ZM8.852 11.9176C7.6651 13.0403 6.78402 14.215 6.30792 14.9096C6.28653 14.9408 6.27845 14.9717 6.27847 14.9998C6.27848 15.028 6.28665 15.0593 6.30844 15.0911C6.87575 15.9187 8.01586 17.4246 9.56148 18.7136C11.1165 20.0104 12.9752 21 15 21C16.6426 21 18.1755 20.3487 19.5246 19.4117L16.4602 17.26C16.037 17.5176 15.5364 17.6666 14.9999 17.6666C13.4811 17.6666 12.2499 16.4727 12.2499 14.9999C12.2499 14.7792 12.2776 14.5647 12.3297 14.3596L8.852 11.9176ZM15 9.00005C14.29 9.00005 13.6021 9.12103 12.9392 9.33478C12.3988 9.50903 11.815 9.22544 11.6353 8.70137C11.4556 8.17731 11.748 7.61121 12.2885 7.43695C13.1372 7.16329 14.0448 7.00007 15 7.00007C17.7243 7.00007 20.0474 8.32228 21.7833 9.77005C23.5288 11.2257 24.7893 12.8974 25.4091 13.8017C25.9087 14.5303 25.9085 15.4698 25.4091 16.1983C25.2571 16.4202 25.068 16.6859 24.8443 16.9816C24.5074 17.4269 23.862 17.5231 23.4029 17.1964C22.9436 16.8698 22.8444 16.244 23.1812 15.7986C23.3845 15.5301 23.5552 15.2899 23.6915 15.0912C23.7311 15.0333 23.7311 14.9666 23.6915 14.9089C23.1242 14.0813 21.9842 12.5754 20.4386 11.2864C18.8834 9.98952 17.0248 9.00005 15 9.00005Z"
      />
    </IconBase>
  );
};

export default EyeOffIcon;
