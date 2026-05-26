import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./Breadcrumb";

const meta = {
  title: "Nxt-cl/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

const items = [
  { label: "Home", href: "/" },
  { label: "Library", href: "/library" },
  { label: "Data" },
];

export const Default: Story = {
  args: {
    items,
  },
};

export const CustomSeparator: Story = {
  args: {
    items,
    separator: ">",
  },
};

export const NoLinks: Story = {
  args: {
    items: [{ label: "Home" }, { label: "Products" }, { label: "Details" }],
  },
};
