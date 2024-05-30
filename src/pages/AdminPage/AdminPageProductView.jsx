import AdminPageNavbar from "../../components/AdminPageComponents/AdminPageNavbar";
import AdminProductAndComments from "../../components/AdminPageComponents/adminCommnetsAndProducst/adminComments";
import { Flex, Box } from "@chakra-ui/react";


function AdminPageProductView() {
    return (
        <>
            <Flex>
                <AdminPageNavbar />
                <Box flex="1" p="4" ml={{ base: 0, md: "200px" }}>
                    <AdminProductAndComments />
                </Box>
            </Flex>

        </>
    );
}

export default AdminPageProductView;