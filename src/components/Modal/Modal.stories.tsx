import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Modal from "./Modal";

const meta = {
  title: "Nxt-cl/Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div>
        <button type="button" onClick={() => setOpen(true)}>
          Open modal
        </button>
        <Modal
          open={open}
          title="Modal Title"
          onClose={() => setOpen(false)}
          footer={
            <button type="button" onClick={() => setOpen(false)}>
              Close
            </button>
          }
        >
          <p>This is a simple modal dialog used for actions and messages.</p>
        </Modal>
      </div>
    );
  },
};
