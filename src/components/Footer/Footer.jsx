import React from "react";
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink from react-router-dom
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Box, Stack, Text, Link as ChakraLink } from "@chakra-ui/react";

const footerLinks = [
    {
        title: "Buyers маркетплейс",
        links: [
            "О нас",
            "Вакансии",
            "Стать курьером",
            "Бренд buyers",
            "Реквизиты",
            "Пользовательское соглашение",
        ],
    },
    {
        title: "Зарабатывать с Buyers",
        links: [
            "Стать продавцом",
            "Стать поставщиком",
            "Стать портнером",
            "Открыть пункт выдачи",
        ],
    },
    {
        title: "Покупать как компания",
        links: [
            "Добавить компанию",
            "Мои компании",
            "Подарочные сертификаты",
        ],
    },
    {
        title: "Помощь",
        links: [
            "Как сделать заказ",
            "Оплата",
            "Доставка",
            "Возврат товаров",
            "Контакты",
            "Безопасность",
        ],
    },
];

const FooterLinkColumn = ({ title, links }) => (
    <Stack spacing={2}>
        <Text
            fontWeight="bold"
            style={{
                color: "#070707",
                fontSize: "16px",
                fontWeight: "500",
                marginBottom: "8px",
            }}
        >
            {title}
        </Text>{" "}
        <Stack spacing={1}>
            {links.map((link, index) => (
                <ChakraLink
                    key={index}
                    as={link === "Пользовательское соглашение" ? RouterLink : "a"}
                    to={link === "Пользовательское соглашение" ? "/agreement" : "#"} color="gray.600"
                    _hover={{ textDecoration: "none", color: "blue" }}
                >
                    {link}
                </ChakraLink>
            ))}
        </Stack>
    </Stack>
);

function Footer() {
    return (
        <Box
            as="footer"
            bg="#f0f4f7"
            borderTop="2px solid"
            borderColor="gray.300"
            py={8}
            px={{ base: 4, md: 8 }}
        >
            <Stack
                spacing={8}
                direction={{ base: "column", md: "row" }}
                justifyContent="center"
                maxW="1200px"
                mx="auto"
            >
                {footerLinks.map((column, index) => (
                    <FooterLinkColumn
                        key={index}
                        {...column}
                        style={{
                            color: "rgba(0, 26, 52, .6)",
                            fontSize: "14px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                        }}
                    />
                ))}
            </Stack>
        </Box>
    );
}

export default Footer;
