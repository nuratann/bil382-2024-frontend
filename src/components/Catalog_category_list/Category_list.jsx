import { Link, ListItem, Icon } from "@chakra-ui/react";

function Category_list({ href, icon, children }) {
    return (
        <ListItem>
            <Link
                textDecoration="none"
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                letterSpacing=".2px"
                transition="var(--transition)"
                transitionProperty="color"
                borderRadius="12px"
                alignItems="center"
                boxSizing="border-box"
                color="#070707"
                display="flex"
                gap="8px"
                minHeight="48px"
                padding="5px 8px"
                href={href}

                css={`
                    &:hover {
                        text-decoration: none;
                        color: #005bff;
                        background-color: rgba(204, 204, 204, 0.2);
                        border-radius: 14px;
                    }

                    &:hover > span {
                        color: #005bff;
                    }

                    &:hover > svg {
                        fill: #005bff;
                    }
                `}
            >
                {icon && (
                    <Icon
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        height="6"
                        width="6"
                        fill="rgb(204, 204, 204)"
                    >
                        {icon}
                    </Icon>
                )}

                <span>{children}</span>
            </Link>
        </ListItem>
    );
}

export default Category_list;
