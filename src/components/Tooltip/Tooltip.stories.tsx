import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./Tooltip";

const meta = {
  title: "Nxt-cl/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Tooltip content",
    children: <button type="button">Hover me</button>,
  },
};

export const Bottom: Story = {
  args: {
    label: "Bottom tooltip",
    position: "bottom",
    children: <button type="button">Hover me</button>,
  },
};

export const Left: Story = {
  args: {
    label: "Left tooltip",
    position: "left",
    children: <button type="button">Hover me</button>,
  },
};

export const Right: Story = {
  args: {
    label: "Right tooltip",
    position: "right",
    children: <button type="button">Hover me</button>,
  },
};
