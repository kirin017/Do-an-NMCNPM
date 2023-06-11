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
        minWidth: 'unset',
        marginLeft: '5px', 
        border: '1px solid #000',
        height: '30px',
        width: '30px',
        fontSize: '20px',
    }
}));