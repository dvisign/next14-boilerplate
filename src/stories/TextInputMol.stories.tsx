import React, { useState, useCallback } from "react"
import { action } from "@storybook/addon-actions"
import type { Meta, StoryObj } from "@storybook/react"
import { FaUser } from "react-icons/fa"
import TextInputMol from "@/molecules/forms/TextInputMol"
import { TextInputMolTypes } from "@/molecules/forms/TextInputMol/TextInputMol.types"

const meta = {
  title: "Component/Molecules/TextInputMol",
  component: TextInputMol,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextInputMol>

export default meta
type Story = StoryObj<typeof meta>
function onChange(val, setVal) {
  setVal(val)
  action("onChange value")(val)
}
function Template(args: TextInputMolTypes) {
  const [value, setValue] = useState("")
  const handleChange = useCallback(
    e => {
      onChange(e.target.value, setValue)
    },
    [value],
  )
  return <TextInputMol {...args} value={value} onChange={handleChange} />
}
export const Default: Story = {
  render: (args: TextInputMolTypes) => Template(args),
  args: {
    id: "test",
    className: "",
    disabled: false,
    disabledColor: "rgba(204, 204, 204, 0.3)",
    type: "text",
    label: "label",
    iconComponent: <FaUser />,
    onChange: () => null,
    value: "",
  },
}
