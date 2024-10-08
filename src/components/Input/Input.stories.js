import { fn } from '@storybook/test';
import { Input } from './Input';
// import { archive } from '../Icons/Icons';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Input',
  component: Input,
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
export const Email = {
  args: {
    id: 'input',
    size: 'md',
    label: 'Label',
    helpText: 'This is a help text',
    state: 'default',
    required: true,
    placeholder: 'you@email.com',
    type: 'email'
  },
};
export const Text = {
  args: {
    id: 'input',
    size: 'md',
    label: 'Label',
    helpText: 'This is a help text',
    state: 'default',
    required: true,
    placeholder: 'enter text',
    type: 'text'
  },
};
export const Number = {
  args: {
    id: 'input',
    size: 'md',
    label: 'Label',
    helpText: 'This is a help text',
    state: 'default',
    required: true,
    placeholder: '1',
    type: 'number'
  },
};
export const Tel = {
  args: {
    id: 'input',
    size: 'md',
    label: 'Label',
    helpText: 'This is a help text',
    state: 'default',
    required: true,
    placeholder: '+91 9999999999',
    type: 'tel'
  },
};
export const Url = {
  args: {
    id: 'input',
    size: 'md',
    label: 'Label',
    helpText: 'This is a help text',
    state: 'default',
    required: true,
    placeholder: 'www.example.com',
    type: 'url'
  },
};