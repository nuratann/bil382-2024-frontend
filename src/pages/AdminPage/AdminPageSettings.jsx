
import { Flex, Box } from "@chakra-ui/react";


import AdminPageNavbar from "../../components/AdminPageComponents/AdminPageNavbar";
import AdminSetting from "../../components/AdminPageComponents/adminSettingsComponents/adminSetting";

function AdminPageSettings() {
    return (
        <Flex>
            <AdminPageNavbar />
            <Box flex="1" p="4" ml={{ base: 0, md: "200px" }}>
                <AdminSetting />
            </Box>
        </Flex>
    );
}

export default AdminPageSettings;