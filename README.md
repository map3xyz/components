# Components

✨ Reusable Component Library based on @supabase/ui and @radix-ui

⚠️ Warning! @supabase/ui is in Alpha and does not yet support theming.

Map3 Components

- Input
- Select
- Textarea
- ReadOnlyText
- Toggle

Extended Components

- Buttons

@supabase/ui Components

- Accordion
- Alert
- Badge
- Divider
- Dropdown
- Modal
- Space

@supabase/ui TODO (add as needed)

- Listbox
- Loading
- Menu
- Popover
- Tabs
- Toast
- Upload

@supabase/ui Archive (Deprecated/Don't Use)

- Typography (use tailwind instead)
- Icons (use font-awesome instead)

### Getting Started

yarn add @map3xyz/components

```javascript
import { Button } from '@map3xyz/components';
```

#### Adding Styles

Option 1: Using TailwindCSS

```javascript
// tailwind.config.js

module.exports = {
  content: [
    ...
    './node_modules/@map3xyz/components/dist/esm/components/**/*.js'
  ],
  ...
};
```

Option 2: Scoping Map3 Components

```javascript
// index.tsx
import '@map3xyz/components/dist/index.css';

export const MyApp = ({children}) => {
    <div className="map3">{children}</div>
}
```

```css
/* index.css */

.map3 {
  @tailwind components;
  @tailwind utilities;
  @tailwind base;
}
```

### Dev

yarn
yarn storybook

### Deploy

Changes to master will trigger an action to deploy the repo to: https://map3xyz.github.io/components

### TailwindCSS

If TailwindCSS is not already a dependency of your application, it is required to wrap you map3xyz/components in a `.map3` class.
