import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
    },
    image: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    cardActions: {
        display: 'flex',
        color: 'black',
        // justifyContent: 'flex-end'
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        color: 'black',
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