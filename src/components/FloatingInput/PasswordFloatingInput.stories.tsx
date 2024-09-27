import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
// import { Icons } from "@storybook/components";
import FloatingPasswordInput from "./FloatingPasswordInput";

const meta = {
  title: "Nxt-cl/FloatingPasswordInput",
  component: FloatingPasswordInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FloatingPasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Password",
  },
};

//Variants

// export const Primary: Story = {
//   args: {
//     variant: "primary",
//   },
// };
// export const Secondary: Story = {
//   args: {
//     variant: "secondary",
//   },
// };
// export const Danger: Story = {
//   args: {
//     variant: "danger",
//   },
// };

// // Border Radius

// export const BorderRadiusNone: Story = {
//   args: {
//     rounded: "none",
//   },
// };
// export const BorderRadiusSm: Story = {
//   args: {
//     rounded: "sm",
//   },
// };
// export const BorderRadiusMd: Story = {
//   args: {
//     rounded: "md",
//   },
// };
// export const BorderRadiusLg: Story = {
//   args: {
//     rounded: "lg",
//   },
// };
