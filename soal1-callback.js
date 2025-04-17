const userDB = {
    username: 'joko',
    password: 'rahasia',
    role: 'admin'
  };
  
  const loginUser = (inputUsername, inputPassword, cb) => {
    setTimeout(() => {
      try {
        if (!(inputUsername === userDB.username && inputPassword === userDB.password)) {
          throw new Error("Invalid username or password!");
        }
        cb(null, userDB);
      } catch (err) {
        cb(err);
      }
    }, 500);
  };
  
  const getRole = (user, cb) => {
    setTimeout(() => {
      try {
        if (typeof user !== 'object' || !user.username || !user.role) {
          throw new Error("Invalid user object!");
        }
  
        cb(null, user.role);
      } catch (err) {
        cb(err);
      }
    }, 500);
  };
  
  const getMenu = (role, cb) => {
    setTimeout(() => {
      try {
        let route = '';
        if (role === "admin") {
          route = 'dashboard admin';
        } else {
          route = 'dashboard';
        }
        cb(null, route);
      } catch (err) {
        cb(err);
      }
    }, 500);
  };
  
  loginUser('joko', 'rahasia', (err, user) => {
    if (err) console.error("Login error:", err.message);
  
    getRole(user, (err, role) => {
      if (err) console.error("Role error:", err.message);
  
      getMenu(role, (err, route) => {
        if (err) console.error("Menu error:", err.message);
  
        console.log("Successful login, redirecting to", route);
      });
    });
  });
  