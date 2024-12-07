const mockUsers = [
    { id: 1, name: 'Alice', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Bob', role: 'Editor', status: 'Inactive' },
];

const mockRoles = [
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
];

export const getUsers = () => Promise.resolve(mockUsers);

export const getRoles = () => Promise.resolve(mockRoles);

export const addUser = (user) => {
    mockUsers.push(user);
    return Promise.resolve(user);
};

export const addRole = (role) => {
    mockRoles.push(role);
    return Promise.resolve(role);
};

export const updateUser = (id, updatedUser) => {
    const index = mockUsers.findIndex((user) => user.id === id);
    if (index !== -1) mockUsers[index] = { ...mockUsers[index], ...updatedUser };
    return Promise.resolve(mockUsers[index]);
};

export const updateRole = (id, updatedRole) => {
    const index = mockRoles.findIndex((role) => role.id === id);
    if (index !== -1) mockRoles[index] = { ...mockRoles[index], ...updatedRole };
    return Promise.resolve(mockRoles[index]);
};

export const deleteUser = (id) => {
    const index = mockUsers.findIndex((user) => user.id === id);
    if (index !== -1) mockUsers.splice(index, 1);
    return Promise.resolve(id);
};

export const deleteRole = (id) => {
    const index = mockRoles.findIndex((role) => role.id === id);
    if (index !== -1) mockRoles.splice(index, 1);
    return Promise.resolve(id);
};
