import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import TextLabel from "@/atoms/forms/TextLabel"
import { TextLabelTypes } from "@/atoms/forms/TextLabel/TextLabel.types"

const meta = {
  title: "Component/Atoms/TextLabel",
  component: TextLabel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextLabel>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  render: (args: TextLabelTypes) => {
    return <TextLabel {...args} />
  },
  args: {
    label: "Label",
  },
}
