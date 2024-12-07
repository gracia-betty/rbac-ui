import React from 'react';
import '../styles.css';

const PermissionTable = ({ permissions, onUpdate }) => {
    const togglePermission = (permission) => {
        const updatedPermissions = permissions.includes(permission)
            ? permissions.filter((p) => p !== permission)
            : [...permissions, permission];
        onUpdate(updatedPermissions);
    };

    return (
        <div className="permission-table">
            {['Read', 'Write', 'Delete'].map((perm) => (
                <label key={perm}>
                    <input
                        type="checkbox"
                        checked={permissions.includes(perm)}
                        onChange={() => togglePermission(perm)}
                    />
                    {perm}
                </label>
            ))}
        </div>
    );
};

export default PermissionTable;
