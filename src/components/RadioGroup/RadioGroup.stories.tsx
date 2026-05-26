import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import RadioGroup from "./RadioGroup";

const meta = {
  title: "Nxt-cl/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

const options = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b" },
  { label: "Option C", value: "c" },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("a");
    return (
      <RadioGroup
        name="example"
        options={options}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const RowLayout: Story = {
  render: () => {
    const [value, setValue] = useState("a");
    return (
      <RadioGroup
        name="row-example"
        options={options}
        value={value}
        onChange={setValue}
        direction="row"
      />
    );
  },
};
