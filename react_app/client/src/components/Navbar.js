import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LoginButton from "./login";
import LogoutButton from "./logout";
import UserButton from "./user"

const NavBar = ({ isAuthenticated, onLogin, onLogout, userName }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div style={{ flexGrow: 1 }}></div> {/* Espaço em branco flexível */}
          {isAuthenticated ? (
            <>
              <UserButton userName={userName} />
              <LogoutButton onLogoutSuccess={onLogout} />
            </>
          ) : (
            <LoginButton onSuccess={onLogin} />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
