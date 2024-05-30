import React, { useState } from 'react';
import {
  Select,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button
} from '@chakra-ui/react';

const UserRoleSelector = ({ user, roles, onRoleChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(user.role);
  const cancelRef = React.useRef();

  const onClose = () => setIsOpen(false);

  const handleRoleChange = (newRole) => {
    setSelectedRole(newRole);
    setIsOpen(true);
  };

  const confirmRoleChange = () => {
    onRoleChange(user.id, selectedRole);
    onClose();
  };

  return (
    <>
      <Select
        value={selectedRole}
        onChange={(e) => handleRoleChange(e.target.value)}
      >
        {roles.map(role => (
          <option key={role} value={role}>{role}</option>
        ))}
      </Select>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Подтверждение изменения роли
            </AlertDialogHeader>

            <AlertDialogBody>
              Вы уверены, что хотите изменить роль на {selectedRole}?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Отмена
              </Button>
              <Button colorScheme="red" onClick={confirmRoleChange} ml={3}>
                Подтвердить
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default UserRoleSelector