import { configure, getStorybookUI } from '@storybook/react-native';

import './rn-addons';

// import stories
configure(() => {
  require('components/atoms/typography/typography.stories');
  require('components/atoms/card/card.stories');
  require('components/atoms/link/link.stories');
  require('components/atoms/checkbox/checkbox.stories');
  require('components/atoms/chip/chip.stories');
  require('components/atoms/radio-button/radio-button.stories');
  require('components/atoms/switch/switch.stories');
  require('components/molecules/button/button.stories');
  require('components/molecules/radio-group/radio-group.stories');
  require('components/molecules/inputs/input-field/input-field.stories');
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

export default StorybookUIRoot;
