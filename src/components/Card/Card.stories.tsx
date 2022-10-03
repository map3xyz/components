import Typography from '../Typography';
import { Card } from './';

export default {
  component: Card,
  title: 'Displays/Card',
};

export const Default = (args: any) => (
  <Card {...args}>
    <Typography.Title level={5}>Card content</Typography.Title>
    <Typography.Title level={5}>Card content</Typography.Title>
    <Typography.Title level={5}>Card content</Typography.Title>
  </Card>
);

export const withCover = (args: any) => (
  <Card {...args}>
    <Typography.Text type="secondary">Sub title here</Typography.Text>
    <Typography.Title level={3}>To Do List with Vue.JS</Typography.Title>
  </Card>
);

export const withMeta = (args: any) => (
  <Card {...args}>
    <Card.Meta
      description={'To Do List with Vue.JS'}
      title={'To Do List with Vue.JS'}
    />
  </Card>
);

export const withHover = (args: any) => (
  <Card {...args}>
    <Card.Meta
      description={'To Do List with Vue.JS'}
      title={'To Do List with Vue.JS'}
    />
  </Card>
);

Default.args = {
  title: 'I am a title',
  titleExtra: <Typography.Link>Learn more</Typography.Link>,
};

withCover.args = {
  cover: (
    <img
      alt={'title'}
      className="h-64 w-full object-cover"
      src={'https://supabase.io/new/images/case-study-monitoro.jpg'}
    />
  ),
};

withMeta.args = {
  title: 'title is here',
};

withHover.args = {
  hoverable: true,
  title: 'This card can hover',
};
