import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Icons } from "@storybook/components";
import Input from "./Input";

const meta = {
  title: "Nxt-cl/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter something",
    variant: "default",
  },
};

//Variants

export const Variants: Story = {
  args: {
    variant: "primary",
  },
};

// Border Radius

export const BorderRadius: Story = {
  args: {
    rounded: "md",
  },
};

// Icons

export const InputWithLeftIcon: Story = {
  args: {
    placeholder: "Search",
    startIcon: <Icons icon="search" />,
  },
};

export const InputWithRightIcon: Story = {
  args: {
    placeholder: "Search",
    endIcon: <Icons icon="search" />,
  },
};

// Disabled

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
