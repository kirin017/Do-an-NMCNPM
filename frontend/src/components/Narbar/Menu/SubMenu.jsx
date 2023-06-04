import React, { useState } from 'react';
import { Button, Popover } from '@material-ui/core';

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
            <Button>Giày</Button>
            <Button>Áo quần đá bóng</Button>
        </div>
      </Popover>
    </div>
  );
}

export default SubMenu;
