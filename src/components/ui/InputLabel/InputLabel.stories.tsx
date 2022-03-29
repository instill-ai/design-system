import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputLabel from "./InputLabel";
import { StoryGroup } from "../../../utils/StoryGroup";

export default {
  title: "Components/Ui/Input/InputLabel",
  component: InputLabel,
} as ComponentMeta<typeof InputLabel>;

const Template: ComponentStory<typeof InputLabel> = (args) => (
  <InputLabel {...args}>Playground label</InputLabel>
);

export const Playground = Template.bind({});

export const Default: ComponentStory<typeof InputLabel> = () => (
  <InputLabel focus={false} htmlFor="default" answered={false} required={false}>
    Default label
  </InputLabel>
);

export const Required: ComponentStory<typeof InputLabel> = () => (
  <InputLabel focus={false} htmlFor="default" answered={false} required={true}>
    Required label
  </InputLabel>
);

export const Answered: ComponentStory<typeof InputLabel> = () => (
  <InputLabel focus={false} htmlFor="default" answered={true} required={false}>
    Answered label
  </InputLabel>
);

export const Focused: ComponentStory<typeof InputLabel> = () => (
  <InputLabel focus={true} htmlFor="default" answered={false} required={false}>
    Focused label
  </InputLabel>
);

export const All: ComponentStory<typeof InputLabel> = () => (
  <StoryGroup>
    <div className="relative h-10 border mb-2">
      <InputLabel
        focus={false}
        htmlFor="default"
        answered={false}
        required={false}
      >
        Default label
      </InputLabel>
    </div>

    <div className="relative h-10 border mb-2">
      <InputLabel
        focus={false}
        htmlFor="default"
        answered={false}
        required={true}
      >
        Required label
      </InputLabel>
    </div>
    <div className="relative h-10 border mb-2">
      <InputLabel
        focus={false}
        htmlFor="default"
        answered={true}
        required={false}
      >
        Answered label
      </InputLabel>
    </div>
    <div className="relative h-10 border mb-2">
      <InputLabel
        focus={true}
        htmlFor="default"
        answered={false}
        required={false}
      >
        Focused label
      </InputLabel>
    </div>
  </StoryGroup>
);