import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        border: '1px solid rgba(0, 0, 0, 0.12)',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
        maxWidth: 300,
        height: 'auto',
        marginBottom: 20,
        marginLeft: 20,
    },
    Box: {
        marginTop: '20px',
        marginLeft: 20,
        width: '470px',
        height: 'auto',
    },
    typo:{
        marginTop: 20,
        marginLeft: 40,
        marginBottom: 20,
        fontSize: 30
    },
    button: {
        marginTop: '20px',
        marginLeft: '20px',
        marginBottom: '20px',
        border: '1px solid #000',
        backgroundColor: '#0099FF',
        width: 100,
        fontSize: 20,
    },
    formControl: {
        marginTop: '20px',
        marginLeft: '20px',
        marginBottom: '20px',
    },
    selectBox: {
        width: 150,
        
    }
}));