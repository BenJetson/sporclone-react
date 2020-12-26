import React from "react";
import NavDrawer from "./NavDrawer";

export default {
  title: "NavDrawer",
  component: NavDrawer,
  argTypes: {
    open: { control: "boolean" },
  },
};

const Template = (args) => <NavDrawer {...args} />;

export const Preview = Template.bind({});
Preview.args = {
  open: true,
  onClose: () => {},
};
