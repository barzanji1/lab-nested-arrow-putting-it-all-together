const createLoginTracker = (user) => {
  let failedAttempts = 0;
  const maxAttempts = 3;

  return (passwordAttempt) => {
    if (failedAttempts >= maxAttempts) {
      return "Account locked due to too many failed login attempts";
    }

    if (passwordAttempt !== user.password) {
      failedAttempts++;
      return `Attempt ${failedAttempts}: Login failed`;
    }

    return "Login successful";
  };
};

module.exports = {
  createLoginTracker,
};
