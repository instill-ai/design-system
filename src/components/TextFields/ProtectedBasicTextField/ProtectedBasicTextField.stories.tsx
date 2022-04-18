import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProtectedBasicTextField from "./ProtectedBasicTextField";

export default {
  title: "Components/Ui/Input/ProtectedBasicTextField",
  component: ProtectedBasicTextField,
} as ComponentMeta<typeof ProtectedBasicTextField>;

const Template: ComponentStory<typeof ProtectedBasicTextField> = (args) => (
  <ProtectedBasicTextField {...args} />
);

export const Playground: ComponentStory<typeof ProtectedBasicTextField> =
  Template.bind({});

Playground.args = {
  error: null,
  id: "protected-text-field-playground",
  labelName: "protected-text-field-playground",
  required: true,
  autoComplete: "off",
  disabled: false,
  placeholder: "hello!",
  readOnly: false,
};
