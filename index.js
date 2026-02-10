const createLoginTracker = (userInfo) => {
  // Initialize attempt counter
  let attemptCount = 0;

  // Return the inner arrow function
  return (passwordAttempt) => {
    // Account Lock - check if already exceeded 3 attempts
    if (attemptCount >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    // Password Check BEFORE incrementing
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      // Only increment on FAILED attempts
      attemptCount++;
      return `Login attempt ${attemptCount} failed. Login failed`;
    }
  };
};

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};