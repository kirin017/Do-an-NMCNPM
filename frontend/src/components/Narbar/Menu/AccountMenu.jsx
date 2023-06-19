import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useHistory } from 'react-router-dom';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: "#E8E8E8",
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: 'theme.palette.common.white',
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus( {userName, setUserName, setTypeUser}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        style={{ backgroundColor: '#E8E8E8' }}
        onClick={handleClick}   
      >
         😼 {userName}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
        <ListItem
                button
                onClick={()=>{
                    history.push('/cart');
                }}
                >
                <ListItemIcon>
                    <AssignmentIndIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Tài khoản của tôi" />
           </ListItem>  
        </StyledMenuItem>
        <StyledMenuItem>
        <ListItem
                button
                onClick={()=>{
                    history.push('/cart');
                }}
                >
                <ListItemIcon>
                    <ShoppingCartIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Giỏ hàng" />
           </ListItem>  
        </StyledMenuItem>
        <StyledMenuItem>
        <ListItem
                button
                onClick={()=>{
                    history.push('/cart');
                }}
                >
                <ListItemIcon>
                    <ShoppingBasketIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Đơn hàng" />
           </ListItem>  
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItem
                button
                onClick={()=>{
                    setTypeUser(-1); 
                    setUserName('');
                    history.push('/');
                }}
                >
                <ListItemIcon>
                    <ExitToAppIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Đăng xuất" />
           </ListItem>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
