import { ComponentStory, ComponentMeta } from "@storybook/react";
import { basicInputDescriptionConfig } from "../../InputDescriptions";
import TextAreaBase from "./TextAreaBase";

export default {
  title: "Components/Base/Input/TextAreaBase",
  component: TextAreaBase,
} as ComponentMeta<typeof TextAreaBase>;

const Template: ComponentStory<typeof TextAreaBase> = (args) => (
  <TextAreaBase {...args} />
);

export const Playground: ComponentStory<typeof TextAreaBase> = Template.bind(
  {}
);

Playground.args = {
  error: null,
  id: "text-field-playground",
  description: "this is a description for textarea base",
  label: "Playground",
  additionalMessageOnLabel: null,
  required: true,
  inputHeight: "h-[140px]",
  inputWidth: "w-full",
  focusHighlight: true,
  autoComplete: "off",
  inputFontSize: "text-base",
  inputFontWeight: "font-normal",
  inputLineHeight: "leading-[28px]",
  inputTextColor: "text-instillGrey95",
  disabled: false,
  placeholder: "hello",
  readOnly: false,
  inputLabelType: "inset",
  bgColor: "bg-white",
  inputBorderRadius: "rounded-[1px]",
  inputBorderColor: "border-instillGrey20",
  inputBorderStyle: "border-solid",
  inputBorderWidth: "border",
  disabledCursor: "cursor-not-allowed",
  disabledInputBgColor: "bg-white",
  disabledInputBorderColor: "border-instillGrey20",
  disabledInputBorderStyle: "border-dashed",
  disabledInputBorderWidth: "border",
  disabledInputTextColor: "text-instillGrey50",
  readOnlyCursor: "cursor-auto",
  readOnlyInputBgColor: "bg-white",
  readOnlyInputBorderColor: "border-instillGrey20",
  readOnlyInputBorderStyle: "border-solid",
  readOnlyInputBorderWidth: "border",
  readOnlyInputTextColor: "text-instillGrey95",
  placeholderFontFamily: "placeholder:font-sans",
  placeholderFontSize: "placeholder:text-base",
  placeholderFontWeight: "placeholder:font-normal",
  placeholderLineHeight: "placeholder:leading-[28px]",
  placeholderTextColor: "placeholder:text-instillGrey95",
  enableCounter: true,
  counterFontFamily: "font-sans",
  counterFontSize: "text-xs",
  counterFontWeight: "font-normal",
  counterLineHeight: "leanding-[15.6px]",
  counterTextColor: "text-instillGrey20",
  counterWordLimit: 256,
  labelFontSize: "text-sm",
  labelFontWeight: "font-normal",
  labelTextColor: "text-instillGrey50",
  labelLineHeight: "leading-[18.2px]",
  labelFontFamily: "font-sans",
  errorInputBgColor: "bg-white",
  errorLabelFontFamily: "font-sans",
  errorLabelFontSize: "text-sm",
  errorLabelFontWeight: "font-normal",
  errorLabelLineHeight: "leading-[18.2px]",
  errorLabelTextColor: "text-instillRed",
  errorInputBorderColor: "border-instillRed",
  errorInputBorderWidth: "border",
  errorInputBorderStyle: "border-solid",
  errorInputTextColor: "text-instillRed",
  ...basicInputDescriptionConfig,
};
