import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Pagination from "./Pagination";

const meta = {
  title: "Nxt-cl/Pagination",
  component: Pagination,
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <Pagination
        currentPage={currentPage}
        totalPages={6}
        onChange={setCurrentPage}
      />
    );
  },
};
