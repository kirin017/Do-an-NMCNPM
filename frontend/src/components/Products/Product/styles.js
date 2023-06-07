import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: '50%',
    },
    cardActions: {
        display: 'flex',
        // justifyContent: 'flex-end'
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardNameAndDescription: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: 250,
    },
    button: {
        marginLeft: '5px', 
        border: '1px solid #000',
    }
}));