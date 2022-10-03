import { action } from '@storybook/addon-actions';
import { useState } from 'react';

import { Badge } from '../Badge';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
import { Space } from '../Space';
import Typography from '../Typography';
import { IconAlertCircle, IconCheck, IconTrash } from './../../index';
import { Modal } from './';

export default {
  component: Modal,
  title: 'Overlays/Modal',
};

export const Default = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary">
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code>{'{children}'}</Typography.Text>
    </Typography.Text>
  </Modal>
);

export const withIcon = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary">
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code>{'{children}'}</Typography.Text>
    </Typography.Text>
  </Modal>
);

export const withVerticalLayout = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary">
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code>{'{children}'}</Typography.Text>
    </Typography.Text>
  </Modal>
);

export const withCloseButton = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary">
      This Modal has a close button on the top right
      <Typography.Text code>{'{children}'}</Typography.Text>
    </Typography.Text>
  </Modal>
);

export const rightAlignedFooter = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary">
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code>{'{children}'}</Typography.Text>
    </Typography.Text>
  </Modal>
);

export const hideFooter = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary">
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code>{'{children}'}</Typography.Text>
    </Typography.Text>
  </Modal>
);

export const withFooterBackground = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary">
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code>{'{children}'}</Typography.Text>
    </Typography.Text>
  </Modal>
);

export const customFooter = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary">
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code>{'{children}'}</Typography.Text>
    </Typography.Text>
  </Modal>
);

export const customFooterVertical = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary">
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code>{'{children}'}</Typography.Text>
    </Typography.Text>
  </Modal>
);

export const LongModal = () => (
  <div>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <Modal visible={true}>
      <Typography.Text type="secondary">
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <Typography.Text code>{'{children}'}</Typography.Text>
      </Typography.Text>
    </Modal>
  </div>
);

export const customFooterOneButton = (args: any) => <Modal {...args} />;

export const modalWithDropdowns = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible(!visible)}>Open</Button>
      <Modal
        hideFooter
        onCancel={() => setVisible(!visible)}
        visible={visible}
        // className="pointer-events-auto"
      >
        <Dropdown
          // className="pointer-events-auto"
          overlay={
            <>
              <Dropdown.Item onClick={() => console.log('item 1 clicked')}>
                Item 1
              </Dropdown.Item>
              <Dropdown.Item onClick={() => console.log('item 2 clicked')}>
                Item 2
              </Dropdown.Item>
            </>
          }
        >
          <Button as="span">Trigger dropdown</Button>
        </Dropdown>
      </Modal>
    </>
  );
};

Default.args = {
  description: 'And i am the description',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  visible: true,
};

withFooterBackground.args = {
  description: 'And i am the description',
  footerBackground: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  visible: true,
};

const icon = <IconAlertCircle background="brand" size="xlarge" />;

withIcon.args = {
  description: 'And i am the description',
  icon: icon,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  showIcon: true,
  title: 'This is the title of the modal',
  visible: true,
};

withCloseButton.args = {
  closable: true,
  description: 'And i am the description',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This Modal has a close button on the top right',
  visible: true,
};

withVerticalLayout.args = {
  description: 'And i am the description',
  icon: icon,
  layout: 'vertical',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  size: 'small',
  title: 'This is the title of the modal',
  visible: true,
};

rightAlignedFooter.args = {
  alignFooter: 'right',
  description: 'And i am the description',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  visible: true,
};

hideFooter.args = {
  description: 'And i am the description',
  hideFooter: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  visible: true,
};

customFooter.args = {
  customFooter: [
    <Space>
      <div>
        <Badge color="red" dot size="small">
          Proceed with caution
        </Badge>
      </div>
      <Button type="secondary">Cancel</Button>
      <Button danger>Delete</Button>
    </Space>,
  ],
  description: 'And i am the description',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  visible: true,
};

customFooterVertical.args = {
  customFooter: [
    <Space style={{ width: '100%' }}>
      <Button block size="medium" type="secondary">
        Cancel
      </Button>
      <Button block danger icon={<IconTrash />} size="medium">
        Delete
      </Button>
    </Space>,
  ],
  description: 'And i am the description',
  layout: 'vertical',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  size: 'small',
  title: 'This is the title of the modal',
  visible: true,
};

customFooterOneButton.args = {
  customFooter: [
    <Space style={{ width: '100%' }}>
      <Button block icon={<IconCheck />} size="medium">
        Confirm
      </Button>
    </Space>,
  ],
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
  icon: <IconCheck background="brand" size="xxxlarge" />,
  layout: 'vertical',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  size: 'small',
  title: 'Payment succesful',
  visible: true,
};
