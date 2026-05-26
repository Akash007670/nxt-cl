import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Snackbar from "./Snackbar";

const meta = {
  title: "Nxt-cl/Snackbar",
  component: Snackbar,
  tags: ["autodocs"],
} satisfies Meta<typeof Snackbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div>
        <button type="button" onClick={() => setOpen(true)}>
          Show Snackbar
        </button>
        <Snackbar
          open={open}
          title="Notice"
          message="This is a snackbar message."
          variant="default"
          onClose={() => setOpen(false)}
        />
      </div>
    );
  },
};

export const SuccessMessage: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div>
        <button type="button" onClick={() => setOpen(true)}>
          Show Success Snackbar
        </button>
        <Snackbar
          open={open}
          title="Success"
          message="Your changes have been saved."
          variant="success"
          onClose={() => setOpen(false)}
        />
      </div>
    );
  },
};

export const WithAction: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div>
        <button type="button" onClick={() => setOpen(true)}>
          Show Action Snackbar
        </button>
        <Snackbar
          open={open}
          title="Undo sent"
          message="Your message was sent successfully."
          variant="warning"
          actionLabel="Undo"
          onAction={() => alert("Undo clicked")}
          onClose={() => setOpen(false)}
        />
      </div>
    );
  },
};

export const ManualClose: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div>
        <button type="button" onClick={() => setOpen(true)}>
          Show Manual Snackbar
        </button>
        <Snackbar
          open={open}
          title="Reminder"
          message="You must save your work before closing the page."
          variant="danger"
          duration={0}
          onClose={() => setOpen(false)}
        />
      </div>
    );
  },
};
