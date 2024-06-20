import * as React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box, Text
} from '@chakra-ui/react';
import MediaComments from './MediaComments';
import SortComments from './SortComments';
import ReviewsList from './ReviewsList';
import CommentForm from './CommentForm';
import useUserStore from '../../stores/useUserStore';
import { useState } from 'react';

function ProductTabs({ reviewss, questionsCount, productId }) {
  const [reviews, setReviews]=useState([
    {
        "id": "rev1",
        "userId": "user123",
        "orderId": "ord1",
        "type":"review",
        "grade": 5,
        "options": "{\"color\":\"Серый космос\",\"storage\":\"256GB\"}",
        "text": "Превосходный телефон! Камера и экран просто великолепны.",
        "images": "[\"http://example.com/review_image1.jpg\"]",
        "reviewDate": "2024-05-01T12:00:00Z",
        "updatedDate": "2024-05-01T12:00:00Z",
        "likes": 10,
        "dislikes": 1,
        "comments": [
            {
                "id": "com1",
                "userId": "user234",
                "productId": "2f3e4d5c-6e7d-8c9b-0f1a",
                "type": "comment",
                "text": "Полностью согласен!",
                "likes": 5,
                "dislikes": 0,
                "commentDate": "2024-05-02T12:00:00Z",
                "updatedDate": "2024-05-02T12:00:00Z",
                "comments":[]
            }
        ]
    },
    {
        "id": "rev2",
        "userId": "user456",
        "orderId": "ord2",
        "type":"review",
        "grade": 4,
        "options": "{\"color\":\"Серый космос\",\"storage\":\"256GB\"}",
        "text": "Отличный телефон, но аккумулятор мог бы быть лучше.",
        "images": "[]",
        "reviewDate": "2024-05-03T12:00:00Z",
        "updatedDate": "2024-05-03T12:00:00Z",
        "likes": 7,
        "dislikes": 2,
        "comments": []
    }
])
    const user = useUserStore((state) => state.user)
    const mediaList = [
      {
        src: 'https://ir.ozone.ru/s3/rp-photo-2/wc800/dfd4aa37-eb0a-453c-bb11-055fb277b3f4.jpeg',
        user: 'User Name',
        date: '20 августа 2021',
        comment: 'Очень понравилось, спасибо!',
      },
      {
        src: 'https://ir.ozone.ru/s3/rp-photo-5/wc800/2449f614-6b87-4c63-a4e2-78e0594c12bd.jpeg',
        user: 'User Name',
        date: '20 августа 2021',
        comment: 'Очень понравилось, спасибо!Очень понравилось, спасибо!Очень понравилось, спасибо!Очень понравилось, спасибо!Очень понравилось, спасибо!Очень понравилось, спасибо!Очень понравилось, спасибо!',
      },
      {
        src: 'https://ir.ozone.ru/s3/rp-photo-2/wc800/dfd4aa37-eb0a-453c-bb11-055fb277b3f4.jpeg',
        user: 'User Name',
        date: '20 августа 2021',
        comment: 'Очень понравилось, спасибо!',
      },
      {
        src: 'https://ir.ozone.ru/s3/rp-photo-5/wc800/2449f614-6b87-4c63-a4e2-78e0594c12bd.jpeg',
        user: 'User Name',
        date: '20 августа 2021',
        comment: 'Очень понравилось, спасибо!Очень понравилось, спасибо!Очень понравилось, спасибо!Очень понравилось, спасибо!Очень понравилось, спасибо!Очень понравилось, спасибо!Очень понравилось, спасибо!',
      },
      {
        src: 'https://ir.ozone.ru/s3/rp-photo-2/wc800/dfd4aa37-eb0a-453c-bb11-055fb277b3f4.jpeg',
        user: 'User Name',
        date: '20 августа 2021',
        comment: 'Очень понравилось, спасибо!',
      },
      {
        src: 'https://ir.ozone.ru/s3/rp-photo-5/wc800/2449f614-6b87-4c63-a4e2-78e0594c12bd.jpeg',
        user: 'User Name',
        date: '20 августа 2021',
        comment: 'Очень понравилось, спасибо!Очень понравилось, спасибо!Очень понравилось, спасибо!Очень понравилось, спасибо!Очень понравилось, спасибо!Очень понравилось, спасибо!Очень понравилось, спасибо!',
      },
      {
        src: 'https://ir.ozone.ru/s3/rp-photo-2/wc800/dfd4aa37-eb0a-453c-bb11-055fb277b3f4.jpeg',
        user: 'User Name',
        date: '20 августа 2021',
        comment: 'Очень понравилось, спасибо!',
      },
      {
        src: 'https://ir.ozone.ru/s3/rp-photo-5/wc800/2449f614-6b87-4c63-a4e2-78e0594c12bd.jpeg',
        user: 'User Name',
        date: '20 августа 2021',
        comment: 'Очень понравилось, спасибо!Очень понравилось, спасибо!Очень понравилось, спасибо!Очень понравилось, спасибо!Очень понравилось, спасибо!Очень понравилось, спасибо!',
      }];

      const addComment = (comment) => {
        setReviews([...reviews, comment]);
      };
  return (
    <Tabs variant='soft-rounded' colorScheme='blue'>
      <TabList mb='1em'>
        <Tab>
          Отзывы о товаре
          <Box as='span' ml='1' fontSize='xs' position='relative' top='-0.6em'>
            {reviews.length}
          </Box>
        </Tab>
        <Tab>
          Вопросы о товаре
          <Box as='span' ml='1' fontSize='xs' position='relative' top='-0.6em'>
            {questionsCount}
          </Box>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Box>
            {/* Здесь будет содержимое для "Отзывы о товаре" */}
            <MediaComments mediaList={mediaList}/>
            <SortComments/>
            {user.isAuth &&
            <>
            <Text>Оставте отзыв</Text>
            <CommentForm reviewerId={user.id} productId={productId} access_token={user.authData.access_token} addComment={addComment}/>
            </>
            }
            <ReviewsList reviews={reviews}/>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box>
            {/* Здесь будет содержимое для "Вопросы о товаре" */}
            Здесь будут вопросы о товаре.
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default ProductTabs;
