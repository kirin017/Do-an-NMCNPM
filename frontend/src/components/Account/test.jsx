import React from 'react';
import { Button, Typography } from '@material-ui/core';

// Function to manage user accounts
function manageAccount(userId, action) {
    // Check if user is an admin
    if (isAdmin(userId)) {
        // Perform action based on provided action parameter
        switch (action) {
            case 'create':
                // Logic to create a new user account
                console.log('Creating a new user account...');
                break;
            case 'delete':
                // Logic to delete a user account
                console.log('Deleting the user account...');
                break;
            case 'block':
                // Logic to block a user account
                console.log('Blocking the user account...');
                break;
            case 'unblock':
                // Logic to unblock a user account
                console.log('Unblocking the user account...');
                break;
            default:
                console.log('Invalid action specified.');
                break;
        }
    } else {
        console.log('Access denied. You must be an admin to manage user accounts.');
    }
}

// Function to check if user is an admin
function isAdmin(userId) {
    // Logic to determine if user is an admin based on user ID
    // Replace with your own implementation
    // For simplicity, let's assume admin user IDs are 'admin001', 'admin002', etc.
    return userId.startsWith('admin');
}

function AccountManagementButton({ userId, action, label }) {
    const handleAccountManagement = () => {
        manageAccount(userId, action);
    };

    return (
        <Button variant="contained" onClick={handleAccountManagement}>
            {label}
        </Button>
    );
}

function AccountManagement() {
    return (
        <div>
            <Typography variant="h2">Account Management</Typography>
            <AccountManagementButton
                userId="admin001"
                action="create"
                label="Create User Account"
            />
            <AccountManagementButton
                userId="admin002"
                action="delete"
                label="Delete User Account"
            />
        </div>
    );
}

export default AccountManagement;
