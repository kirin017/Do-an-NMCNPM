import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  box: {
    width: 2200,
  },
  boxContent: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  button: {
    background: 'white',
    height: '50px',
    width: '150px',
    marginTop: '30px',
    marginLeft: '30px',
    border: '1px solid #000',
  },
  typo:{
    fontSize: 30,
    marginBottom: 40,
  },
}));