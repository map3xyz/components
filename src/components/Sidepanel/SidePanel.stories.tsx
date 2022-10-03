import { action } from '@storybook/addon-actions';
import { useState } from 'react';

import { Button, Space } from '../../index';
import Typography from '../Typography';
import { SidePanel } from './index';

export default {
  component: SidePanel,
  title: 'Overlays/SidePanel',
} as any;

export const Default = (args: any) => (
  <>
    <SidePanel {...args}>
      <Typography.Text type="secondary">
        SidePanel content is inserted here, if you need to insert anything into
        the SidePanel you can do so via{' '}
        <Typography.Text code>{'{children}'}</Typography.Text>
      </Typography.Text>
    </SidePanel>
  </>
);

export const withWideLayout = (args: any) => (
  <>
    <SidePanel {...args}>
      <Typography.Text type="secondary">
        SidePanel content is inserted here, if you need to insert anything into
        the SidePanel you can do so via{' '}
        <Typography.Text code>{'{children}'}</Typography.Text>
      </Typography.Text>
    </SidePanel>
  </>
);

export const leftAlignedFooter = (args: any) => (
  <>
    <SidePanel {...args}>
      <Typography.Text type="secondary">
        SidePanel content is inserted here, if you need to insert anything into
        the SidePanel you can do so via{' '}
        <Typography.Text code>{'{children}'}</Typography.Text>
      </Typography.Text>
    </SidePanel>
  </>
);

export const leftAligned = (args: any) => (
  <>
    <SidePanel {...args}>
      <Typography.Text type="secondary">
        SidePanel content is inserted here, if you need to insert anything into
        the SidePanel you can do so via{' '}
        <Typography.Text code>{'{children}'}</Typography.Text>
      </Typography.Text>
    </SidePanel>
  </>
);

export const hideFooter = (args: any) => (
  <>
    <SidePanel {...args}>
      <Typography.Text type="secondary">
        SidePanel content is inserted here, if you need to insert anything into
        the SidePanel you can do so via{' '}
        <Typography.Text code>{'{children}'}</Typography.Text>
      </Typography.Text>
    </SidePanel>
  </>
);

export const customFooter = (args: any) => (
  <>
    <SidePanel {...args}>
      <Typography.Text type="secondary">
        SidePanel content is inserted here, if you need to insert anything into
        the SidePanel you can do so via{' '}
        <Typography.Text code>{'{children}'}</Typography.Text>
      </Typography.Text>
    </SidePanel>
  </>
);

export const triggerElement = (args: any) => (
  <>
    <SidePanel {...args}>
      <Typography.Text type="secondary">
        This was opened with a trigger element
      </Typography.Text>
    </SidePanel>
  </>
);

// @ts-ignore
export const nestedSidepanels = (args: any) => {
  const [panel1Visible, setPanel1Visible] = useState(false);
  const [panel2Visible, setPanel2Visible] = useState(false);

  return (
    <>
      <Button onClick={() => setPanel1Visible(true)} type="secondary">
        Open panel 1
      </Button>
      <SidePanel visible={panel1Visible}>
        <Typography.Text type="secondary">
          This was opened with a trigger element
        </Typography.Text>
        <Button onClick={() => setPanel2Visible(true)} type="secondary">
          Open panel 2
        </Button>
        <Button onClick={() => setPanel1Visible(false)} type="secondary">
          Close panel 1
        </Button>
        <SidePanel visible={panel2Visible}>
          <Button onClick={() => setPanel2Visible(false)} type="secondary">
            close panel 2
          </Button>
        </SidePanel>
      </SidePanel>
    </>
  );
};

Default.args = {
  description: 'And i am the description',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the SidePanel',
  visible: true,
};

withWideLayout.args = {
  description: 'And i am the description',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the SidePanel',
  visible: true,
  wide: true,
};

leftAlignedFooter.args = {
  alignFooter: 'left',
  description: 'And i am the description',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the SidePanel',
  visible: true,
};

leftAligned.args = {
  align: 'left',
  description: 'And i am the description',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the SidePanel',
  visible: true,
};

hideFooter.args = {
  description: 'And i am the description',
  hideFooter: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the SidePanel',
  visible: true,
};

customFooter.args = {
  customFooter: [
    <Space>
      <Button type="secondary">Cancel</Button>
      <Button danger>Delete</Button>
    </Space>,
  ],
  description: 'And i am the description',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the SidePanel',
  visible: true,
};

triggerElement.args = {
  description: 'And i am the description',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the SidePanel',
  triggerElement: <Button as="span">Open</Button>,
  visible: true,
};
