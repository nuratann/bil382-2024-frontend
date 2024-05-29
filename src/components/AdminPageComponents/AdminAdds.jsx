import { useState } from "react";
import { Flex, Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, Textarea, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

function AdminAdds() {
    const [isOpen, setIsOpen] = useState(false);
    const [ads, setAds] = useState([
        { id: 1, image: "https://www.shutterstock.com/image-vector/mega-sale-advertiving-banner-3d-260nw-2000590271.jpg", headerDescription: "Объявление 1", ownerInformation: "Владелец 1", productDetails: "Детали 1", salePeriod: "2024-06-01" },
        { id: 2, image: "https://www.shutterstock.com/image-vector/mega-sale-advertiving-banner-3d-260nw-2000590271.jpg", headerDescription: "Объявление 2", ownerInformation: "Владелец 2", productDetails: "Детали 2", salePeriod: "2024-06-05" },
        { id: 3, image: "https://www.shutterstock.com/image-vector/mega-sale-advertiving-banner-3d-260nw-2000590271.jpg", headerDescription: "Объявление 3", ownerInformation: "Владелец 3", productDetails: "Детали 3", salePeriod: "2024-06-10" },
        { id: 4, image: "https://www.shutterstock.com/image-vector/mega-sale-advertiving-banner-3d-260nw-2000590271.jpg", headerDescription: "Объявление 4", ownerInformation: "Владелец 4", productDetails: "Детали 4", salePeriod: "2024-06-15" }
    ]);

    const [newAd, setNewAd] = useState({
        id: Date.now(),
        image: "",
        headerDescription: "",
        ownerInformation: "",
        productDetails: "",
        salePeriod: ""
    });

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const handleSaveAd = () => {
        setAds([...ads, newAd]);
        setIsOpen(false);
        setNewAd({
            id: Date.now(),
            image: "",
            headerDescription: "",
            ownerInformation: "",
            productDetails: "",
            salePeriod: ""
        });
    };

    const handleDeleteAd = (adId) => {
        const updatedAds = ads.filter(ad => ad.id !== adId);
        setAds(updatedAds);
    };

    const handleEditAd = (adId) => {
        // Logic to edit ad
    };

    return (
        <>
            <Button onClick={handleOpenModal} mb={4}>Создать объявление</Button>
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Создать объявление</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl mb={4}>
                            <FormLabel>Загрузить изображение</FormLabel>
                            <Input type="file" onChange={(e) => setNewAd({ ...newAd, image: e.target.value })} />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel>Заголовок объявления</FormLabel>
                            <Textarea value={newAd.headerDescription} onChange={(e) => setNewAd({ ...newAd, headerDescription: e.target.value })} />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel>Информация о владельце</FormLabel>
                            <Input value={newAd.ownerInformation} onChange={(e) => setNewAd({ ...newAd, ownerInformation: e.target.value })} />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel>Детали продукта</FormLabel>
                            <Input value={newAd.productDetails} onChange={(e) => setNewAd({ ...newAd, productDetails: e.target.value })} />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel>Период продажи</FormLabel>
                            <Input type="date" value={newAd.salePeriod} onChange={(e) => setNewAd({ ...newAd, salePeriod: e.target.value })} />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleCloseModal}>Закрыть</Button>
                        <Button colorScheme="green" onClick={handleSaveAd}>Сохранить</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Изображение</Th>
                        <Th>Заголовок объявления</Th>
                        <Th>Информация о владельце</Th>
                        <Th>Детали продукта</Th>
                        <Th>Период продажи</Th>
                        <Th>Действия</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {ads.map(ad => (
                        <Tr key={ad.id}>
                            <Td><img src={ad.image} alt={ad.headerDescription} style={{ width: "50px", height: "50px" }} /></Td>
                            <Td>{ad.headerDescription}</Td>
                            <Td>{ad.ownerInformation}</Td>
                            <Td>{ad.productDetails}</Td>
                            <Td>{ad.salePeriod}</Td>
                            <Td>
                                <Button colorScheme="blue" mr={2} onClick={() => handleEditAd(ad.id)}>Редактировать</Button>
                                <Button colorScheme="red" onClick={() => handleDeleteAd(ad.id)}>Удалить</Button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </>
    );
}

export default AdminAdds;
