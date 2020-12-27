import React from "react";
import { Container, ThemeProvider } from "@material-ui/core";

import NavBar from "./NavBar";
import Editor from "./Editor";

import Theme from "../Theme";

export default {
  title: "Editor",
  component: Editor,
  argTypes: {},
};

const Template = (args) => (
  <ThemeProvider theme={Theme}>
    <NavBar />
    <Container>
      <Editor {...args} />
    </Container>
  </ThemeProvider>
);

export const Blank = Template.bind({});
Blank.args = {};
