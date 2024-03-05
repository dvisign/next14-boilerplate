import React, { useCallback, useEffect, ChangeEvent } from "react"
import { action } from "@storybook/addon-actions"
import { useArgs } from "@storybook/preview-api"
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
    const [, updateArgs] = useArgs()
    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        updateArgs({ ...args, value: e.target.value })
      },
      [updateArgs, args],
    )
    useEffect(() => {
      action("onChange value")(args.value)
    }, [args.value])
    return <TextInput {...args} onChange={handleChange} />
  },
}
