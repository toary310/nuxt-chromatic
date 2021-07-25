import Logo from './Logo.vue';

export default {
  title: 'Logo',
  component: Logo,
};

const Template = (args) => ({
  components: { Logo },
  props: { args },
  template: '<Logo />',
});

export const FirstStory = Template.bind({});
