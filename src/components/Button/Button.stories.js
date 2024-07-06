import { fn } from '@storybook/test';
import { Button } from './Button';
// import { archive } from '../Icons/Icons';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};

// const downloadIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
// <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
// </svg>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SolidPrimary = {
  args: {
    variant: 'solid-primary',
    size: 'md',
    label: 'Solid Button',
    radius: 'xs',
    state: 'default',
    onClick: () => {
      alert('Hello from adroitUI!');
    },
  },
};

export const SolidSecondary = {
  args: {
    variant: 'solid-secondary',
    size: 'md',
    label: 'Solid Inverted Button',
    radius: 'xs',
    state: 'default',
    onClick: () => {
      alert('Hello from adroitUI!');
    },
  },
};

export const NeutralPrimary = {
  args: {
    variant: 'neutral-primary',
    size: 'md',
    label: 'Neutral Button',
    radius: 'xs',
    state: 'default',
    onClick: () => {
      alert('Hello from adroitUI!');
    },
  },
};

export const NeutralSecondary = {
  args: {
    variant: 'neutral-secondary',
    size: 'md',
    label: 'Neutral Button',
    radius: 'xs',
    state: 'default',
    onClick: () => {
      alert('Hello from adroitUI!');
    },
  },
};

export const OutlinePrimary = {
  args: {
    variant: 'outline-primary',
    size: 'md',
    label: 'Solid Button',
    radius: 'xs',
    state: 'default',
    onClick: () => {
      alert('Hello from adroitUI!');
    },
  },
};

export const OutlineNeutral = {
  args: {
    variant: 'outline-neutral',
    size: 'md',
    label: 'Solid Button',
    radius: 'xs',
    state: 'default',
    onClick: () => {
      alert('Hello from adroitUI!');
    },
  },
};

export const SolidDestructive = {
  args: {
    variant: 'solid-destructive',
    size: 'md',
    label: 'Delete',
    radius: 'xs',
    state: 'default',
    onClick: () => {
      alert('Hello from adroitUI!');
    },
  },
};

export const OutlineDestructive = {
  args: {
    variant: 'outline-destructive',
    size: 'md',
    label: 'Delete',
    radius: 'xs',
    state: 'default',
    onClick: () => {
      alert('Hello from adroitUI!');
    },
  },
};