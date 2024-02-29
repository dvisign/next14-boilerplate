import React, { useState } from "react"
import { action } from "@storybook/addon-actions"
import type { Meta, StoryObj } from "@storybook/react"
import Button, { ButtonTypes } from "@repo/components/forms/Buttons"

const meta = {
  title: "Component/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    children: "Button",
  },
  render: function Template(args: ButtonTypes) {
    const [count, setCount] = useState<number>(0)
    function onClick() {
      setCount(count + 1)
      action("clicked")(count + 1)
    }
    return <Button onClick={onClick}>{args.children}</Button>
  },
}
