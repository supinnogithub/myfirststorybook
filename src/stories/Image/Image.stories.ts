import type { Meta, StoryObj } from '@storybook/angular';
import Image from './image.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<Image> = {
  title: 'Image',
  component: Image,
  tags: ['autodocs'],
  render: (args: Image) => ({
    props: {
      src: null,
      ...args,
    },
  }),
  argTypes: {
    src: {
      control: 'image',
    },
  },
};

export default meta;
type Story = StoryObj<Image>;

const imageFile = "/image.jpg";

const image = {
  src: imageFile,
  alt: 'my image',
};


export const WithImage: Story = {
  args: {
    src: image.src
  },
};
