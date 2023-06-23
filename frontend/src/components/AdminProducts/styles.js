import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
    },
    button: {
        marginTop: '5px',
        marginBottom: '20px',
        border: '1px solid #000',
        backgroundColor: '#858585'
    },
}));