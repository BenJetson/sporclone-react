import { createMuiTheme } from "@material-ui/core/styles";
import {
  // deepOrange,
  // deepPurple,
  orange,
  purple,
} from "@material-ui/core/colors";

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: orange["800"],
    },
    secondary: {
      main: purple["800"],
    },
  },
});

export default Theme;
