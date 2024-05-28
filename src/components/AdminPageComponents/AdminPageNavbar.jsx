import React from 'react';
import { Box, Heading, Flex, IconButton, Icon, Stack, useDisclosure} from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';// Импорт Link из react-router-dom

const AdminPageNavbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#ff6347' : 'white', // Терракотовый для активного, белый для обычного
    fontWeight: isActive ? 'bold' : 'normal'
  });

  return (
    <Box
      pos="fixed"
      left={0}
      top={0}
      h="100vh"
      w={{ base: isOpen ? "100%" : "0", md: "200px" }}
      bg="gray.800"
      color="white"
      overflow="hidden"
      transition="width 0.5s"
    >
      <Flex
        h="100%"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box p={5}>
          <Flex justifyContent="space-between" alignItems="center" w="100%" mb={5}>
            <Link to="/admin" >
              <Heading size="md" color="teal.300" _hover={{ color: 'blue.500', cursor: 'pointer' }}>Админ Панель</Heading>
            </Link>

            <IconButton
              aria-label="Открыть меню"
              icon={isOpen ? <Icon as={FaTimes} /> : <Icon as={FaBars} />}
              onClick={onToggle}
              display={{ md: 'none' }}
            />
          </Flex>
          <Stack as="nav" spacing={4}>
            <NavLink to="/admin/users" style={linkStyle}>Пользователи</NavLink>
            <NavLink to="/admin/catalog" style={linkStyle}>Каталог</NavLink>
            <NavLink to="/admin/ads" style={linkStyle}>Реклама</NavLink>
            <NavLink to="/admin/orders" style={linkStyle}>Заказы</NavLink>
            <NavLink to="/admin/returns" style={linkStyle}>Возвраты</NavLink>
            <NavLink to="/admin/comments" style={linkStyle}>Комментарии</NavLink>
            <NavLink to="/admin/settings" style={linkStyle}>Настройки</NavLink>
            {/* Добавить другие ссылки */}
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminPageNavbar;
