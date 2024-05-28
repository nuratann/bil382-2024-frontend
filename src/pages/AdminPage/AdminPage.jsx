import { Box, Image, Flex } from "@chakra-ui/react";
import AdminPageNavbar from "../../components/AdminPageComponents/AdminPageNavbar";


function AdminPage() {
    
    return(
       <Flex> 
            <AdminPageNavbar />
            <Box flex="1" p="4" ml={{ base: 0, md: "200px" }}> {/* Адаптивный отступ слева */}
                <Image borderRadius={10} src='https://ir.ozone.ru/s3/cms/be/t08/wc2900/kyrgyz_desk.jpg' />
                
            </Box>
        </Flex>
    );
}

export default AdminPage;