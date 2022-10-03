import { IconArrowUp } from '../../index';
import Typography from '../Typography';
import { Accordion } from '.';

export default {
  component: Accordion,
  title: 'Displays/Accordion',
};

export const Default = (args: any) => (
  <Accordion {...args}>
    <Accordion.Item label="Single Item">
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </Typography>
    </Accordion.Item>
  </Accordion>
);

Default.args = {};

const Multiple = (args: any) => (
  <Accordion {...args}>
    <Accordion.Item id={1} label="1st Item">
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </Typography>
    </Accordion.Item>
    <Accordion.Item id={2} label="2nd Item">
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </Typography>
    </Accordion.Item>
  </Accordion>
);

export const withMultiple = Multiple.bind({});
// @ts-ignore
withMultiple.args = {};

export const withBorder = Multiple.bind({});
// @ts-ignore
withBorder.args = {
  bordered: true,
};

export const withDefaultActive = Multiple.bind({});
// @ts-ignore
withDefaultActive.args = {
  defaultActiveId: [1],
};

export const withIconLeft = Multiple.bind({});
// @ts-ignore
withIconLeft.args = {
  iconPosition: 'left',
};

export const withCustomIcon = Multiple.bind({});
// @ts-ignore
withCustomIcon.args = {
  icon: <IconArrowUp />,
};
