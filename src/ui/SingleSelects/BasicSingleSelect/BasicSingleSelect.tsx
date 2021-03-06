import React from "react";
import {
  basicInputDescriptionConfig,
  BasicInputDescriptionOmitKeys,
} from "../../InputDescriptions";
import SingleSelectBase, { SingleSelectBaseProps } from "../SingleSelectBase";

export type BasicSingleSelectRequiredKeys =
  | "id"
  | "instanceId"
  | "label"
  | "value"
  | "options"
  | "onChangeInput";

export type BasicSingleSelectOmitKeys =
  | "inputLabelType"
  | "labelFontSize"
  | "labelFontWeight"
  | "labelTextColor"
  | "labelLineHeight"
  | "labelFontFamily"
  | "labelActivateStyle"
  | "labelDeActivateStyle"
  | "errorLabelFontFamily"
  | "errorLabelFontSize"
  | "errorLabelFontWeight"
  | "errorLabelLineHeight"
  | "errorLabelTextColor";

export type FullBasicSingleSelectProps = Omit<
  SingleSelectBaseProps,
  BasicSingleSelectOmitKeys | BasicInputDescriptionOmitKeys
>;

export type BasicSingleSelectRequiredProps = Pick<
  FullBasicSingleSelectProps,
  BasicSingleSelectRequiredKeys
>;

export type BasicSingleSelectOptionalProps = Partial<
  Omit<FullBasicSingleSelectProps, BasicSingleSelectRequiredKeys>
>;

export type BasicSingleSelectConfig = Pick<
  SingleSelectBaseProps,
  BasicSingleSelectOmitKeys
>;

export const basicSingleSelectConfig: BasicSingleSelectConfig = {
  inputLabelType: "inset",
  labelFontSize: "text-sm",
  labelFontWeight: "font-normal",
  labelTextColor: "text-instillGrey50",
  labelLineHeight: "leading-[18.2px]",
  labelFontFamily: "font-sans",
  labelActivateStyle: "top-1/2 -translate-y-[120%]",
  labelDeActivateStyle: "top-1/2 -translate-y-1/2",
  errorLabelFontFamily: "font-sans",
  errorLabelFontSize: "text-sm",
  errorLabelFontWeight: "font-normal",
  errorLabelLineHeight: "leading-[18.2px]",
  errorLabelTextColor: "text-instillRed",
};

export type BasicSingleSelectProps = BasicSingleSelectRequiredProps &
  BasicSingleSelectOptionalProps;

const BasicSingleSelect: React.FC<BasicSingleSelectProps> = (props) => {
  return (
    <SingleSelectBase
      id={props.id}
      instanceId={props.instanceId}
      onChangeInput={props.onChangeInput}
      value={props.value}
      options={props.options}
      label={props.label}
      additionalMessageOnLabel={props.additionalMessageOnLabel ?? null}
      menuPlacement={props.menuPlacement ?? "auto"}
      description={props.description ?? ""}
      error={props.error ?? null}
      disabled={props.disabled ?? false}
      readOnly={props.readOnly ?? false}
      required={props.required ?? false}
      isClearable={props.isClearable ?? false}
      {...basicInputDescriptionConfig}
      {...basicSingleSelectConfig}
    />
  );
};

export default BasicSingleSelect;
