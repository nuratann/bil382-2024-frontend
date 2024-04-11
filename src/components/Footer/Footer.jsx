import React from 'react';
import { Box, Flex, Text, Link, Heading, useBreakpointValue } from '@chakra-ui/react';

const FooterColumn = ({ title, links }) => (
  <Flex direction="column" gap={2}>
    <Heading fontSize="md" fontWeight="semibold" marginBottom={2}>
      {title}
    </Heading>
    {links.map((link, index) => (
      <Link key={index} href="#" fontSize="sm" color="gray.600" mb={2}>
        {link}
      </Link>
    ))}
  </Flex>
);

function Footer() {
  const columns = [
    {
      title: "О нас",
      links: ["О нас", "Найти офис", "Категории", "Условия"],
    },
    {
      title: "Подробнее",
      links: ["Служба поддержки", "Отменить товар", "Отправка", "Связаться с нами"],
    },
    {
      title: "Для пользователей",
      links: ["Войти", "Регистрация", "Настройки", "Мои заказы"],
    },
  ];

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box as="footer" bg="white" py={isMobile ? 0 : 20} px={{ base: 10, md: 20 }}>
      <Box maxW="611px" mx="auto" py={8} px={{ base: 0, md: 4 }}>
        <Flex direction={isMobile ? 'column' : 'row'} gap={isMobile ? 0 : 20}>
          {columns.map((column, index) => (
            <FooterColumn key={index} title={column.title} links={column.links} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;
