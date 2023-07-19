import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    table: {
        minWidth: 650,
        width: 1200
    },
    tableCell: {
        padding: '8px',
        borderRight: '1px solid #e0e0e0', 
    },
    textfield: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 30,
    },
    button: {
        marginTop: 5,
        marginLeft: 30,
        marginBottom: 30,
        border: '1px solid #000',
        // backgroundColor: '#0099FF',
        width: 100,
        fontSize: 20,
    },
}));