import React, { useCallback, ChangeEvent } from "react"
import { action } from "@storybook/addon-actions"
import { useArgs } from "@storybook/preview-api"
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
export const Default: Story = {
  args: {
    disabled: false,
    disabledColor: "rgba(204, 204, 204, 0.3)",
    type: "text",
    label: "label",
    iconComponent: <FaUser />,
    onChange: (e: ChangeEvent<HTMLInputElement>) => action("onChange value")(e.target.value),
    value: "",
  },
  render: function Template(args: TextInputMolTypes) {
    const [defaultArgs, setValue] = useArgs()
    const handleChange = useCallback(
      e => {
        setValue({ ...defaultArgs, value: e.target.value })
        defaultArgs.onChange(e)
      },
      [defaultArgs],
    )
    return <TextInputMol {...args} value={defaultArgs.value} onChange={handleChange} />
  },
}
