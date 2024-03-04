import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { TextLabel, TextLabelTypes } from "@repo/_components"

const meta = {
  title: "Component/Atoms/Forms/TextLabel",
  component: TextLabel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextLabel>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    label: "Label",
  },
  render: (args: TextLabelTypes) => {
    return <TextLabel {...args} />
  },
}
