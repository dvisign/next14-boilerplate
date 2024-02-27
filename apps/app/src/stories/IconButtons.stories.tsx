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
export const Default: Story = {
  args: {
    children: "iconButtonMol",
  },
  render: function Template(args: ButtonMolTypes) {
    const [count, setCount] = useState<number>(0)
    function onClick() {
      setCount(count + 1)
      action("clicked")(count + 1)
    }
    return (
      <IconButtonMol {...args} icon={<FiLogIn />} onClick={onClick}>
        {args.children}
      </IconButtonMol>
    )
  },
}
