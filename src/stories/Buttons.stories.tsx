import React, { useState } from "react"
import { action } from "@storybook/addon-actions"
import type { Meta, StoryObj } from "@storybook/react"
import Button from "@/atoms/forms/Buttons"
import { ButtonTypes } from "@/atoms/forms/Buttons/Buttons.types"

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
function onClick(val, setVal) {
  const newCount = val + 1
  setVal(newCount)
  action("clicked")(newCount)
}
function Template(args: ButtonTypes) {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    onClick(count, setCount)
  }
  return (
    <Button {...args} onClick={handleClick}>
      {args.children}
    </Button>
  )
}
export const Default: Story = {
  render: (args: ButtonTypes) => Template(args),
  args: {
    children: "Button",
  },
}
