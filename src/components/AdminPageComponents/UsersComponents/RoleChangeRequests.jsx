import React, { useState } from 'react';
import { 
  Box, Table, Thead, Tbody, Tr, Th, Td, Button, Text, IconButton, 
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, 
  ModalBody, ModalFooter, useDisclosure 
} from '@chakra-ui/react';
import { TriangleUpIcon, TriangleDownIcon } from '@chakra-ui/icons';
import SellerProfile from '../../Profile/ProfileSubPages/SellerProfile';

const RoleChangeRequests = () => {
  const [requests, setRequests] = useState([
    { id: 1, username: 'user1', currentRole: 'Покупатель', requestedRole: 'Продавец', dateRequested: '2023-05-30' },
    { id: 2, username: 'user2', currentRole: 'Продавец', requestedRole: 'Модератор', dateRequested: '2023-05-29' },
  ]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedRequest, setSelectedRequest] = useState(null);

  const sortData = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    const sortedData = [...requests].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });
    setRequests(sortedData);
    setSortConfig({ key, direction });
  };

  const handleApproveRequest = (id) => {
    alert(`Запрос на изменение роли с id ${id} одобрен.`);
  };

  const handleRejectRequest = (id) => {
    alert(`Запрос на изменение роли с id ${id} отклонен.`);
  };

  const handleOpenModal = (request) => {
    setSelectedRequest(request);
    onOpen();
  };

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>Запросы на смену роли</Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th onClick={() => sortData('username')}>Логин {renderSortIcon('username')}</Th>
            <Th onClick={() => sortData('currentRole')}>Текущая роль {renderSortIcon('currentRole')}</Th>
            <Th onClick={() => sortData('requestedRole')}>Запрашиваемая роль {renderSortIcon('requestedRole')}</Th>
            <Th onClick={() => sortData('dateRequested')}>Дата запроса {renderSortIcon('dateRequested')}</Th>
            <Th>Действия</Th>
            <Th>Подробнее</Th>
          </Tr>
        </Thead>
        <Tbody>
          {requests.map(request => (
            <Tr key={request.id}>
              <Td>{request.username}</Td>
              <Td>{request.currentRole}</Td>
              <Td>{request.requestedRole}</Td>
              <Td>{request.dateRequested}</Td>
              <Td>
                <Button colorScheme="green" size="sm" onClick={() => handleApproveRequest(request.id)}>Одобрить</Button>
                <Button colorScheme="red" size="sm" ml={2} onClick={() => handleRejectRequest(request.id)}>Отклонить</Button>
              </Td>
              <Td>
                <Button size="sm" onClick={() => handleOpenModal(request)}>Подробнее</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal size={"lg"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={"800px"}>
          <ModalHeader>Детали запроса</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedRequest && <SellerProfile request={selectedRequest} />}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Закрыть
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );

  function renderSortIcon(column) {
    return sortConfig.key === column ? (sortConfig.direction === 'ascending' ? <TriangleUpIcon /> : <TriangleDownIcon />) : null;
  }
};

export default RoleChangeRequests;
