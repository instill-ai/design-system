import { ComponentStory, ComponentMeta } from "@storybook/react";
import RotatableArrowIcon from "./RotatableArrowIcon";

export default {
  title: "Components/Ui/Icon/RotatableArrowIcon",
  component: RotatableArrowIcon,
} as ComponentMeta<typeof RotatableArrowIcon>;

const Template: ComponentStory<typeof RotatableArrowIcon> = (args) => (
  <RotatableArrowIcon {...args} />
);

export const Playground: ComponentStory<typeof RotatableArrowIcon> =
  Template.bind({});

Playground.args = {
  width: "w-[30px]",
  height: "h-[30px]",
  color: "text-instillGrey50",
  position: "my-auto",
  rotate: "rotate-45",
};
