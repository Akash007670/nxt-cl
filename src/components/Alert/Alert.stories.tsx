import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Alert from "./Alert";

const meta = {
  title: "Nxt-cl/Alert",
  component: Alert,
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success!",
    children: "Your changes have been saved successfully.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    children: "Please review your input before submitting.",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    title: "Error",
    children: "An error occurred while processing your request.",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "This is an informational message.",
  },
};

export const Dismissible: Story = {
  render: () => {
    const [show, setShow] = useState(true);
    return show ? (
      <Alert
        variant="info"
        title="Dismissible Alert"
        closeButton
        onClose={() => setShow(false)}
      >
        This alert can be closed by clicking the X button.
      </Alert>
    ) : (
      <div>Alert dismissed</div>
    );
  },
};
