import React, { useState } from "react"
import { action } from "@storybook/addon-actions"
import type { Meta, StoryObj } from "@storybook/react"
import { FiLogIn } from "react-icons/fi"
import IconButtonMol from "@/molecules/forms/IconButtonMol"
import { ButtonMolTypes } from "@/molecules/forms/IconButtonMol/IconButton.types"

const meta = {
  title: "Component/Molecules/IconButtonMol",
  component: IconButtonMol,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IconButtonMol>

export default meta
type Story = StoryObj<typeof meta>
function onClick(val, setVal) {
  const newCount = val + 1
  setVal(newCount)
  action("clicked")(newCount)
}
export const Default: Story = {
  render: (args: ButtonMolTypes) => {
    const [count, setCount] = useState(0)
    const handleClick = () => {
      onClick(count, setCount)
    }
    return (
      <IconButtonMol {...args} icon={<FiLogIn />} onClick={handleClick}>
        {args.children}
      </IconButtonMol>
    )
  },
  args: {
    children: "iconButtonMol",
  },
}
