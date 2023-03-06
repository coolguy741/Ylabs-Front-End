import { ComponentStory, ComponentMeta } from '@storybook/react';

import ThreeDLogo from './ThreeDLogo';

export default {
  title: 'ThreeDLogo',
  component: ThreeDLogo,
} as ComponentMeta<typeof ThreeDLogo>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ThreeDLogo> = (args) => <ThreeDLogo {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  bgColor: true,
};