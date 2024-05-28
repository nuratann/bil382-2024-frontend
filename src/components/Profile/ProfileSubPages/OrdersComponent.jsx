import React, { useState } from 'react';
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Button,
} from '@chakra-ui/react';
import OrderCard from '../../OrdersCard/OrderCard';

const OrdersComponent = () => {
  // состояние для отслеживания активного вкладки
  const [tabIndex, setTabIndex] = useState(0);

  // Можно определить массив заказов для каждой категории
  // const orders = {
  //   awaitingPayment: [...],
  //   inProgress: [...],
  //   completed: [...],
  //   cancelled: [...],
  // };

  return (
    <>
      <Tabs index={tabIndex} onChange={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Все</Tab>
          <Tab>Ожидают оплаты</Tab>
          <Tab>В работе</Tab>
          <Tab>Выполненные</Tab>
          <Tab>Отмененные</Tab>
        </TabList>
        <TabPanels>
           <TabPanel>
            {/* Содержимое для заказов ожидающих оплаты */}
            <OrderCard status="Ожидают оплаты" />
            <OrderCard status="В работе" />
            <OrderCard status="Выполненные" />
            <OrderCard status="Отмененные" />
          </TabPanel>
          <TabPanel>
            <OrderCard status="Ожидают оплаты" />
            <OrderCard status="Ожидают оплаты" />
            <OrderCard status="Ожидают оплаты" />
            <OrderCard status="Ожидают оплаты" />
          </TabPanel>
          <TabPanel>
            <OrderCard status="В работе" />
            <OrderCard status="В работе" />
            <OrderCard status="В работе" />
            <OrderCard status="В работе" />
          </TabPanel>
          <TabPanel>
            <OrderCard status="Выполненные" />
            <OrderCard status="Выполненные" />
            <OrderCard status="Выполненные" />
            <OrderCard status="Выполненные" />
          </TabPanel>
          <TabPanel>
            <OrderCard status="Отмененные" />
            <OrderCard status="Отмененные" />
            <OrderCard status="Отмененные" />
            <OrderCard status="Отмененные" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default OrdersComponent;
