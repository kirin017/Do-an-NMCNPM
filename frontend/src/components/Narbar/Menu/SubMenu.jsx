import React, { useState } from 'react';
import { Button, Popover } from '@material-ui/core';
import { Link } from 'react-router-dom';

function SubMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} onClick={handleClick}>
        Sản phẩm
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Button component={Link} to="/accessory">Phụ kiện thể thao</Button>
            <Button component={Link} to="/shirt">Áo thể thao</Button>
            <Button component={Link} to="/shorts">Quần thể thao</Button>
            <Button component={Link} to="/shoes">Giày thể thao</Button>
        </div>
      </Popover>
    </div>
  );
}

export default SubMenu;
