import React, { useEffect, useState } from 'react';
import { Box, Select, Table, Thead, Tbody, Tr, Th, Td, Text } from '@chakra-ui/react';

const UserListPanel = () => {
  const [roleFilter, setRoleFilter] = useState('all');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [sortedUsers, setSortedUsers] = useState([]);

  const users = [
    { id: 1, name: 'Иван Иванов', username: 'ivanivan', role: 'Продавец', dateRegistered: '2021-04-10' },
    { id: 2, name: 'Петр Петров', username: 'petrpetr', role: 'Модератор', dateRegistered: '2022-01-15' },
    // Добавьте другие примеры
  ];

  const handleRoleChange = (event) => {
    setRoleFilter(event.target.value);
  };

  useEffect(() => {
    setSortedUsers(users);
  }, [users]);

  const sortData = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    const sortedData = [...users].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });
    setSortConfig({ key, direction });
    setSortedUsers(sortedData);
  };

  const activeHeaderStyle = (key) => ({
    cursor: 'pointer',
    color: sortConfig.key === key ? 'blue.500' : 'gray.500'
  });

  return (
    <Box>
      <Select placeholder="Выберите роль" onChange={handleRoleChange}>
        <option value="all">Все</option>
        <option value="Модератор">Модератор</option>
        <option value="Продавец">Продавец</option>
        <option value="Покупатель">Покупатель</option>
      </Select>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th onClick={() => sortData('name')} style={activeHeaderStyle('name')}>Имя и фамилия</Th>
            <Th onClick={() => sortData('username')} style={activeHeaderStyle('username')}>Логин</Th>
            <Th onClick={() => sortData('role')} style={activeHeaderStyle('role')}>Роль</Th>
            <Th onClick={() => sortData('dateRegistered')} style={activeHeaderStyle('dateRegistered')}>Дата регистрации</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedUsers.map(user => (
            <Tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>{user.username}</Td>
              <Td>{user.role}</Td>
              <Td>{user.dateRegistered}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default UserListPanel;
