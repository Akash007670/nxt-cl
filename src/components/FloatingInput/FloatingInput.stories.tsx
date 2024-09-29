import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Icons } from "@storybook/components";
import FloatingInput from "./FloatingInput";

const meta = {
  title: "Nxt-cl/FloatingInput",
  component: FloatingInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FloatingInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Username",
    variant: "primary",
    rounded: "md",
  },
};
export const Secondary: Story = {
  args: {
    label: "Username",
    variant: "secondary",
  },
};
export const Success: Story = {
  args: {
    label: "Username",
    variant: "success",
  },
};
export const Danger: Story = {
  args: {
    label: "Username",
    variant: "danger",
  },
};

export const FloatingInputIcon: Story = {
  args: {
    label: "Search",
    endIcon: <Icons icon="search" />,
  },
};
