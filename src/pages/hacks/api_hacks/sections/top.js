import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
} from "@material-ui/core/";
import Logo from "../hack_assets/logo.svg";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: "center",
      marginTop: "25px",
    },

}))



const Top = (props) => {
    const classes = useStyles();
    return(
<Grid className={classes.root} item xs={12} sm={12} md={12} lg={12}>
<img alt="logo" src={Logo} width="300ox" />
<br />
<Typography variant="h3" gutterBottom={true}>
  Tech Phantoms <br/> X <br/> Innovators Hub
</Typography>
<Typography variant="h6" gutterBottom={true}>
  Presents
</Typography>
<Typography variant="h6" gutterBottom={true}>
  A mini hack to leverage API first skills.
</Typography>
</Grid>)
}
export default Top;