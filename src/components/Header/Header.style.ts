import { makeStyles } from '@material-ui/core/styles';
import {green} from "@material-ui/core/colors"

export const headerStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    link: {
      marginRight: theme.spacing(2),
      textDecoration: "none",
      color:"#4b4b4b"
    },
    title: {
      flexGrow: 1,
      fontSize: '2rem'
    },
    app_bar_container: {
      backgroundColor: green[400]
    },
    cosmos_technologies_logo: {
      paddingRight: 10
    }
}));
