import React, { useState, useEffect } from 'react';
import { getRoles, addRole, updateRole, deleteRole } from '../mockApi/api';
import PermissionTable from '../components/PermissionTable';

const RoleManagement = () => {
    const [roles, setRoles] = useState([]);
    const [newRole, setNewRole] = useState({ name: '', permissions: [] });

    useEffect(() => {
        getRoles().then(setRoles);
    }, []);

    const handleAddRole = () => {
        addRole({ ...newRole, id: Date.now() }).then((role) =>
            setRoles((prev) => [...prev, role])
        );
    };

    const handleDeleteRole = (id) => {
        deleteRole(id).then(() => setRoles((prev) => prev.filter((r) => r.id !== id)));
    };

    return (
        <div>
            <h1>Role Management</h1>
            <div>
                <input
                    placeholder="Role Name"
                    value={newRole.name}
                    onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
                />
                <PermissionTable
                    permissions={newRole.permissions}
                    onUpdate={(perms) => setNewRole({ ...newRole, permissions: perms })}
                />
                <button onClick={handleAddRole}>Add Role</button>
            </div>
            <ul>
                {roles.map((role) => (
                    <li key={role.id}>
                        {role.name} - {role.permissions.join(', ')}
                        <button onClick={() => handleDeleteRole(role.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoleManagement;
