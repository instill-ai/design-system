import { FC } from "react";
import ProgressMessageBoxBase, {
  ProgressMessageBoxBaseProps,
} from "../ProgressMessageBoxBase";

export type BasicProgressMessageBoxProps = Omit<
  ProgressMessageBoxBaseProps,
  | "errorIconColor"
  | "errorIconWidth"
  | "errorIconHeight"
  | "successIconColor"
  | "successIconWidth"
  | "successIconHeight"
  | "IconPosition"
  | "IndicatorColumnWidth"
  | "indicatorColumnBottomLeftBorderRadius"
  | "indicatorColumnTopLeftBorderRadius"
  | "messageColumnBgColor"
  | "messageColumnBottomRightBorderRadius"
  | "messageColumnTopRightBorderRadius"
  | "boxBorderRadius"
  | "progressBlockSize"
>;

const BasicProgressMessageBox: FC<BasicProgressMessageBoxProps> = (props) => {
  return (
    <ProgressMessageBoxBase
      status={props.status}
      width={props.width}
      indicatorColumnBgColor={props.indicatorColumnBgColor}
      errorIconColor="fill-instillRed"
      errorIconWidth="w-7"
      errorIconHeight="h-7"
      successIconColor="fill-instillGreen"
      successIconWidth="w-7"
      successIconHeight="h-7"
      iconPosition="mx-auto mb-auto"
      indicatorColumnWidth="w-12"
      indicatorColumnBottomLeftBorderRadius="rounded-bl-[1px]"
      indicatorColumnTopLeftBorderRadius="rounded-tl-[1px]"
      messageColumnBgColor="bg-white"
      messageColumnBottomRightBorderRadius="rounded-br-[1px]"
      messageColumnTopRightBorderRadius="rounded-tr-[1px]"
      boxBorderRadius="rounded-[1px]"
      progressBlockSize={28}
    >
      {props.children}
    </ProgressMessageBoxBase>
  );
};

export default BasicProgressMessageBox;