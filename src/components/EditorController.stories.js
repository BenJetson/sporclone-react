import React from "react";
import { Container, ThemeProvider } from "@material-ui/core";

import NavBar from "./NavBar";
import EditorController from "./EditorController";

import Theme from "../Theme";

export default {
  title: "EditorController",
  component: EditorController,
  argTypes: {},
};

const Template = (args) => (
  <ThemeProvider theme={Theme}>
    <NavBar />
    <Container>
      <EditorController {...args} />
    </Container>
  </ThemeProvider>
);

export const Blank = Template.bind({});
Blank.args = {};
