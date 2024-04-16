// Breadcrumb/Breadcrumb.jsx

import React from 'react';
import { 
  Breadcrumb as ChakraBreadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  useColorModeValue 
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const Breadcrumb = ({ items }) => {
  const linkColor = useColorModeValue("blue", "blue.900");
  const linkHoverColor = useColorModeValue("blue.500", "blue.100");

  return (
    <ChakraBreadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />} w="80%" m={"0 auto"} p={"16px"}>
      {items.map((item, index) => (
        <BreadcrumbItem key={index} isCurrentPage={index === items.length}>
            <BreadcrumbLink
            fontFamily={'Montserrat'}
            fontWeight={'medium'}
            href={item.href}
            color={linkColor}
            _hover={{
                textDecoration: 'none',
                color: linkHoverColor,
                cursor: 'pointer',
            }}
            _focus={{
                boxShadow: 'none',
            }}
            >
            {item.text}
            </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </ChakraBreadcrumb>
  );
};

export default Breadcrumb;
