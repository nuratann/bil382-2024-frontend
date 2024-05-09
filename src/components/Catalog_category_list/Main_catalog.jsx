import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import CategoryList from './CategoryList';
import CategoryListInside from './CategoryListInside';
import { categories } from './CatalogData.jsx';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function MainCatalog() {
    const [activeCategory, setActiveCategory] = useState(categories[0].name);

    const handleMouseEnter = (categoryName) => {
        setActiveCategory(categoryName);
    };

    const handleMouseLeave = () => {
        setActiveCategory(categories[0].name);
    };

    return (
        <Box bg="#fff"
            overflow="hidden"
            padding="14px 0"
            zIndex="1000"
            boxSizing="border-box"
            width="1480px"
            height="max-content">
            <Flex direction="column" margin="0 auto" height="111vh" >
                {categories.map((category) => (
                    <React.Fragment key={category.name} >
                        <div style={{ display: "flex", gap: "50px" }}>
                            {/* Wrap category name with Link */}
                            <Link to={`/categories/${category.name}`} style={{ textDecoration: "none" }}>
                                <div
                                    onMouseEnter={() => handleMouseEnter(category.name)}
                                    onMouseLeave={handleMouseLeave}
                                    style={{ width: "250px", cursor: "pointer" }}>
                                    <CategoryList
                                        height="max-content"
                                        icon={category.icon}
                                        width="350px">
                                        {category.name}
                                    </CategoryList>
                                </div>
                            </Link>
                            {activeCategory === category.name && (
                                <div style={{ position: "absolute", top: "0px", left: "150px" }}>
                                    <CategoryListInside
                                        height="max-content"
                                        categoryName={category.name}
                                        items={category.items} />
                                </div>
                            )}
                        </div>
                    </React.Fragment>
                ))}
            </Flex>
        </Box>
    );
}

export default MainCatalog;
