import AdminPageNavbar from "../../components/AdminPageComponents/AdminPageNavbar";
import AdminAdds from "../../components/AdminPageComponents/AdminAdds";
import { Flex, Box } from "@chakra-ui/react";


function AdminPageAds() {
    return (
        <>
            <AdminPageNavbar />
            <Box flex="1" p="4" ml={{ base: 0, md: "200px" }}>
                <AdminAdds />
            </Box>

        </>
    );
}

export default AdminPageAds;