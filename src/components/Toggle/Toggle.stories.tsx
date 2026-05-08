import type { Meta, StoryObj } from "@storybook/react";
import Toggle from "./Toggle";

const meta = {
  title: "Nxt-cl/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Enable notifications",
  },
};

export const Checked: Story = {
  args: {
    label: "Dark mode",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Unavailable",
    disabled: true,
  },
};

export const Different_Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
      <Toggle size="sm" label="Small" />
      <Toggle size="md" label="Medium" />
      <Toggle size="lg" label="Large" />
    </div>
  ),
};
