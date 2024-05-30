import {Tabs, TabList, Tab, TabPanels, TabPanel, Text } from "@chakra-ui/react";
import UsersListPanel from "./UsersListPanel";
import RoleChangeRequests from "./RoleChangeRequests";

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
                <RoleChangeRequests/>
            </TabPanel>
            </TabPanels>
        </Tabs>
    );
}

export default AdminUsersTabs;