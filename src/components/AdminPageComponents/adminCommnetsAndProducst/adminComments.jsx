
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text, Button, Image, Flex, Stack } from '@chakra-ui/react';



const AdminProductAndComments = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            const fetchedProduct = await fetchProductDetails(id);
            setProduct(fetchedProduct);

            const fetchedComments = await fetchProductComments(id);
            setComments(fetchedComments);
        };

        fetchProduct();
    }, [id]);

    const handleEditComment = (commentId) => {
        // Handle edit comment logic
    };

    const handleDeleteComment = (commentId) => {
        // Handle delete comment logic
    };

    const handleBlockUser = (userId) => {
        // Handle block user logic
    };

    if (!product) {
        return <Box>Loading...</Box>;
    }

    return (
        <Box p={5} maxW="800px" mx="auto">
            <Heading mb={5}>{product.name}</Heading>
            <Box mb={5} align="center">
                <Image src={product.image} alt={product.name} boxSize="200px" borderRadius="md" mr={5} />
                <Box>
                    <Text>{product.details}</Text>
                    <Text mt={2}><strong>Цена:</strong> ${product.price}</Text>
                    <Text mt={2}><strong>Наличие:</strong> {product.available ? 'В наличии' : 'Нет в наличии'}</Text>
                    <Text mt={2}><strong>Рейтинг:</strong> {calculateAverageRating(product.reviews)}</Text>
                    <Text mt={2}><strong>Характеристики:</strong></Text>

                    <ul>
                        {product.specifications && product.specifications.map((spec, index) => (
                            <li key={index}>{spec}</li>
                        ))}
                    </ul>
                </Box>
            </Box>
            <Heading size="md" mb={3}>Comments</Heading>
            {comments.map(comment => (
                <Box key={comment.id} borderWidth="1px" borderRadius="lg" p={4} mb={4}>
                    <Text><strong>{comment.user}</strong>: {comment.comment}</Text>
                    <Stack direction="row" spacing={4} mt={3}>
                        <Button colorScheme="blue" onClick={() => handleEditComment(comment.id)}>Редактровать</Button>
                        <Button colorScheme="red" onClick={() => handleDeleteComment(comment.id)}>Удалить</Button>
                        <Button colorScheme="gray" onClick={() => handleBlockUser(comment.user)}>Заблокировать пользователя</Button>
                    </Stack>
                </Box>
            ))}
        </Box>
    );
};

export default AdminProductAndComments;


const calculateAverageRating = (ratings) => {
    if (!ratings || ratings.length === 0) return 'N/A';

    const sum = ratings.reduce((total, rating) => total + rating, 0);
    const average = sum / ratings.length;
    return average.toFixed(1);
};

// Mock function to simulate fetching product details
const fetchProductDetails = async (id) => {
    const products = [
        { id: '1', name: 'Колонка 1', details: 'Детали для продукта 1', image: 'https://nypost.com/wp-content/uploads/sites/2/2022/02/echo-dot.png' },
        { id: '2', name: 'Умная колонка 2', details: 'Детали для продукта 2', image: 'https://nypost.com/wp-content/uploads/sites/2/2022/02/echo-dot.png' },
        { id: '3', name: 'Умная колонка 3', details: 'Детали для продукта 3', image: 'https://nypost.com/wp-content/uploads/sites/2/2022/02/echo-dot.png' },
        { id: '4', name: 'Умная колонка 4', details: 'Детали для продукта 4', image: 'https://nypost.com/wp-content/uploads/sites/2/2022/02/echo-dot.png' },
        { id: '5', name: 'Умная колонка 5', details: 'Детали для продукта 5', image: 'https://nypost.com/wp-content/uploads/sites/2/2022/02/echo-dot.png' },
        { id: '6', name: 'Умная колонка 6', details: 'Детали для продукта 6', image: 'https://nypost.com/wp-content/uploads/sites/2/2022/02/echo-dot.png' }
    ]
        ;
    return products.find(product => product.id === id);
};

// Mock function to simulate fetching comments for a product
const fetchProductComments = async (productId) => {
    const comments = {
        '1': [
            { id: 1, user: 'Мухаммад', comment: 'Отличный продукт 1!' },
            { id: 2, user: 'Айгуль', comment: 'Не удовлетворен продуктом 1.' },
            { id: 3, user: 'Эльмира', comment: 'Приличное качество для продукта 1.' },
        ],
        '2': [
            { id: 4, user: 'Алишер', comment: 'Отличный продукт 2!' },
            { id: 5, user: 'Айдос', comment: 'Не удовлетворен продуктом 2.' },
            { id: 6, user: 'Динара', comment: 'Понравились особенности продукта 2.' },
        ],
        '3': [
            { id: 7, user: 'Айсулу', comment: 'Отличный продукт 3!' },
            { id: 8, user: 'Азамат', comment: 'Продукт 3 можно улучшить.' },
            { id: 9, user: 'Назгул', comment: 'Хорошее соотношение цены и качества для продукта 3.' },
        ],
        '4': [
            { id: 10, user: 'Гульназ', comment: 'Удивительный продукт 4!' },
            { id: 11, user: 'Айдар', comment: 'Разочарован продуктом 4.' },
            { id: 12, user: 'Тимур', comment: 'Буду рекомендовать продукт 4.' },
        ],
        '5': [
            { id: 13, user: 'Касым', comment: 'Фантастический продукт 5!' },
            { id: 14, user: 'Айзада', comment: 'Продукт 5 не соответствовал ожиданиям.' },
            { id: 15, user: 'Эркебулан', comment: 'Удовлетворен продуктом 5.' },
        ],
        '6': [
            { id: 16, user: 'Алия', comment: 'Отличный продукт 6!' },
            { id: 17, user: 'Нурлан', comment: 'Продукт 6 нуждается в улучшениях.' },
            { id: 18, user: 'Зарина', comment: 'Довольна продуктом 6.' },
        ],
    };

    return comments[productId] || [];
};