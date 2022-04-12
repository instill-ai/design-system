import { FC } from "react";
import TextAreaBase, { TextAreaBaseProps } from "../TextAreaBase/TextAreaBase";

export type BasicTextAreaProps = Omit<
  TextAreaBaseProps,
  | "inputHeight"
  | "inputWidth"
  | "focusHighlight"
  | "inputFontSize"
  | "inputFontWeight"
  | "inputLineHeight"
  | "inputTextColor"
  | "readOnlyBgColor"
  | "disabledBgColor"
  | "bgColor"
  | "borderRadius"
  | "inputLabelType"
>;
export const BasicTextArea: FC<BasicTextAreaProps> = (props) => {
  return (
    <TextAreaBase
      id={props.id}
      disabled={props.disabled}
      required={props.required}
      onChangeInput={props.onChangeInput}
      error={props.error}
      labelName={props.labelName}
      autoComplete={props.autoComplete}
      placeholder={props.placeholder}
      readOnly={props.readOnly}
      resize={props.resize}
      inputHeight="h-[140px]"
      inputWidth="w-full"
      focusHighlight={true}
      inputFontSize="text-base"
      inputFontWeight="font-normal"
      inputLineHeight="leading-[28px]"
      inputTextColor="text-instillGray95"
      readOnlyBgColor="bg-white"
      disabledBgColor="bg-white"
      bgColor="bg-white"
      borderRadius="rounded"
      inputLabelType="inset"
    />
  );
};
