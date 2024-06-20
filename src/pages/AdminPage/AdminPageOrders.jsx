
import AdminPageNavbar from "../../components/AdminPageComponents/AdminPageNavbar";
import AdminPageProducts from "../../components/AdminPageComponents/adminCommnetsAndProducst/adminProducts";
import { Flex, Box } from "@chakra-ui/react";

function AdminPageOrders(){
    return(
        <>
        <Flex>
                <AdminPageNavbar />
                <Box flex="1" p="4" ml={{ base: 0, md: "200px" }}>
                    <AdminPageProducts />
                </Box>
            </Flex>
        </>
    );
}

export default AdminPageOrders;