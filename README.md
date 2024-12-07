

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

---
## Technologies Used

- **Frontend Framework**: React.js
- **CSS Styling**: Vanilla CSS for custom styles
- **Routing**: React Router for navigation between pages
- **Mock Data**: JavaScript arrays for simulating data management

---

## Installation and Setup


### 1. Clone the repository:
```bash
git clone https://github.com/your-repo/rbac-ui.git
cd rbac-ui



---

### 2. Install dependencies:
```bash
npm install

---

### 3. Start the development server:
```bash
npm start

---

### 4. Open the application in your browser:
```bash
http://localhost:3000

---

## Usage
- ### 1. **Navigate between User Management and Role Management using the navbar.**
- 2. **Manage Users:**
- Add new users with roles and statuses.
- Edit user details or delete users.
### 3. **Manage Roles:
- Create new roles.
- Edit or delete existing roles.
- Toggle permissions dynamically.
### 4. **All changes are reflected dynamically using simulated APIs.

---

##Acknowledgments
Thanks to VRV Security for inspiring this project, emphasizing the importance of secure and dynamic RBAC systems in modern applications.





