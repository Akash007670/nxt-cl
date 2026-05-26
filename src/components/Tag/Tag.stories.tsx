import type { Meta, StoryObj } from "@storybook/react";
import Tag from "./Tag";

const meta = {
  title: "Nxt-cl/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Tag",
    variant: "secondary",
  },
};

export const Removable: Story = {
  args: {
    label: "Removable Tag",
    variant: "primary",
    removable: true,
    onRemove: () => alert("Tag removed"),
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px" }}>
      <Tag label="Small" size="sm" variant="success" />
      <Tag label="Medium" size="md" variant="warning" />
    </div>
  ),
};
