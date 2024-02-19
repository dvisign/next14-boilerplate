import React, { useState, useCallback } from "react"
import { action } from "@storybook/addon-actions"
import type { Meta, StoryObj } from "@storybook/react"
import TextInput from "@/atoms/forms/TextInput"
import { TextInputTypes } from "@/atoms/forms/TextInput/TextInput.types"

const meta = {
  title: "Component/Atoms/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextInput>

export default meta
type Story = StoryObj<typeof meta>

function onChange(val, setVal) {
  setVal(val)
  action("onChange value")(val)
}
function Template(args: TextInputTypes) {
  const [value, setValue] = useState("")
  const handleChange = useCallback(
    e => {
      onChange(e.target.value, setValue)
    },
    [value],
  )
  return <TextInput {...args} value={value} onChange={handleChange} />
}
export const Default: Story = {
  render: (args: TextInputTypes) => Template(args),
  args: {
    value: "",
    borderSize: 1,
    borderStyle: "solid",
    borderColor: "#ccc",
    outLineColor: "#ff0000",
    display: "block",
    width: 100,
    height: 20,
    onChange: () => null,
    disabledColor: "rgba(204, 204, 204, 0.3)",
  },
}
