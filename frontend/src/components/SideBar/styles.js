import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 200;

export default makeStyles((theme) => ({

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        marginTop: "200px",
        backgroundColor: 'inherit',

    },
    button: {
        fontSize: '16px',
        textAlign: 'left',
        width: '200px',
        height: '60px',
    }
}));