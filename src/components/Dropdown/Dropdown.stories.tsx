import { useState } from 'react';

import { Button } from '../Button';
import { Divider } from '../Divider';
import Input from '../Inputs/Input';
import Typography from '../Typography';
import {
  IconChevronDown,
  IconLogIn,
  IconLogOut,
  IconSearch,
  IconSettings,
} from './../../index';
import { Dropdown } from './';

export default {
  component: Dropdown,
  title: 'Navigation/Dropdown',
};

export const Default = (args: any) => (
  <div style={{ margin: '0 auto', marginTop: '220px', minHeight: '420px' }}>
    <Dropdown
      {...args}
      overlay={[
        <Dropdown.Misc>
          <div>
            <Typography.Text className="block" small>
              Signed in as{' '}
            </Typography.Text>

            <Typography.Text small strong>
              tom@example.com{' '}
            </Typography.Text>
          </div>
        </Dropdown.Misc>,
        <Divider light />,
        <Dropdown.Label>Group label</Dropdown.Label>,
        <Dropdown.Item onClick={() => console.log('clicked')}>
          Account
        </Dropdown.Item>,
        <Dropdown.Item>Settings</Dropdown.Item>,
        <Divider light />,
        <Dropdown.Item icon={<IconLogIn size="tiny" />}>Log out</Dropdown.Item>,
      ]}
    >
      <Button as="span" iconRight={<IconChevronDown />} type="outline">
        Click for dropdown
      </Button>
    </Dropdown>
  </div>
);

Default.args = {};

export const doNotcloseOverlay = (args: any) => (
  <div style={{ margin: '0 auto', marginTop: '220px', minHeight: '420px' }}>
    <Dropdown
      {...args}
      overlay={[
        <Dropdown.Misc>
          <Typography.Text>Signed in as </Typography.Text>
          <Typography.Text strong>tom@example.com </Typography.Text>
        </Dropdown.Misc>,
        <Divider light />,
        <Dropdown.Item>Account</Dropdown.Item>,
        <Dropdown.Item>Settings</Dropdown.Item>,
        <Dropdown.Item>
          <Button icon={<IconLogOut />}>Log out</Button>
        </Dropdown.Item>,
      ]}
    >
      <Button as="span" iconRight={<IconChevronDown />} type="outline">
        Click for dropdown
      </Button>
    </Dropdown>
  </div>
);

doNotcloseOverlay.args = {};

export const withCustomStyles = (args: any) => (
  <div
    style={{
      margin: '0 auto',
      marginLeft: '400px',
      marginTop: '220px',
      minHeight: '420px',
    }}
  >
    <Dropdown
      overlayStyle={{ minWidth: '500px' }}
      placement="bottomRight"
      {...args}
      overlay={[
        <Dropdown.Item>
          <Typography.Text>Signed in as </Typography.Text>
          <Typography.Text strong>tom@example.com </Typography.Text>
        </Dropdown.Item>,
        <Divider light />,
        <Dropdown.Item>Account</Dropdown.Item>,
        <Dropdown.Item>Settings</Dropdown.Item>,
        <Divider light />,
        <Dropdown.Item>
          <Button icon={<IconLogOut />} type="default">
            Log out
          </Button>
        </Dropdown.Item>,
      ]}
    >
      <Button as="span" iconRight={<IconChevronDown />} type="outline">
        Click for dropdown
      </Button>
    </Dropdown>
  </div>
);

withCustomStyles.args = {};

export const SearchList = (args: any) => (
  <div style={{ margin: '0 auto', marginTop: '220px', minHeight: '420px' }}>
    <Dropdown
      {...args}
      overlay={[
        <Dropdown.Item>
          <Input autoFocus={false} icon={<IconSearch />} />
        </Dropdown.Item>,
        <Dropdown.Item>
          <Typography.Text>Signed in as </Typography.Text>
          <Typography.Text strong>tom@example.com </Typography.Text>
        </Dropdown.Item>,
        <Dropdown.Item>
          <Typography.Text>Signed in as </Typography.Text>
          <Typography.Text strong>tom@example.com </Typography.Text>
        </Dropdown.Item>,
        <Divider light />,
        <Dropdown.Item icon={<IconLogIn />}>
          <Typography.Text>Log out</Typography.Text>
        </Dropdown.Item>,
      ]}
    >
      <Button as="span" iconRight={<IconChevronDown />} type="outline">
        Click for dropdown
      </Button>
    </Dropdown>
  </div>
);

SearchList.args = {};

export const Checkbox = (args: any) => {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ margin: '0 auto', marginTop: '220px', minHeight: '420px' }}>
      <Dropdown
        {...args}
        overlay={[
          <Dropdown.Item icon={<IconSettings size="small" />}>
            Account
          </Dropdown.Item>,
          <Dropdown.Item>Settings</Dropdown.Item>,
          <Divider light />,
          <Dropdown.Checkbox checked={checked} onChange={setChecked}>
            Show subtitles
          </Dropdown.Checkbox>,
        ]}
      >
        <Button as="span" iconRight={<IconChevronDown />} type="outline">
          Click for dropdown
        </Button>
      </Dropdown>
    </div>
  );
};

export const Radio = (args: any) => {
  const [value, setValue] = useState('red');

  return (
    <div style={{ margin: '0 auto', marginTop: '220px', minHeight: '420px' }}>
      <Dropdown
        {...args}
        overlay={[
          <Dropdown.RadioGroup onChange={setValue} value={value}>
            <Dropdown.Radio value={'red'}>Red</Dropdown.Radio>
            <Dropdown.Radio value={'blue'}>Blue</Dropdown.Radio>
            <Dropdown.Radio value={'green'}>Green</Dropdown.Radio>
          </Dropdown.RadioGroup>,
        ]}
      >
        <Button as="span" iconRight={<IconChevronDown />} type="outline">
          Click for dropdown
        </Button>
      </Dropdown>
    </div>
  );
};

export const Nested = (args: any) => {
  const [value, setValue] = useState('red');

  return (
    <div style={{ margin: '0 auto', marginTop: '220px', minHeight: '420px' }}>
      <Dropdown
        {...args}
        overlay={
          <>
            <Dropdown.RadioGroup onChange={setValue} value={value}>
              <Dropdown.Radio value={'red'}>Red</Dropdown.Radio>
              <Dropdown.Radio value={'blue'}>Blue</Dropdown.Radio>
              <Dropdown.Radio value={'green'}>Green</Dropdown.Radio>
            </Dropdown.RadioGroup>

            <Dropdown
              isNested
              overlay={[
                <Dropdown.RadioGroup onChange={setValue} value={value}>
                  <Dropdown.Radio value={'red'}>Red</Dropdown.Radio>
                  <Dropdown.Radio value={'blue'}>Blue</Dropdown.Radio>
                  <Dropdown.Radio value={'green'}>Green</Dropdown.Radio>
                </Dropdown.RadioGroup>,
              ]}
            >
              <Dropdown.TriggerItem>Open sub menu</Dropdown.TriggerItem>
            </Dropdown>
            <Dropdown.Item>hello</Dropdown.Item>
          </>
        }
      >
        <Button as="span" iconRight={<IconChevronDown />} type="outline">
          Click for dropdown
        </Button>
      </Dropdown>
    </div>
  );
};
