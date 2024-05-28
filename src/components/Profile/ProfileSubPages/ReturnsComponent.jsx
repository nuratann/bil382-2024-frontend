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
import ReturnCard from '../../ReturnCard/ReturnCard';

const ReturnsComponents = () => {
  // состояние для отслеживания активного вкладки
  const [tabIndex, setTabIndex] = useState(0);
  const returnData = {
    status: "Отказано",
    date: "12 апреля",
    orderId: "97402398-R2",
    amount: "432,00",
    imageUrl: "https://via.placeholder.com/150"
  };
  return (
    <>
      <Tabs index={tabIndex} onChange={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Все</Tab>
          <Tab>Созданные возвраты</Tab>
          <Tab>Одобренные возвраты</Tab>
          <Tab>Отказанные возвраты</Tab>
        </TabList>
        <TabPanels>
           <TabPanel>
            {/* Все */}
            <ReturnCard returnData={returnData}/>
          </TabPanel>
          <TabPanel>
             {/* Созданные */}
          </TabPanel>
          <TabPanel>
            {/* Одоб */}
          </TabPanel>
          <TabPanel>
            {/* отказ */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default ReturnsComponents;