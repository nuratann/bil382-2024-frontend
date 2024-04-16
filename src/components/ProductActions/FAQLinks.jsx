import {Text, Grid, Link} from '@chakra-ui/react'

function FAQLinks() {
    return (
        <>
            <Text fontWeight={'bold'} fontSize={"14px"}>Часто задаваемые вопросы</Text>
            <Grid templateColumns="repeat(2, 1fr)" gap={2} width="320px">
                <Link color="blue.500" href="#" isExternal>Условия доставки</Link>
                <Link color="blue.500" href="#" isExternal>Возврат товаров</Link>
                <Link color="blue.500" href="#" isExternal>Способы оплаты</Link>
                <Link color="blue.500" href="#" isExternal>Возврат денег</Link>
            </Grid>
        </>
    );
}

export default FAQLinks;