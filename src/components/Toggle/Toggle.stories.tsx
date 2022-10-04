import { ComponentMeta, Story } from '@storybook/react';
import { IconMoon, IconSun } from '@supabase/ui';
import { useState } from 'react';

import { Props as ToggleProps, Toggle } from '.';

export default {
  component: Toggle,
  title: 'Data Input/Toggle',
} as ComponentMeta<typeof Toggle>;

const Template: Story<ToggleProps> = (args) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="max-w-sm">
      <Toggle
        {...args}
        active={checked}
        onToggle={() => setChecked(!checked)}
      />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  leftIcon: <IconSun />,
  rightIcon: <IconMoon />,
};
