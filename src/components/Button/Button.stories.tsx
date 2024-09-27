import type { Meta, StoryObj } from "@storybook/react";
import { Icons } from "@storybook/components";
import React from "react";
import Button from "./Button";

const meta = {
  title: "Nxt-cl/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    btnText: "Button",
    type: "button",
  },
};

export const Primary: Story = {
  args: {
    btnText: "Button",
    variant: "primary",
    type: "button",
  },
};

export const Secondary: Story = {
  args: {
    btnText: "Button",
    variant: "secondary",
    type: "button",
  },
};

export const Ghost: Story = {
  args: {
    btnText: "Button",
    variant: "ghost",
    type: "button",
  },
};

export const Success: Story = {
  args: {
    btnText: "Button",
    variant: "success",
    type: "button",
  },
};

export const Danger: Story = {
  args: {
    btnText: "Button",
    variant: "danger",
    type: "button",
  },
};

export const info: Story = {
  args: {
    btnText: "Button",
    variant: "info",
    type: "button",
  },
};

export const Outlined: Story = {
  args: {
    btnText: "Button",
    variant: "outlined",
    color: "blue",
    type: "button",
  },
};

export const Disabled: Story = {
  args: {
    btnText: "Button",
    disabled: true,
    type: "button",
  },
};

//Button Border Radius Example

export const BorderRadius: Story = {
  args: {
    btnText: "Button",
    type: "button",
    rounded: "md",
  },
};

//Button size examples

export const Small: Story = {
  args: {
    size: "sm",
    btnText: "Button",
    type: "button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    btnText: "Button",
    type: "button",
  },
};
export const Large: Story = {
  args: {
    size: "lg",
    btnText: "Button",
    type: "button",
  },
};
export const ExtraLarge: Story = {
  args: {
    size: "xl",
    btnText: "Button",
    type: "button",
  },
};

export const BtnWithLeftIcon: Story = {
  args: {
    btnText: "Button",
    size: "md",
    type: "button",
    startIcon: <Icons icon="bell" />,
  },
};

export const BtnWithRightIcon: Story = {
  args: {
    btnText: "Button",
    size: "md",
    type: "button",
    endIcon: <Icons icon="bell" />,
  },
};

export const BtnWithLoading: Story = {
  args: {
    btnText: "Button",
    size: "md",
    variant: "primary",
    loading: true,
  },
};
