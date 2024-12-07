import React, { useState, useEffect } from 'react';
import { getUsers, getRoles, addUser, updateUser, deleteUser } from '../mockApi/api';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', role: '', status: 'Active' });

    useEffect(() => {
        getUsers().then(setUsers);
        getRoles().then(setRoles);
    }, []);

    const handleAddUser = () => {
        addUser({ ...newUser, id: Date.now() }).then((user) =>
            setUsers((prev) => [...prev, user])
        );
    };

    const handleDeleteUser = (id) => {
        deleteUser(id).then(() => setUsers((prev) => prev.filter((u) => u.id !== id)));
    };

    return (
        <div>
            <h1>User Management</h1>
            <div>
                <input
                    placeholder="Name"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                />
                <select
                    value={newUser.role}
                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                >
                    <option value="">Select Role</option>
                    {roles.map((role) => (
                        <option key={role.id} value={role.name}>
                            {role.name}
                        </option>
                    ))}
                </select>
                <button onClick={handleAddUser}>Add User</button>
            </div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.role} - {user.status}
                        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;
