import React from "react";
import InputLabelBase, { InputLabelBaseProps } from "../InputLabelBase";

export type BasicInputLabelProps = Omit<
  InputLabelBaseProps,
  | "labelFontSize"
  | "labelFontWeight"
  | "labelTextColor"
  | "labelLineHeight"
  | "labelFontFamily"
  | "labelActivateStyle"
  | "labelDeActivateStyle"
>;

const BasicInputLabel: React.FC<BasicInputLabelProps> = (props) => {
  return (
    <InputLabelBase
      focus={props.focus}
      required={props.required}
      answered={props.answered}
      htmlFor={props.htmlFor}
      type={props.type}
      onBlurHandler={props.onBlurHandler}
      onFocusHandler={props.onFocusHandler}
      label={props.label}
      labelFontSize="text-sm"
      labelFontWeight="font-normal"
      labelTextColor="text-instillGrey50"
      labelLineHeight="leading-[18.2px]"
      labelFontFamily="font-sans"
      labelActivateStyle="top-1/2 -translate-y-[120%]"
      labelDeActivateStyle="top-1/2 -translate-y-1/2"
    />
  );
};

export default BasicInputLabel;
