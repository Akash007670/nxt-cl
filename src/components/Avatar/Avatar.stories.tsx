import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";

const meta = {
  title: "Nxt-cl/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fallback: "AK",
  },
};

export const WithImage: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&w=256&h=256&q=80",
    alt: "User avatar",
  },
};

export const Square: Story = {
  args: {
    fallback: "UI",
    shape: "square",
    size: "lg",
  },
};

export const ExtraLarge: Story = {
  args: {
    fallback: "CL",
    size: "xl",
  },
};
