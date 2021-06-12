import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    maxWidth: "100%",
  },
  form: {
    padding: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "column",
    maxwidth: "100%",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
