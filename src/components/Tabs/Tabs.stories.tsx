import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Tabs from "./Tabs";

const meta = {
  title: "Nxt-cl/Tabs",
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleTabs = [
  { id: "overview", label: "Overview", content: <p>Overview content</p> },
  { id: "features", label: "Features", content: <p>Feature details</p> },
  { id: "pricing", label: "Pricing", content: <p>Pricing information</p> },
];

export const Default: Story = {
  render: () => {
    const [activeId, setActiveId] = useState("overview");
    return <Tabs tabs={sampleTabs} activeId={activeId} onChange={setActiveId} />;
  },
};
