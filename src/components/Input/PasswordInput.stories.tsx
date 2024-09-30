import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
// import { Icons } from "@storybook/components";
import PasswordInput from "./PasswordInput";

const meta = {
  title: "Nxt-cl/PasswordInput",
  component: PasswordInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter Password",
  },
};

//Variants

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};
export const Danger: Story = {
  args: {
    variant: "danger",
  },
};

// Border Radius

export const BorderRadiusNone: Story = {
  args: {
    rounded: "none",
  },
};
export const BorderRadiusSm: Story = {
  args: {
    rounded: "sm",
  },
};
export const BorderRadiusMd: Story = {
  args: {
    rounded: "md",
  },
};
export const BorderRadiusLg: Story = {
  args: {
    rounded: "lg",
  },
};
