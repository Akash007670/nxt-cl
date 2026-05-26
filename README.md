# NXT-CL: React Component Library

A modern, accessible, and fully-featured React component library built with TypeScript, Storybook, and CSS. Perfect for building consistent user interfaces with pre-built, production-ready components.

[![npm version](https://img.shields.io/npm/v/nxt-cl?style=flat-square)](https://www.npmjs.com/package/nxt-cl)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](./LICENSE)

> Release note: version `1.4.4` includes new UI components, Storybook improvements, and enhanced npm publish readiness.

## 🚀 Features

- ✅ **22 Production-Ready Components** - Carefully crafted UI components
- 📦 **TypeScript Support** - Full type safety and IntelliSense
- 🎨 **Customizable Styling** - CSS-based styling with easy customization
- ♿ **Accessible** - Built with accessibility in mind
- 📱 **Responsive** - Works seamlessly across all screen sizes
- 🔄 **Forwardable Refs** - Access underlying DOM elements when needed
- 🎭 **Storybook Integration** - Interactive component documentation
- 🧪 **Jest Testing** - Comprehensive test coverage

## 📥 Installation

Install the latest version from npm:

```bash
npm install nxt-cl@latest
```

Or with yarn:

```bash
yarn add nxt-cl@latest
```

Or with pnpm:

```bash
pnpm add nxt-cl@latest
```

## 🎯 Quick Start

```tsx
import React from "react";
import { Button, Card, Badge, Toggle } from "nxt-cl";

export default function App() {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <Card variant="elevated" padding="lg">
      <h2>Welcome to NXT-CL</h2>
      <p>A modern component library for React</p>

      <div style={{ marginTop: "16px" }}>
        <Button
          btnText="Click me"
          variant="primary"
          onClick={() => console.log("Clicked!")}
        />
        <Badge variant="success" style={{ marginLeft: "12px" }}>
          Production Ready
        </Badge>
      </div>

      <div style={{ marginTop: "16px" }}>
        <Toggle
          label="Enable notifications"
          checked={enabled}
          onChange={(e) => setEnabled(e.target.checked)}
        />
      </div>
    </Card>
  );
}
```

## 📚 Components

### Form Components

#### Button

Interactive button component with multiple variants and sizes.

```tsx
import { Button } from "nxt-cl";

<Button
  btnText="Click me"
  variant="primary"
  size="md"
  rounded="md"
  loading={false}
  startIcon={<Icon />}
/>;
```

**Props:**

- `btnText`: Button label (required)
- `variant`: `'primary'` | `'secondary'` | `'ghost'` | `'success'` | `'danger'` | `'info'` | `'outlined'`
- `size`: `'sm'` | `'md'` | `'lg'` | `'xl'`
- `rounded`: `'none'` | `'sm'` | `'md'` | `'lg'` | `'xl'`
- `loading`: Show loading spinner
- `startIcon`/`endIcon`: Optional icons
- `disabled`: Disable button

---

#### Input

Standard text input component with validation support.

```tsx
import { Input } from "nxt-cl";

<Input
  type="text"
  placeholder="Enter text..."
  variant="default"
  endIcon={<IconComponent />}
/>;
```

**Props:**

- `type`: HTML input type
- `variant`: `'default'` | `'danger'`
- `endIcon`: Optional icon on the right
- `disabled`: Disable input
- All standard HTMLInputElement attributes

---

#### PasswordInput

Secure password input with show/hide toggle.

```tsx
import { PasswordInput } from "nxt-cl";

<PasswordInput placeholder="Enter password" variant="default" />;
```

---

#### FloatingInput

Elegant input with animated floating label.

```tsx
import { FloatingInput } from "nxt-cl";

<FloatingInput type="email" label="Email" variant="primary" />;
```

---

#### PasswordFloatingInput

Password input with floating label and visibility toggle.

```tsx
import { PasswordFloatingInput } from "nxt-cl";

<PasswordFloatingInput label="Password" />;
```

---

#### Checkbox

Custom styled checkbox with label and error state.

```tsx
import { Checkbox } from "nxt-cl";

<Checkbox
  label="I agree to terms"
  size="md"
  error={validated && !agreed ? "Required" : undefined}
/>;
```

**Props:**

- `label`: Checkbox label
- `size`: `'sm'` | `'md'` | `'lg'`
- `error`: Error message to display
- All standard HTMLInputElement attributes

---

#### Toggle

Animated switch/toggle component for boolean values.

```tsx
import { Toggle } from "nxt-cl";

<Toggle
  label="Dark mode"
  size="md"
  onChange={(e) => setDarkMode(e.target.checked)}
/>;
```

**Props:**

- `label`: Toggle label
- `size`: `'sm'` | `'md'` | `'lg'`
- All standard HTMLInputElement attributes

---

#### Dropdown

Searchable dropdown with support for object and string options.

```tsx
import { Dropdown } from "nxt-cl";

const options = [
  { id: 1, name: "Option 1", value: "opt1" },
  { id: 2, name: "Option 2", value: "opt2" },
];

<Dropdown
  options={options}
  inputType="floating"
  label="Select option"
  onSelect={(option) => console.log(option)}
/>;
```

**Props:**

- `options`: Array of options (string[] or Option[])
- `onSelect`: Callback when option is selected
- `inputType`: `'floating'` | `'standard'`
- `label`: Dropdown label
- `loading`: Show loading state
- `disabled`: Disable dropdown
- `hasError`: Show error state

---

### Content Components

#### Card

Flexible container component for grouping content.

```tsx
import { Card } from "nxt-cl";

<Card variant="elevated" padding="lg" hoverable={true}>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>;
```

**Props:**

- `variant`: `'elevated'` | `'outlined'` | `'filled'`
- `padding`: `'sm'` | `'md'` | `'lg'`
- `hoverable`: Enable hover effect

---

#### Alert

Notification component for displaying messages.

```tsx
import { Alert } from "nxt-cl";

const [show, setShow] = React.useState(true);

{
  show && (
    <Alert
      variant="success"
      title="Success!"
      closeButton
      onClose={() => setShow(false)}
    >
      Your changes have been saved.
    </Alert>
  );
}
```

**Props:**

- `variant`: `'success'` | `'warning'` | `'danger'` | `'info'`
- `title`: Optional title
- `closeButton`: Show close button
- `onClose`: Close button callback

---

#### Badge

Compact label component for status indication.

```tsx
import { Badge } from "nxt-cl";

<Badge variant="primary" size="md" shape="pill">
  New
</Badge>;
```

**Props:**

- `variant`: `'primary'` | `'success'` | `'warning'` | `'danger'` | `'info'` | `'secondary'`
- `size`: `'sm'` | `'md'` | `'lg'`
- `shape`: `'rounded'` | `'pill'`

---

#### Rating

Interactive star rating component.

```tsx
import { Rating } from "nxt-cl";

const [rating, setRating] = React.useState(0);

<Rating
  value={rating}
  onChange={setRating}
  maxStars={5}
  size="md"
  interactive={true}
/>;
```

**Props:**

- `value`: Current rating (0-maxStars)
- `onChange`: Callback when rating changes
- `maxStars`: Total number of stars (default: 5)
- `size`: `'sm'` | `'md'` | `'lg'`
- `readonly`: Disable interaction
- `interactive`: Enable hover preview

---

### New Components

A fresh set of reusable UI components has been added to the library:

- `Avatar` — User avatar with image fallback and initials.
- `Breadcrumb` — Navigation breadcrumbs for multi-step workflows.
- `Modal` — Overlay dialog with title, body, and footer.
- `Tabs` — Tabbed content panels with active state.
- `Tooltip` — Hoverable helper text layer.
- `ProgressBar` — Linear progress indicator.
- `Pagination` — Page navigation buttons.
- `Snackbar` — Temporary toast notifications.
- `Tag` — Compact label badge with optional remove button.
- `RadioGroup` — Grouped radio buttons with row/column layout.

These components are exported from the library and ready to use in your React projects.

---

## 🎨 Customization

### Override Component Styles

Each component uses CSS classes. You can override styles in your stylesheet:

```css
/* Override Button styles */
.button-primary {
  background-color: #your-color;
  border-radius: 8px;
}

/* Override Card styles */
.card {
  padding: 20px;
  box-shadow: your-shadow;
}
```

### Using with CSS Modules

```tsx
import { Button } from "nxt-cl";
import styles from "./MyComponent.module.css";

export function MyComponent() {
  return <Button btnText="Styled Button" className={styles.customButton} />;
}
```

```css
/* MyComponent.module.css */
.customButton {
  background: linear-gradient(...);
  font-weight: 700;
}
```

## 🔌 TypeScript Support

Full TypeScript support with type definitions included:

```tsx
import { Button, ButtonProps, Card, CardProps } from "nxt-cl";

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## 📖 Storybook Documentation

View interactive documentation for all components:

```bash
npm run storybook
```

This opens Storybook at `http://localhost:6006` with live component previews, prop documentation, and interactive examples.

## 🧪 Testing

Run tests with Jest:

```bash
npm test
```

## 🏗️ Building

Build the library for production:

```bash
npm run rollup
```

Outputs to:

- `dist/cjs/index.js` - CommonJS
- `dist/esm/index.js` - ES Modules
- `dist/index.d.ts` - TypeScript definitions
- `dist/index.css` - Bundled styles

## 📦 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📋 Component Checklist

- ✅ Button
- ✅ Input
- ✅ PasswordInput
- ✅ FloatingInput
- ✅ PasswordFloatingInput
- ✅ Dropdown
- ✅ Card
- ✅ Badge
- ✅ Checkbox
- ✅ Toggle
- ✅ Alert
- ✅ Rating

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Development Setup

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Run tests
npm test

# Build library
npm run rollup
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 👨‍💻 Author

**Akash Kumar**

- GitHub: [@Akash007670](https://github.com/Akash007670)
- Repository: [nxt-cl](https://github.com/Akash007670/nxt-cl)

## 🙏 Acknowledgments

Built with:

- [React 18](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Storybook](https://storybook.js.org)
- [Jest](https://jestjs.io)
- [Rollup](https://rollupjs.org)
- [React Feather](https://feathericons.com)

## 📞 Support

For support, open an issue on [GitHub Issues](https://github.com/Akash007670/nxt-cl/issues).

---

**Made with ❤️ by Akash Kumar**
