# Adroit UI - Tailwind Components Library

**Adroit UI** is a comprehensive Tailwind CSS component library designed to help you define and implement your own custom **design system** seamlessly. With **over 100 finely crafted and editable components**, Adroit UI eliminates the hassle of managing complex Tailwind CSS code, allowing you to focus on building stunning and consistent user interfaces.

Github: [Adroit UI](https://github.com/kartikbindra/adroit-ui)

NPM Package: [adroit-ui](https://www.npmjs.com/package/adroit-ui)

## Features

- **Custom Design System**: Easily define and integrate your unique design system across your projects.
- **Extensive Component Library**: Access a wide variety of over 100 meticulously designed components.
- **Editable Components**: Tailor components to meet your specific needs without dealing with messy Tailwind code.
- **Seamless Integration**: Integrate Adroit UI effortlessly into your existing projects for a cohesive design experience.

## Getting Started

To get started with Adroit UI, follow these steps:

1. **Install Adroit UI**: Add Adroit UI to your project via npm or yarn.
    ```bash
    npm install adroit-ui
    ```
    or
    ```bash
    yarn add adroit-ui
    ```

2. **Configure Tailwind CSS**: Ensure your Tailwind CSS configuration is set up to work with Adroit UI.

* Replace all the content inside `tailwind.config.js` file with the content below:
```javascript 
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/adroit-ui/dist/adroit-ui.js"
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        neutral: {
          1: '#fcfcfc',
          2: '#f8f8f8',
          3: '#f3f3f3',
          4: '#ededed',
          5: '#e8e8e8',
          6: '#e2e2e2',
          7: '#dbdbdb',
          8: '#c7c7c7',
          9: '#8f8f8f',
          10: '#858585',
          11: '#6f6f6f',
          12: '#202020',
        },
        primary: {
          1: '#fbfdff',
          2: '#f5faff',
          3: '#eaf6ff',
          4: '#e1f0ff',
          5: '#cee7fe',
          6: '#b7d9f8',
          7: '#96c7f2',
          8: '#5eb0ef',
          9: '#0091ff',
          10: '#0081f1',
          11: '#006adc',
          12: '#00254d',
        },
        overlay: {
          1: 'rgba(0, 0, 0, 0.01)',
          2: 'rgba(0, 0, 0, 0.03)',
          3: 'rgba(0, 0, 0, 0.05)',
          4: 'rgba(0, 0, 0, 0.07)',
          5: 'rgba(0, 0, 0, 0.09)',
          6: 'rgba(0, 0, 0, 0.11)',
          7: 'rgba(0, 0, 0, 0.14)',
          8: 'rgba(0, 0, 0, 0.22)',
          9: 'rgba(0, 0, 0, 0.44)',
          10: 'rgba(0, 0, 0, 0.48)',
          11: 'rgba(0, 0, 0, 0.56)',
          12: 'rgba(0, 0, 0, 0.91)',
        },
        error: {
          1: '#fffcfc',
          2: '#fff8f8',
          3: '#ffefef',
          4: '#ffe5e5',
          5: '#fdd8d8',
          6: '#f9c6c6',
          7: '#f3aeaf',
          8: '#eb9091',
          9: '#e5484d',
          10: '#dc3d43',
          11: '#cd2b31',
          12: '#381316',
        }
      },
      borderRadius: {
        none: '0',
        xs: '4px',
        sm: '8px',
        DEFAULT: '0.25rem',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        full: '9999px',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px',
        '7xl': '72px',
      },
      fontWeight:{
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      blur: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '40px',
      },
    }
  },
  plugins: [],
};


```

3. **Import Components**: Import the components you need and start using them in your project.
    ```javascript
    import { Button } from 'adroit-ui';
    ```

4. **Customize Your Design System**: Leverage the flexibility of Adroit UI to customize and extend your design system inside `tailwind.config.js` file.

## Button Component
Adroit UI provides different variants of buttons that can be easily integrated in your projects.

### Props -
* ### Variants:
    Use `variant` prop in the button component. Below are the values of `variant` prop:

    `solid-primary`
    `solid-secondary`
    `solid-destructive`
    `neutral-primary`
    `neutral-secondary`
    `outline-primary`
    `outline-neutral`
    `outline-destructive`

* ### Sizes:
    Use `size` prop in the button component. Below are the values of `size` prop:

    `xs`
    `sm`
    `md`
    `lg`
    `xl`
    `2xl`

* ### Border Radius:
    Use `radius` prop in the button component. Below are the values of `radius` prop:

    `xs`
    `sm`
    `md`
    `lg`
    `xl`
    `2xl`
    `full`

* ### Label Text:
    Use `label` prop in the button component. Enter the text you want to show inside the button in `label` prop.

* ### State:
    Use `state` prop in the button component. Below are the values of `state` prop:

    `default`
    `disabled`

