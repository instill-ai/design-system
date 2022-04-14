import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
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
  labelName: "playground",
  required: true,
  inputHeight: "h-[140px]",
  inputWidth: "w-full",
  focusHighlight: true,
  autoComplete: "off",
  inputFontSize: "text-base",
  inputFontWeight: "font-normal",
  inputLineHeight: "leading-[28px]",
  inputTextColor: "text-instillGray95",
  disabled: false,
  placeholder: "hello",
  readOnly: false,
  inputLabelType: "inset",
  bgColor: "bg-white",
  inputBorderRadius: "rounded-[1px]",
  inputBorderColor: "border-instillGray20",
  inputBorderStyle: "border-solid",
  inputBorderWidth: "border",
  disabledCursor: "cursor-not-allowed",
  disabledInputBgColor: "bg-white",
  disabledInputBorderColor: "border-instillGray20",
  disabledInputBorderStyle: "border-dashed",
  disabledInputBorderWidth: "border",
  disabledInputTextColor: "text-instillGray50",
  readOnlyCursor: "cursor-auto",
  readOnlyInputBgColor: "bg-white",
  readOnlyInputBorderColor: "border-instillGray20",
  readOnlyInputBorderStyle: "border-solid",
  readOnlyInputBorderWidth: "border",
  readOnlyInputTextColor: "text-instillGray95",
  placeholderFontFamily: "placeholder:font-sans",
  placeholderFontSize: "placeholder:text-base",
  placeholderFontWeight: "placeholder:font-normal",
  placeholderLineHeight: "placeholder:leading-[28px]",
  placeholderTextColor: "placeholder:text-instillGray95",
};

export const Default: ComponentStory<typeof TextAreaBase> = () => {
  const [text, setText] = useState<string>("");

  const onChangeInput = (inputValue: string) => {
    setText(inputValue);
  };

  return (
    <TextAreaBase
      value={text}
      error={null}
      onChangeInput={onChangeInput}
      id="text-field-playground"
      labelName="playground"
      required={true}
      inputHeight={"h-[140px]"}
      inputWidth={"w-full"}
      focusHighlight={true}
      autoComplete="off"
      inputFontSize="text-base"
      inputFontWeight="font-normal"
      inputLineHeight="leading-[28px]"
      inputTextColor="text-instillGray95"
      disabled={false}
      placeholder="hello"
      readOnly={false}
      inputLabelType="inset"
      bgColor="bg-white"
      inputBorderRadius="rounded-[1px]"
      inputBorderColor="border-instillGray20"
      inputBorderStyle="border-solid"
      inputBorderWidth="border"
      disabledCursor="cursor-not-allowed"
      disabledInputBgColor="bg-white"
      disabledInputBorderColor="border-instillGray20"
      disabledInputBorderStyle="border-dashed"
      disabledInputBorderWidth="border"
      disabledInputTextColor="text-instillGray50"
      readOnlyCursor="cursor-auto"
      readOnlyInputBgColor="bg-white"
      readOnlyInputBorderColor="border-instillGray20"
      readOnlyInputBorderStyle="border-solid"
      readOnlyInputBorderWidth="border"
      readOnlyInputTextColor="text-instillGray95"
      placeholderFontFamily="placeholder:font-sans"
      placeholderFontSize="placeholder:text-base"
      placeholderFontWeight="placeholder:font-normal"
      placeholderLineHeight="placeholder:leading-[28px]"
      placeholderTextColor="placeholder:text-instillGray95"
      enableCounter={true}
      counterFontFamily="font-sans"
      counterFontSize="text-xs"
      counterFontWeight="font-normal"
      counterLineHeight="leanding-[15.6px]"
      counterTextColor="text-instillGray20"
      counterWordLimit={256}
    />
  );
};
