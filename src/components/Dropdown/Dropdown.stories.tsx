// import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import { Icons } from "@storybook/components";
import { Dropdown, Option } from "./Dropdown";

const meta = {
  title: "Nxt-cl/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StandardDropdown: Story = {
  args: {
    label: "Select Countries",
    inputType: "standard",
    options: [
      { id: 1, name: "India", value: "IN" },
      { id: 2, name: "Australia", value: "AU" },
      { id: 3, name: "Japan", value: "JP" },
    ],
    onSelect: (val: Option | string) => console.log(val),
  },
};
export const FloatingDropdown: Story = {
  args: {
    label: "Select Countries",
    inputType: "floating",
    options: ["India", "Australia", "Japan"],
    onSelect: (val: Option | string) => console.log(val),
  },
};
export const LoadingDropdown: Story = {
  args: {
    label: "Select Countries",
    inputType: "floating",
    options: ["India", "Australia", "Japan"],
    onSelect: (val: Option | string) => console.log(val),
    loading: true,
  },
};
export const DisabledDropdown: Story = {
  args: {
    label: "Select Countries",
    inputType: "floating",
    options: ["India", "Australia", "Japan"],
    onSelect: (val: Option | string) => console.log(val),
    disabled: true,
  },
};
export const DropdownHasError: Story = {
  args: {
    label: "Select Countries",
    inputType: "floating",
    options: ["India", "Australia", "Japan"],
    onSelect: (val: Option | string) => console.log(val),
    hasError: true,
  },
};
