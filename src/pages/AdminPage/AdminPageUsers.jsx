import { Flex, Box } from "@chakra-ui/react";
import AdminPageNavbar from "../../components/AdminPageComponents/AdminPageNavbar";
import AdminUsersTabs from "../../components/AdminPageComponents/UsersComponents/AdminUsersTabs";

function AdminPageUsers() {
    return (
        <Flex>
            <AdminPageNavbar />
            <Box flex="1" p="4" ml={{ base: 0, md: "200px" }}> {/* Адаптивный отступ слева */}
                <AdminUsersTabs />
            </Box>
        </Flex>
    );
}

export default AdminPageUsers;