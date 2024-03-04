import React, { useState, ChangeEvent } from "react"
import { action } from "@storybook/addon-actions"
import type { Meta, StoryObj } from "@storybook/react"
import { TextInputTypes, TextInput } from "@repo/_components"

const meta = {
  title: "Component/Atoms/Forms/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextInput>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    value: "",
    borderSize: 1,
    borderStyle: "solid",
    borderColor: "#ccc",
    outLineColor: "#ff0000",
    display: "block",
    width: 100,
    height: 20,
    onChange: (e: ChangeEvent<HTMLInputElement>) => action("onChange value")(e.target.value),
    disabledColor: "rgba(204, 204, 204, 0.3)",
  },
  render: function Template(args: TextInputTypes) {
    const [value, setValue] = useState<string>("")
    function handleChange(e) {
      action("onChange value")(e.target.value)
      setValue(e.target.value)
    }
    return <TextInput {...args} value={value} onChange={handleChange} />
  },
}
