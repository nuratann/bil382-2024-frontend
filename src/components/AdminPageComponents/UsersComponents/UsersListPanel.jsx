import React, { useEffect, useState } from 'react';
import { Box, Select, Table, Thead, Tbody, Tr, Th, Td, Icon } from '@chakra-ui/react';
import { TriangleUpIcon, TriangleDownIcon } from '@chakra-ui/icons';
import UserRoleSelector from './UserRoleSelector';

const UserListPanel = () => {
  const [roleFilter, setRoleFilter] = useState('all');
  const [users, setUsers] = useState([
    { id: 1, name: 'Иван Иванов', username: 'ivanivan', role: 'Продавец', dateRegistered: '2021-04-10' },
    { id: 2, name: 'Петр Петров', username: 'petrpetr', role: 'Модератор', dateRegistered: '2022-01-15' },
    // Добавьте другие примеры пользователей
  ]);
  const [sortedAndFilteredUsers, setSortedAndFilteredUsers] = useState(users);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const roles = ["Модератор", "Продавец", "Покупатель"]; // Варианты ролей

  useEffect(() => {
    let updatedUsers = [...users];

    // Фильтрация пользователей по роли
    if (roleFilter !== 'all') {
      updatedUsers = updatedUsers.filter(user => user.role === roleFilter);
    }

    // Сортировка пользователей
    if (sortConfig.key) {
      updatedUsers.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    
    setSortedAndFilteredUsers(updatedUsers);
  }, [users, roleFilter, sortConfig]);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    } else {
      direction = 'ascending';
    }
    setSortConfig({ key, direction });
  };

  const handleUserRoleChange = (userId, newRole) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, role: newRole } : user
    ));
  };

  const activeHeaderStyle = (key) => ({
    cursor: 'pointer',
    color: sortConfig.key === key ? 'blue.500' : 'gray.500'
  });

  return (
    <Box>
      <Select w={"30%"} value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)} placeholder="Выберите роль">
        <option value="all">Все</option>
        {roles.map(role => (
          <option key={role} value={role}>{role}</option>
        ))}
      </Select>
      <Table variant="simple" mt={6}>
        <Thead>
          <Tr>
            <Th onClick={() => handleSort('name')} style={activeHeaderStyle('name')}>
              Имя и фамилия {sortConfig.key === 'name' && (sortConfig.direction === 'ascending' ? <TriangleUpIcon /> : <TriangleDownIcon />)}
            </Th>
            <Th onClick={() => handleSort('username')} style={activeHeaderStyle('username')}>
              Логин {sortConfig.key === 'username' && (sortConfig.direction === 'ascending' ? <TriangleUpIcon /> : <TriangleDownIcon />)}
            </Th>
            <Th onClick={() => handleSort('role')} style={activeHeaderStyle('role')}>
              Роль {sortConfig.key === 'role' && (sortConfig.direction === 'ascending' ? <TriangleUpIcon /> : <TriangleDownIcon />)}
            </Th>
            <Th onClick={() => handleSort('dateRegistered')} style={activeHeaderStyle('dateRegistered')}>
              Дата регистрации {sortConfig.key === 'dateRegistered' && (sortConfig.direction === 'ascending' ? <TriangleUpIcon /> : <TriangleDownIcon />)}
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedAndFilteredUsers.map(user => (
            <Tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>{user.username}</Td>
              <Td>
                <UserRoleSelector user={user} roles={roles} onRoleChange={(newRole) => handleUserRoleChange(user.id, newRole)}/>
              </Td>
              <Td>{user.dateRegistered}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default UserListPanel;
