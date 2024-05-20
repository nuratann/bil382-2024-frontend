import React, { useState, useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import CategoryList from './CategoryList';
import CategoryListInside from './CategoryListInside';
import { categories } from './CatalogData.jsx';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { ElectronicsIcon, ClothingIcon, ShoesIcon, HousingAndgardening, ChildItems, HealthBeauty, BytovayaTech, Remont, Sport, Food, Pharmacy, Zootovar, Books, Tourism, Accessouars, Mebel, GameConsole, Schoolsupplies, Hygen, Auto } from './CatalogIcons';
import { TbHorseToy } from "react-icons/tb";
import { LuMicrowave } from "react-icons/lu";
import { useTranslation } from 'react-i18next';
import { IoCarOutline } from 'react-icons/io5';
import { MdWeekend, MdLightbulbOutline } from 'react-icons/md';
import catalogEn from './CatalogDataEn.json'
import catalogRu from './CatalogDataRu.json'
import catalogKg from './CatalogDataKg.json'



function MainCatalog() {
    // const [activeCategory, setActiveCategory] = useState(categories[0].name);

    // const handleMouseEnter = (categoryName) => {
    //     setActiveCategory(categoryName);
    // };

    // const handleMouseLeave = () => {
    //     setActiveCategory(categories[0].name);
    // };
    // const { t, i18n } = useTranslation();
    // const catalog = i18n.language === 'en' ? catalogEn : catalogRu;

    const { i18n } = useTranslation();
    const [catalog, setCatalog] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');

    useEffect(() => {
        const loadCatalog = () => {
            switch (i18n.language) {
                case 'en':
                    setCatalog(catalogEn);
                    break;
                case 'ru':
                    setCatalog(catalogRu);
                    break;
                case 'kg':
                    setCatalog(catalogKg);
                    break;
                default:
                    setCatalog(catalogRu);
                    break;
            }
        };

        loadCatalog();

        // Set default active category when the component mounts
        const defaultCategory = getDefaultCategory();
        setActiveCategory(defaultCategory);
    }, [i18n.language]);

    // Function to get the default active category based on the current language
    const getDefaultCategory = () => {
        switch (i18n.language) {
            case 'en':
                return catalogEn.length > 0 ? catalogEn[0].name : '';
            case 'ru':
                return catalogRu.length > 0 ? catalogRu[0].name : '';
            case 'kg':
                return catalogKg.length > 0 ? catalogKg[0].name : '';
            default:
                return '';
        }
    };

    const handleMouseEnter = (categoryName) => {
        setActiveCategory(categoryName);
    };


    const handleMouseLeave = () => {
        setActiveCategory('');
    };


    return (
        <Box bg="#fff"
            overflow="hidden"
            padding="14px 0"
            zIndex="1000"
            boxSizing="border-box"
            width="1380px"
            height="max-content">
            <Flex direction="column" margin="0 auto" height="111vh">
                {catalog.map((category) => (
                    <React.Fragment key={category.name}>
                        <div style={{ display: "flex", gap: "50px" }}>
                            <Link to={`/categories/${category.name}`} style={{ textDecoration: "none" }}>
                                <div
                                    onMouseEnter={() => handleMouseEnter(category.name)}
                                    onMouseLeave={handleMouseLeave}
                                    style={{ width: "250px", cursor: "pointer" }}
                                >
                                    <CategoryList
                                        href={`/categories/${category.name}`}
                                        icon={getIcon(category.iconKey, '27px')}
                                    >
                                        {category.name}
                                    </CategoryList>
                                </div>
                            </Link>
                            {activeCategory === category.name && (
                                <div style={{ position: "absolute", top: "0px", left: "100px" }}>
                                    <CategoryListInside
                                        height="max-content"
                                        categoryName={category.name}
                                        items={category.items}
                                    />
                                </div>
                            )}
                        </div>
                    </React.Fragment>
                ))}
            </Flex>
        </Box >
    );

}

export default MainCatalog;



const getIcon = (key, size) => {
    switch (key) {
        case 'Electronics':
            return < ElectronicsIcon fontSize={size} />;
        case 'Clothing':
            return <ClothingIcon fontSize={size} />;
        case 'homeAndGarden':
            return <HousingAndgardening fontSize={size} />;
        case 'baby':
            return <TbHorseToy fontSize={size} />;
        case 'HealthBeauty':
            return <HealthBeauty fontSize={size} />;
        case 'BytovayaTech':
            return <BytovayaTech fontSize={size} />;
        case 'homeAppliances':
            return <LuMicrowave fontSize={size} />;
        case 'Remont':
            return <Remont fontSize={size} />;
        case 'Sport':
            return <Sport fontSize={size} />;
        case 'Food':
            return <Food fontSize={size} />;
        case 'Pharmacy':
            return <Pharmacy fontSize={size} />;
        case 'Zootovar':
            return <Zootovar fontSize={size} />;
        case 'Books':
            return <Books fontSize={size} />;
        case 'Tourism':
            return <Tourism fontSize={size} />;
        case 'Accessouars':
            return <MdLightbulbOutline fontSize={size} />;
        case 'Mebel':
            return <MdWeekend fontSize={size} />;
        case 'GameConsole':
            return <GameConsole fontSize={size} />;
        case 'Shoolsupplies':
            return <Schoolsupplies fontSize={size} />;
        case 'Hygen':
            return <Hygen fontSize={size} />;
        case 'Auto':
            return <IoCarOutline fontSize={size} />;
        default:
            return null;
    }
};
