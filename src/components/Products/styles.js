import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "#f7e9f7",
    padding: theme.spacing(3),
    minHeight: "80vh",
  },
  root: {
    flexGrow: 1,
  },
}));
