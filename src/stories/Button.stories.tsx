import React, { useState } from "react"
import { action } from "@storybook/addon-actions"
import type { Meta, StoryObj } from "@storybook/react"
import Button from "../components/atoms/forms/Buttons/index"
import { ButtonTypes } from "../components/atoms/forms/Buttons/types"

const meta: Meta<ButtonTypes> = {
  title: "Component/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta

function onClick(val, setVal) {
  const newCount = val + 1
  setVal(newCount)
  action("clicked")(newCount)
}
const Template = (args: ButtonTypes) => {
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
type Story = StoryObj<ButtonTypes>
export const Default: Story = {
  render: Template,
  // args: { children: "buttons", disabled: true },
  args: { children: "primary" },
}
