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
    <Box p={5} shadow="md" 
            height="max-content"
            flexDirection={"column"}
            width="1160px"
            bgColor="white"
            display="flex"
            ml="30px"
            mt="30px"
            mb="50px"
            borderRadius="28px"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)">
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
    </Box>
  );
};

export default ReturnsComponents;