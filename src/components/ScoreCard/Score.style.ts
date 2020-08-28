import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const scoreCardStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    }
  })
);