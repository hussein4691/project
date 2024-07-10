import React, { useState } from 'react';

function Setting() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('New password and confirmation do not match');
      return;
    }
    // Add code here to handle password change on the server
    // e.g., make a POST request to your server's API endpoint

    setMessage('Password changed successfully');
  };

  return (
    <div className="login-form">
      <header className="App-header">
        <h1>Change Password</h1>
        <form onSubmit={handlePasswordChange}>
          <div className="form-group">
            <label>
              Current Password:
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              New Password:
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Confirm New Password:
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Change Password</button>
        </form>
        {message && <p>{message}</p>}
      </header>
    </div>
  );
}

export default Setting;
