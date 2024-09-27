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

export const Basic: Story = {
  args: {
    label: "Username",
  },
};

export const FloatingInputIcon: Story = {
  args: {
    label: "Search",
    endIcon: <Icons icon="search" />,
  },
};
