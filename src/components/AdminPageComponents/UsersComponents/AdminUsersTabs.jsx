import {Tabs, TabList, Tab, TabPanels, TabPanel, Text } from "@chakra-ui/react";
import UsersListPanel from "./UsersListPanel";

function AdminUsersTabs(){
    return(
        <Tabs isFitted variant="enclosed">
            <TabList mb='1em'>
                <Tab fontSize={"18px"} fontWeight={"bold"}>Редактировать пользователей</Tab>
                <Tab fontSize={"18px"} fontWeight={"bold"}>Запросы</Tab>
            </TabList>
            <TabPanels>
            <TabPanel>
                <UsersListPanel/>
            </TabPanel>
            <TabPanel>
                <Text>Здесь будет список запросов на смену роли пользователей.</Text>
                {/* Компоненты для обработки запросов на смену роли */}
            </TabPanel>
            </TabPanels>
        </Tabs>
    );
}

export default AdminUsersTabs;