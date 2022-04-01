import { FC, useRef, useState } from "react";
import cn from "clsx";
import InputLabel from "../../InputLabel";
import EyeSlashIcon from "../../Icons/EyeSlashIcon";
import EyeIcon from "../../Icons/EyeIcon";

/**
 * TextFieldBase
 *
 * ### How it implement inset lable transfor
 * - Use top-1/2 + (-terraform-1/2) to make label fix at the center of input box
 * - Use top-1/2 + (-terraform-full) to move label up a little bit
 */

export interface TextFieldBaseProps {
  /** Input field's id */
  id: string;

  /** Text field's type
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
   */
  type: string;

  /**
   * Whether the form control is disabled
   */
  disabled: boolean;

  /**
   * Text that appears in the form control when it has no value set
   */
  placeholder: string;

  /**
   * Whether The value is editable or not.
   */
  readOnly: boolean;

  /** TailwindCSS format
   * - Input and Label's font size, line height and font weight
   */
  fontStyle: string;

  /** Input on change handler */
  onChangeInput: (inputValue: string) => void;

  /** Whether the field is necessary or not */
  required: boolean;

  /** Whether the input is valid or not */
  valid: boolean;

  /** TextField labelName */
  labelName: string;

  /** TailwindCSS format
   * - Default is w-full, please make sure this component's parent has defined width
   * - if you are not sure about the defined number, please use abitrary number like w-[number-unit] w-[20px].
   */
  inputWidth: string;

  /** focusHighlight
   * - enable: border highlight with intstill blue30
   * - disable: remove default input border highlight, the border will remain initial color and width
   */
  focusHighlight: boolean;

  /** TailwindCSS format
   * - Default is h-[70px]
   * - if you are not sure about the defined number, please use abitrary number like w-[number-unit] w-[20px].
   */
  inputHeight: string;

  /** Specific whether browser should help user auto complete the input or not */
  autoComplete: string;

  /** Whether enable protected text toggle or not */
  enableProtectedToggle: boolean;
}

const TextFieldBase: FC<TextFieldBaseProps> = ({
  onChangeInput,
  id,
  required,
  valid,
  labelName,
  fontStyle,
  inputWidth,
  inputHeight,
  autoComplete,
  focusHighlight,
  disabled,
  type,
  placeholder,
  readOnly,
  enableProtectedToggle,
}) => {
  const [focus, setFocus] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [expose, setExpose] = useState(false);

  const widthStyle = inputWidth ?? "w-full";
  const heightStyle = inputHeight ?? "h-[70px]";

  return (
    <div
      className={cn(
        "flex relative border border-instillGray15 rounded-[1px]",
        widthStyle
      )}
    >
      <InputLabel
        answered={answered}
        focus={focus}
        required={required}
        htmlFor={id}
        fontStyle={fontStyle}
      >
        {labelName}
      </InputLabel>
      <input
        className={cn(
          "pt-6 ring-0 pl-5 placeholder:text-instillGray30",
          heightStyle,
          widthStyle,
          fontStyle,
          focusHighlight
            ? "instill-input-highlight"
            : "instill-input-no-highlight"
        )}
        id={id}
        type={expose ? "text" : type}
        disabled={disabled}
        required={required}
        placeholder={focus ? placeholder : null}
        readOnly={readOnly}
        autoComplete={autoComplete}
        onChange={(event) => {
          const inputValue = event.target.value;
          onChangeInput(event.target.value);
          if (!inputValue) {
            setAnswered(false);
            return;
          }
          setAnswered(true);
        }}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {enableProtectedToggle ? (
        <div className="absolute flex transform-gpu right-5 top-1/2 -translate-y-1/2">
          <button className="my-auto" onClick={() => setExpose(!expose)}>
            {expose ? (
              <EyeSlashIcon
                width="w-4"
                height="h-4"
                color="text-instillGray50"
                position="my-auto"
              />
            ) : (
              <EyeIcon
                width="w-4"
                height="h-4"
                color="text-instillGray50"
                position="my-auto"
              />
            )}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default TextFieldBase;
