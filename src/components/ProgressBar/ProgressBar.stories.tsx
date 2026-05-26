import type { Meta, StoryObj } from "@storybook/react";
import ProgressBar from "./ProgressBar";

const meta = {
  title: "Nxt-cl/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 45,
    max: 100,
    variant: "primary",
    showValue: true,
  },
};

export const Labeled: Story = {
  args: {
    value: 60,
    max: 100,
    variant: "success",
    label: "Upload progress",
    showValue: true,
  },
};

export const Danger: Story = {
  args: {
    value: 25,
    variant: "danger",
    label: "Server load",
    showValue: true,
  },
};

export const NoAnimation: Story = {
  args: {
    value: 80,
    variant: "warning",
    showValue: true,
    animated: false,
  },
};
