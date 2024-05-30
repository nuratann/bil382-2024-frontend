
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Table, Tr, Td, Th, Thead, Tbody, Image } from '@chakra-ui/react';

const AdminPageProducts = () => {
    const navigate = useNavigate();

    const products = [
        { id: 1, name: 'Умная колонка 1', sku: '02590005', qty: 34, price: 187.00, rating: '★★★★', status: 'Запланировано', image: 'https://nypost.com/wp-content/uploads/sites/2/2022/02/echo-dot.png' },
        { id: 2, name: 'Умная колонка 2', sku: '01222009', qty: 35, price: 178.00, rating: '★★★', status: 'Неактивный', image: 'https://nypost.com/wp-content/uploads/sites/2/2022/02/echo-dot.png' },
        { id: 3, name: 'Умная колонка 3', sku: '03436007', qty: 22, price: 95.00, rating: '★★★★★', status: 'Запланировано', image: 'https://nypost.com/wp-content/uploads/sites/2/2022/02/echo-dot.png' },
        { id: 4, name: 'Умная колонка 4', sku: '03101008', qty: 20, price: 252.00, rating: '★★', status: 'Запланировано', image: 'https://nypost.com/wp-content/uploads/sites/2/2022/02/echo-dot.png' },
        { id: 5, name: 'Умная колонка 5', sku: '04370003', qty: 16, price: 208.00, rating: '★', status: 'Опубликовано', image: 'https://nypost.com/wp-content/uploads/sites/2/2022/02/echo-dot.png' },
        { id: 6, name: 'Умная колонка 6', sku: '03441006', qty: 29, price: 287.00, rating: '★★★', status: 'Запланировано', image: 'https://nypost.com/wp-content/uploads/sites/2/2022/02/echo-dot.png' }
    ];


    const handleProductClick = (id) => {
        navigate(`/admin/product/${id}`);
    };

    return (
        <Box>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Изображение</Th>
                        <Th>Продукт</Th>
                        <Th>Артикул (SKU)</Th>
                        <Th>Количество</Th>
                        <Th>Цена</Th>
                        <Th>Рейтинг</Th>
                        <Th>Статус</Th>

                    </Tr>
                </Thead>
                <Tbody>
                    {products.map(product => (
                        <Tr key={product.id} onClick={() => handleProductClick(product.id)}>
                            <Td><Image src={product.image} alt={product.name} boxSize="50px" /></Td>
                            <Td>{product.name}</Td>
                            <Td>{product.sku}</Td>
                            <Td>{product.qty}</Td>
                            <Td>{product.price}</Td>
                            <Td>{product.rating}</Td>
                            <Td>{product.status}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default AdminPageProducts;
