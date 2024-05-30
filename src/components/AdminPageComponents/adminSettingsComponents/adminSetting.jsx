import { ChakraProvider, Box, Tabs, TabList, TabPanels, Tab, TabPanel, FormControl, FormLabel, Input, Button, Select, Switch, RadioGroup, Radio, HStack } from '@chakra-ui/react';



function AdminSetting() {

    return (

        <ChakraProvider>
            <Box p={4}>
                <Tabs variant="enclosed">
                    <TabList>
                        <Tab>Магазины</Tab>
                        <Tab>Локализация</Tab>
                        <Tab>Продукты</Tab>
                        <Tab>Пользователи</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <StoreSettings />
                        </TabPanel>
                        <TabPanel>
                            <LocalizationSettings />
                        </TabPanel>
                        <TabPanel>
                            <ProductsSettings />
                        </TabPanel>
                        <TabPanel>
                            <CustomersSettings />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </ChakraProvider>
    );
}

function StoreSettings() {
    return (
        <Box as="form" p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg">
            <FormControl isRequired mb={4}>
                <FormLabel>Название магазина</FormLabel>
                <Input placeholder="Магазин" />
            </FormControl>
            <FormControl isRequired mb={4}>
                <FormLabel>Продавец</FormLabel>
                <Input placeholder="Продавец" />
            </FormControl>
            <FormControl isRequired mb={4}>
                <FormLabel>Адресс</FormLabel>
                <Input placeholder="Адресс" />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Почтовый индекс</FormLabel>
                <Input placeholder="Почтовый индекс" />
            </FormControl>
            <FormControl isRequired mb={4}>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Email" />
            </FormControl>
            <FormControl isRequired mb={4}>
                <FormLabel>Телефон</FormLabel>
                <Input type="tel" placeholder="Телефон" />
            </FormControl>

            <Button colorScheme="blue" type="submit">Сохранить</Button>
        </Box>
    );
}


function LocalizationSettings() {
    return (
        <Box as="form" p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg">
            <FormControl isRequired mb={4}>
                <FormLabel>Страна</FormLabel>
                <Select placeholder="Выбрать страну">
                    <option value="kg">Кыргызстан</option>
                    <option value="kz">Казахстан</option>
                    <option value="ru">Россия</option>
                    <option value="uz">Узекистан</option>
                    <option value="--">Другие страны</option>

                </Select>
            </FormControl>
            <FormControl isRequired mb={4}>
                <FormLabel>Язык</FormLabel>
                <Select placeholder="Выбрать язык">
                    <option value="ru">Русский</option>
                    <option value="kg">Кыргызча</option>
                    <option value="en">English</option>
                </Select>
            </FormControl>
            <FormControl isRequired mb={4}>
                <FormLabel>Валюта</FormLabel>
                <Select placeholder="Выбрать валюту">
                    <option value="usd">СОМ</option>
                    <option value="eur">РУБЛЬ</option>
                    <option value="gbp">ТЕНГЕ</option>
                    <option value="cad">USD</option>
                </Select>
            </FormControl>

            <Button colorScheme="blue" type="submit">Сохранить</Button>
        </Box>
    );
}

function ProductsSettings() {
    return (
        <Box as="form" p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg">
            <FormControl mb={4}>
                <FormLabel>Количество продуктов в категории</FormLabel>
                <RadioGroup defaultValue="yes">
                    <HStack spacing="24px">
                        <Radio value="yes">Да</Radio>
                        <Radio value="no">Нет</Radio>
                    </HStack>
                </RadioGroup>
            </FormControl>
            <FormControl isRequired mb={4}>
                <FormLabel>Количество элементов на странице по умолчанию</FormLabel>
                <Input type="number" defaultValue={10} />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Разрешить отзывы</FormLabel>
                <RadioGroup defaultValue="yes">
                    <HStack spacing="24px">
                        <Radio value="yes">Да</Radio>
                        <Radio value="no">Нет</Radio>
                    </HStack>
                </RadioGroup>
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Разрешить отзывы гостей</FormLabel>
                <RadioGroup defaultValue="yes">
                    <HStack spacing="24px">
                        <Radio value="yes">Да</Radio>
                        <Radio value="no">Нет</Radio>
                    </HStack>
                </RadioGroup>
            </FormControl>
            <FormControl isRequired mb={4}>
                <FormLabel>Минимальное количество купонов/подарочных сертфикатов</FormLabel>
                <Input type="number" defaultValue={1} />
            </FormControl>
            <FormControl isRequired mb={4}>
                <FormLabel>Максимальное количество купонов/подарочных сертфикатов</FormLabel>
                <Input type="number" defaultValue={10} />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Показывать цены с налогом</FormLabel>
                <RadioGroup defaultValue="yes">
                    <HStack spacing="24px">
                        <Radio value="yes">Да</Radio>
                        <Radio value="no">Нет</Radio>
                    </HStack>
                </RadioGroup>
            </FormControl>
            <FormControl isRequired mb={4}>
                <FormLabel>Ставка налога по умолчанию</FormLabel>
                <Input type="number" defaultValue={15} step="0.01" />
            </FormControl>
            <Button colorScheme="blue" type="submit">Сохранить</Button>
        </Box>
    );
}



function CustomersSettings() {
    return (
        <Box as="form" p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg">
            <FormControl mb={4}>
                <FormLabel>Пользователи в сети</FormLabel>
                <RadioGroup defaultValue="yes">
                    <HStack spacing="24px">
                        <Radio value="yes">Да</Radio>
                        <Radio value="no">Нет</Radio>
                    </HStack>
                </RadioGroup>
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Активность пользователей</FormLabel>
                <RadioGroup defaultValue="yes">
                    <HStack spacing="24px">
                        <Radio value="yes">Да</Radio>
                        <Radio value="no">Нет</Radio>
                    </HStack>
                </RadioGroup>
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Поиски пользователей</FormLabel>
                <RadioGroup defaultValue="yes">
                    <HStack spacing="24px">
                        <Radio value="yes">Да</Radio>
                        <Radio value="no">Нет</Radio>
                    </HStack>
                </RadioGroup>
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Разрешить гостевую покупку</FormLabel>
                <RadioGroup defaultValue="yes">
                    <HStack spacing="24px">
                        <Radio value="yes">Да</Radio>
                        <Radio value="no">Нет</Radio>
                    </HStack>
                </RadioGroup>
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Показать цены при входе</FormLabel>
                <RadioGroup defaultValue="yes">
                    <HStack spacing="24px">
                        <Radio value="yes">Да</Radio>
                        <Radio value="no">Нет</Radio>
                    </HStack>
                </RadioGroup>
            </FormControl>
            <FormControl isRequired mb={4}>
                <FormLabel>Максимальное количество попыток входа</FormLabel>
                <Input type="number" defaultValue={5} />
            </FormControl>
            <Button colorScheme="blue" type="submit">Сохранить</Button>
        </Box>
    );
}



export default AdminSetting;