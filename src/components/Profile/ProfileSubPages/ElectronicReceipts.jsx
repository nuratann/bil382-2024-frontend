import React, { useState } from 'react';
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    IconButton,
    useColorModeValue,
    Heading
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';


const ElectronicReceipts = () => {
    const receipts = [
        { id: "4669870-0014", date: "1 ноября 2020 в 21:04", amount: "229 руб." },
        { id: "4669870-0014", date: "19 ноября 2020 в 15:28", amount: "229 руб." },
        { id: "4669870-0013", date: "15 ноября 2020 в 19:46", amount: "161 руб." },
        { id: "4669870-0013", date: "18 ноября 2020 в 15:22", amount: "161 руб." },
      ];
      const handleDownload = (id) => {
        console.log("Downloading receipt:", id);
        // Здесь логика для скачивания файла
      };
  return (
    <>
        <Heading  fontWeight="550" fontSize="20px" ml="20px" mb="20px">Электронные чеки</Heading>
        <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Заказ</Th>
            <Th>Дата создания чека</Th>
            <Th>Сумма</Th>
            <Th>Чек в PDF</Th>
          </Tr>
        </Thead>
        <Tbody>
          {receipts.map((receipt, index) => (
            <Tr key={index}>
              <Td>{receipt.id}</Td>
              <Td>{receipt.date}</Td>
              <Td>{receipt.amount}</Td>
              <Td>
                <IconButton
                  aria-label="Download receipt"
                  icon={<DownloadIcon />}
                  onClick={() => handleDownload(receipt.id)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default ElectronicReceipts;