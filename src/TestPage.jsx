import { Text } from '@chakra-ui/react';
import React from 'react';

const TestPage = () => {
    console.log(JSON.parse("[{\"title\":\"цвет\",\"value\":[{\"title\":\"серый\",\"icon\":\"http://example.com/gray_icon.jpg\"},{\"title\":\"черный\",\"icon\":\"http://example.com/black_icon.jpg\"},{\"title\":\"синий\",\"icon\":\"http://example.com/blue_icon.jpg\"}]},{\"title\":\"размер\",\"value\":[{\"title\":\"маленький\",\"icon\":\"\"},{\"title\":\"средний\",\"icon\":\"\"},{\"title\":\"большой\",\"icon\":\"\"}]},{\"title\":\"тип\",\"value\":[{\"title\":\"классический\",\"icon\":\"\"},{\"title\":\"премиум\",\"icon\":\"\"},{\"title\":\"путешественник\",\"icon\":\"\"}]}]"))
    return(
        <>
            <Text>This is test page!</Text>
        </>
    )
}

export default TestPage