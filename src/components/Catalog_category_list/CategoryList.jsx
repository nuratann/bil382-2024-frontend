import { ListItem, Link, Box, List } from "@chakra-ui/react";

function CategoryList({ href, icon, children, onClick }) {
    return (
        <List>
            <ListItem>
                <Link
                    href={href}
                    onClick={onClick}
                    textDecoration="none"
                    lineHeight="24px"
                    fontSize="16px"
                    fontWeight="400"
                    letterSpacing=".2px"
                    color="#070707"
                    display="flex"
                    alignItems="center"
                    gap="2px" // Chakra UI uses scale for gaps
                    p="5px 8px"
                    borderRadius="12px"
                    _hover={{
                        textDecoration: "none",
                        color: "#005bff",
                        backgroundColor: "rgba(204, 204, 204, 0.2)",
                        svg: { fill: "#005bff" } // Applying hover style to svg fill
                    }}
                >
                    {icon && (
                        <Box as="span" color="gray.400" _hover={{ color: "#005bff" }}>
                            {icon}
                        </Box>
                    )}
                    <span>{children}</span>
                </Link>
            </ListItem>
        </List>
    );
}

export default CategoryList;

