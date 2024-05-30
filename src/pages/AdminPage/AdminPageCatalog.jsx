import AdminPageNavbar from "../../components/AdminPageComponents/AdminPageNavbar";
import { Flex, Box } from "@chakra-ui/react";
import CategoryChangeRequests from "../../components/AdminPageComponents/CatalogComponents/CategoryChangeRequests";
import Catalog from "../../components/Header/Catalog";

function AdminPageCatalog() {
    return(
        <>
            <Flex>
                <AdminPageNavbar />
                <Box flex="1" p="4" ml={{ base: 0, md: "200px" }}>
                    <CategoryChangeRequests/>
                </Box>
            </Flex>
        </>
    );
}

export default AdminPageCatalog;