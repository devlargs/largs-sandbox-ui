import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "./Carousel";

const meta: Meta<typeof Carousel> = {
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Primary: Story = {
  args: {
    children: [
      <>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </>,
    ],
  },
};
