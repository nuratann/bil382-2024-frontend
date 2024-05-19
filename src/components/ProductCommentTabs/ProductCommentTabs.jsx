import * as React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box
} from '@chakra-ui/react';
import MediaComments from './MediaComments';
import SortComments from './SortComments';
import ReviewsList from './ReviewsList';

function ProductTabs({ reviews, questionsCount }) {
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
