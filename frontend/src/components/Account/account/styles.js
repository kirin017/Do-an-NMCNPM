import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}));