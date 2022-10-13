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

### Install
yarn add @map3xyz/components

```
// src/_app.tsx

import '@map3xyz/components/dist/index.css';
```

### Dev
yarn
yarn storybook

### Deploy
Changes to master will trigger an action to deploy the repo to: https://map3xyz.github.io/components

### Releasing
```
npm version patch
npm deploy
```
