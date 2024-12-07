

# Role-Based Access Control (RBAC) User Interface

This project is a **Role-Based Access Control (RBAC)** User Interface built using **React.js**. It allows administrators to manage users, roles, and permissions dynamically and efficiently.

---

## Features

### 1. **User Management**
- View a list of users.
- Add, edit, and delete users.
- Assign roles to users and manage their status (Active/Inactive).

### 2. **Role Management**
- Create, edit, and delete roles.
- Assign permissions to roles (e.g., Read, Write, Delete).

### 3. **Dynamic Permissions**
- Toggle permissions for roles dynamically.
- Clear visualization of role permissions for easier management.

### 4. **Custom API Simulation**
- Simulated CRUD operations for users and roles using mock data.
- Mimics server-like responses for testing and validation.

### 5. **User-Friendly UI**
- Responsive design compatible with all screen sizes.
- Visual enhancements using CSS for improved aesthetics.

---

## Technologies Used

- **Frontend Framework**: React.js
- **CSS Styling**: Vanilla CSS for custom styles
- **Routing**: React Router for navigation between pages
- **Mock Data**: JavaScript arrays for simulating data management

## Usage
- Navigate between User Management and Role Management using the navbar.
- Manage Users:
    - Add new users with roles and statuses.
    - Edit user details or delete users.
- Manage Roles:
    - Create new roles.
    - Edit or delete existing roles.
    - Toggle permissions dynamically.
- All changes are reflected dynamically using simulated APIs.

## Project Structure

```plaintext
src/
├── components/
│   ├── Navbar.js              # Top navigation bar
│   ├── UserTable.js           # User management table
│   ├── RoleTable.js           # Role management table
│   ├── PermissionTable.js     # Permissions toggling UI
├── pages/
│   ├── UserManagement.js      # User management page
│   ├── RoleManagement.js      # Role management page
├── styles.css                 # Global CSS styles
├── App.js                     # Application root
├── index.js                   # Application entry point