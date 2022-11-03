import { CryptoAddress } from '.';

export default {
  component: CryptoAddress,
  title: 'Utilities/CryptoAddress',
};

export const Default = (args: any) => (
  <CryptoAddress {...args}>
    0xd8da6bf26964af9d7eed9e03e53415d37aa96045
  </CryptoAddress>
);

export const withRightHint = (args: any) => (
  <CryptoAddress {...args}>
    0xd8da6bf26964af9d7eed9e03e53415d37aa96045
  </CryptoAddress>
);

Default.args = {};

withRightHint.args = {
  hintPosition: 'right',
};
