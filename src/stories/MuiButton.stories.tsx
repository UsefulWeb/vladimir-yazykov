import Button from '@mui/material/Button'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'MUI/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Кнопка',
    variant: 'contained' as const,
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Contained: Story = {}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
}
