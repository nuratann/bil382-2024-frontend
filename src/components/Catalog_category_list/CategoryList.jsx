import { ListItem, Link, Box, List } from "@chakra-ui/react";

function CategoryList({ href, icon, children, onClick }) {
    return (
        <List>
            <ListItem marginLeft="15px">
                <Link
                    href={href}
                    onClick={onClick}
                    textDecoration="none"
                    lineHeight="20px"
                    fontSize="16px"
                    fontWeight="550"
                    letterSpacing=".3px"
                    color="#070707"
                    display="flex"
                    alignItems="center"
                    gap="8"
                    p="5px 8px"
                    mr="10px"
                    borderRadius="18px"
                    _hover={{
                        textDecoration: "none",
                        color: "#005bff",
                        backgroundColor: "rgba(204, 204, 204, 0.2)",
                        svg: { fill: "#005bff" }
                    }}
                >
                    {icon && (
                        <Box as="span" boxSize={6} color="gray.400" fontSize="28px" _hover={{ color: "#005bff" }}>
                            {icon}
                        </Box>
                    )}
                    <span>{children}</span>
                </Link>
            </ListItem>
        </List >
    );
}

export default CategoryList;

