import { ComponentMeta, Story } from "@storybook/react";
import ProgressBar, {
  ProgressBarProps,
} from "../../components/ProgressBar/ProgressBar";

export default {
  title: "Progress Bar",
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: Story<ProgressBarProps> = (args) => (
  <div className="w-56">
    <ProgressBar {...args} />
  </div>
);

export const WithLoadingText = Template.bind({});
WithLoadingText.args = {
  progressText: "Loading...",
  progress: 23,
};

export const WithoutLoadingText = Template.bind({});
WithoutLoadingText.args = {
  progress: 50,
};
