import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Rating from "./Rating";

const meta = {
  title: "Nxt-cl/Rating",
  component: Rating,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  render: () => {
    const [rating, setRating] = useState(0);
    return (
      <div>
        <Rating value={rating} onChange={setRating} />
        <p>Rating: {rating}/5</p>
      </div>
    );
  },
};

export const Readonly: Story = {
  args: {
    value: 4,
    readonly: true,
  },
};

export const Small: Story = {
  args: {
    value: 3,
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    value: 5,
    size: "lg",
  },
};

export const Empty: Story = {
  args: {
    value: 0,
  },
};
