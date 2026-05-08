import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta = {
  title: "Nxt-cl/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    variant: "outlined",
    padding: "md",
    children: <div>Card content goes here</div>,
  },
};

export const Elevated: Story = {
  args: {
    variant: "elevated",
    padding: "md",
    children: <div>Elevated card with shadow</div>,
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    padding: "md",
    children: <div>Filled card background</div>,
  },
};

export const Hoverable: Story = {
  args: {
    variant: "elevated",
    padding: "lg",
    hoverable: true,
    children: <div>Hover me to see the effect</div>,
  },
};
