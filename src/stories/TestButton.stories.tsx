import type { Meta, StoryObj } from "@storybook/react"

import { TestButton } from "./TestButton"

const meta: Meta<typeof TestButton> = {
  title: "Example/Button",
  component: TestButton,
  tags: ["autodocs"],
  argTypes: {
    primary: {},
    backgroundColor: {},
    size: {},
    label: {},
    onClick: {},
  },
}

export default meta
type Story = StoryObj<typeof TestButton>
export const Primary: Story = {
  render: args => <TestButton {...args} />,
  args: { primary: true, label: "primary" },
}
