import React from 'react';
import { Box, Flex, Text, Image, Button, Badge } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

const ReturnCard = ({ returnData }) => {
  const { status, date, orderId, amount, imageUrl } = returnData;

  // Стилизация статусов для возврата
  const statusSettings = {
    "Создан": {
      colorScheme: "blue",
      description: "Заявка на возврат создана. Если в течение 3 дней статус не изменится, отмените заказ и напишите в поддержку, чтобы создать его снова.",
      badgeText: "Создан"
    },
    "Одобрено": {
      colorScheme: "green",
      description: "Возврат одобрен. Средства будут возвращены вам в течение 5 рабочих дней.",
      badgeText: "Одобрено"
    },
    "Отказано": {
      colorScheme: "red",
      description: "Заявка на возврат отклонена. Пожалуйста, обратитесь в поддержку для уточнения деталей.",
      badgeText: "Отказано"
    }
  };

  const currentStatus = statusSettings[status];

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mb={4} boxShadow="sm" bg="white">
      <Flex justifyContent="space-between" alignItems="center" mb={2}>
        <Text fontWeight="bold">Заявка на возврат от {date}</Text>
        <Text fontWeight="bold">{amount} ₽</Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mb={2}>
        <Badge colorScheme={currentStatus.colorScheme} px={2} py={1}>{currentStatus.badgeText}</Badge>
        <Image boxSize="50px" objectFit="cover" src={imageUrl} alt="Product image" />
      </Flex>
      <Text fontSize="sm"><InfoIcon mr={2} />{currentStatus.description}</Text>
      <Button mt={3} colorScheme={currentStatus.colorScheme.toLowerCase()} variant="outline">Посмотреть полностью</Button>
    </Box>
  );
};

export default ReturnCard;
