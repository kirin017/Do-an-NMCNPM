import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    media: {
        height: 300,
        width: '100%',
        objectFit: 'cover',
    },
}));