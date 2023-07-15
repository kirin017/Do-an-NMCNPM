import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    box: {
        border: '1px solid rgba(0, 0, 0, 0.12)',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
        width: '800px',
        height: 'auto',
        marginBottom: '20px',
    },
    root: {
        border: 'none',
        boxShadow: 'none',
        maxWidth: '100%',
        height: 'auto',
        marginLeft: '50px',
    },
    image: {
        height: '100px', 
        marginTop: '20px',
    },
    productname: {
        // marginTop: '20px',
        fontSize: '18px',
    },
    text: {
        marginTop: '5px',
        // marginLeft: '20px',
        fontSize: '15px',
    },
    button: {
        marginTop: '5px',
        // marginLeft: '20px',
        marginBottom: '2px',
        border: '1px solid #000',
        backgroundColor: '#858585'
    },
}));