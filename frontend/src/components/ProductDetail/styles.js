import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    box: {
        border: '1px solid rgba(0, 0, 0, 0.12)',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
        width: '1000px',
        height: '400px',
        marginLeft: '80px'
    },
    root: {
        border: 'none',
        boxShadow: 'none',
        maxWidth: '100%',
        height: 370,
    },
    media: {
        height: 20,
        paddingTop: '50%',
    },
    productname: {
        marginTop: '20px',
        fontSize: '30px',
    },
    descriptionBox: {
        marginTop: '20px',
        width: '470px',
        height: '40px',
    },
    descriptionText:{
        marginLeft: '20px',
    },
    price: {
        marginTop: '120px',
        marginLeft: '20px',
        fontSize: '35px',
    },
    button: {
        marginTop: '20px',
        marginLeft: '20px',
        border: '1px solid #000',
        backgroundColor: '#858585'
    },
}));