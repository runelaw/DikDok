import { Avatar, Button, IconButton, Menu, MenuItem } from '@mui/material';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { useCallback } from 'react';
import { useAuth } from 'store/auth';

export default function ProfileButton() {
  const user = useAuth(useCallback((state) => state.user, []));

  return (
    <PopupState variant="popover" popupId="profile-popup-menu">
      {(popupState) => (
        <>
          <IconButton {...bindTrigger(popupState)} sx={{ p: 0 }}>
            <Avatar src={user?.photoURL} />
          </IconButton>
          <Menu
            {...bindMenu(popupState)}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem disabled>{user?.email}</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
}
