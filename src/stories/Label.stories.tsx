import React, { useState } from "react"
import { action } from "@storybook/addon-actions"
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
const Template = (args: TextLabelTypes) => {
  return <TextLabel {...args} label={"test"} />
}
export const Default: Story = {
  render: args => <Template {...args}>Button</Template>,
}
