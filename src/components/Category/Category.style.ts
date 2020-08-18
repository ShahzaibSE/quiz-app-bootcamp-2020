import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';


export const categoryStyle = makeStyles({
    root: {
      minWidth: 80,
      minHeight: 250
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    }
  });