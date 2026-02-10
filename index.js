const createLoginTracker = (userInfo) => {
  // Initialize attempt counter
  let attemptCount = 0;

  // Return the inner arrow function
  return (passwordAttempt) => {
    // Increment attempt count
    attemptCount++;

    // Account Lock - check if exceeded 3 attempts
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    // Password Check
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      return `Login attempt ${attemptCount} failed. Login failed`;
    }
  };
};

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};