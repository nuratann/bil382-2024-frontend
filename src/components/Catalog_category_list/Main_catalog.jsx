import React, { useState } from 'react';
import { Box, Flex, Icon, position } from '@chakra-ui/react';
import CategoryList from './CategoryList';
import CategoryListInside from './CategoryListInside';
import { ElectronicsIcon, ClothingIcon, ShoesIcon } from './CatalogIcons';

function MainCatalog() {
    const [activeCategory, setActiveCategory] = useState(null);

    const categories = [
        {
            name: "Electronics",
            items: [{ subcategories: [{ name: "Televisions", link: "/televisions", subLink: "/more-televisions" }, { name: "Smartphones", link: "/smartphones", subLink: "/more-smartphones" }, { name: "Sneakers", link: "/sneakers", subLink: "/more-sneakers" }, { name: "Sneakers", link: "/sneakers", subLink: "/more-sneakers" }, { name: "Sneakers", link: "/sneakers", subLink: "/more-sneakers" }, { name: "Sneakers", link: "/sneakers", subLink: "/more-sneakers" }] }],
            icon: <ElectronicsIcon />
        },
        {
            name: "Clothing",
            items: [{ subcategories: [{ name: "Men's Clothing", link: "/mens-clothing", subLink: "/more-mens-clothing" }, { name: "Women's Clothing", link: "/womens-clothing", subLink: "/more-womens-clothing" }] }],
            icon: <ClothingIcon />
        },
        {
            name: "Shoes",
            items: [{ subcategories: [{ name: "Running Shoes", link: "/running-shoes", subLink: "/more-running-shoes" }, { name: "Sneakers", link: "/sneakers", subLink: "/more-sneakers" }] }],
            icon: <ShoesIcon />
        }
        // Add more categories as needed
    ];




    const toggleCategory = (categoryName) => {
        setActiveCategory(activeCategory === categoryName ? null : categoryName);
    };

    return (
        <Box bg="#fff" padding="14px 0" overflow="auto" width={`1200px`} height={`500px`}>
            <Flex direction="column" maxWidth="1472px" margin="0 auto">
                {categories.map((category) => (
                    <React.Fragment key={category.name} >
                        <div style={{ display: "flex", gap: "50px" }}>
                            <div>
                                <CategoryList
                                    href="#"
                                    icon={category.icon}
                                    onClick={() => toggleCategory(category.name)}
                                >
                                    {category.name}
                                </CategoryList>
                            </div>
                            <div style={{ position: "absolute", top: "0px", left: "150px" }}>
                                {activeCategory === category.name && (
                                    <CategoryListInside categoryName={category.name} items={category.items} />
                                )}
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </Flex>
        </Box>
    );
}

export default MainCatalog;

// import CategoryList from "./CategoryList.jsx";
// import CategoryListInside from "./CategoryListInside.jsx";
// import React, { useState } from 'react';

// import { ElectronicsIcon, ClothingIcon, ShoesIcon } from "./CatalogIcons.jsx";


// import { Box, Flex, Icon, Link, List, ListItem, Text, Button } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";

// function MainCatalog() {
//     const [activeCategory, setActiveCategory] = useState(null);

//     const categories = [
//         {
//             name: "Electronics",
//             items: [{ subcategories: [{ name: "Televisions", link: "/televisions", subLink: "/more-televisions" }, { name: "Smartphones", link: "/smartphones", subLink: "/more-smartphones" }] }],
//             icon: <ElectronicsIcon />
//         },
//         {
//             name: "Clothing",
//             items: [{ subcategories: [{ name: "Men's Clothing", link: "/mens-clothing", subLink: "/more-mens-clothing" }, { name: "Women's Clothing", link: "/womens-clothing", subLink: "/more-womens-clothing" }] }],
//             icon: <ClothingIcon />
//         },
//         {
//             name: "Shoes",
//             items: [{ subcategories: [{ name: "Running Shoes", link: "/running-shoes", subLink: "/more-running-shoes" }, { name: "Sneakers", link: "/sneakers", subLink: "/more-sneakers" }] }],
//             icon: <ShoesIcon />
//         }
//         // Add more categories as needed
//     ];

//     const toggleCategory = (categoryName) => {
//         setActiveCategory(activeCategory === categoryName ? null : categoryName);
//     };

//     return (
//         <Box
//             bg="#fff"
//             overflow="auto"
//             padding="14px 0"
//             zIndex="1000"
//             boxSizing="border-box"
//             width="100%"
//             height="calc(100vh - 100px)" // corrected the height expression
//         >
//             <Flex
//                 display="flex"
//                 height="100%"
//                 margin="0 auto"
//                 maxWidth="1472px"
//                 minWidth="1280px"
//                 padding="0 28px 0 15px"
//                 position="relative"
//             >
//                 <Box
//                     fontFamily="GTEestiPro, arial, sans-serif"
//                     color="#001a34"
//                     fontSize="14px"
//                     fontWeight="400"
//                     lineHeight="18px"
//                     overflowY="auto"
//                     paddingRight="12px"
//                     width="282px"
//                     flexDirection="column"
//                     gap="14px"
//                 >
//                     {categories.map((category) => (
//                         <React.Fragment key={category.name}>
//                             <CategoryList
//                                 href="#"
//                                 icon={category.icon}
//                                 onClick={() => toggleCategory(category.name)}
//                             >
//                                 {category.name}
//                             </CategoryList>
//                             {activeCategory === category.name && (
//                                 <CategoryListInside categoryName={category.name} items={category.items} />
//                             )}
//                         </React.Fragment>
//                     ))}
//                 </Box>
//             </Flex>
//         </Box>
//     );
// }

// export default MainCatalog;

// function Main_catalog() {
//     return (
//         <Box
//             bg="#fff"
//             bottom="0"
//             left="0"
//             overflow="auto"
//             padding="14px 0"
//             right="0"
//             transition=".3s"
//             zIndex="1000"
//             boxSizing="border-box"
//             width="100%"
//             height="-100px + 100hv"
//         >
//             <Flex
//                 display="flex"
//                 height="100%"
//                 margin="0 auto"
//                 maxWidth="1472px"
//                 minWidth="1280px"
//                 padding="0 28px 0 15px"
//                 position="relative"
//             >
//                 <Box
//                     fontFamily="GTEestiPro, arial, sans-serif"
//                     color="#001a34"
//                     fontSize="14px"
//                     fontWeight="400"
//                     lineHeight="18px"
//                     overflowY="auto"
//                     paddingRight="12px"
//                     width="282px"
//                     flexDirection="column"
//                     gap="14px"
//                 >
//                     <List listStyle="none" margin="0" padding="0">
//                         <ListItem>
//                             <Category_list icon={<path
//                                 d="M6.002 8C6.002 3.002 7 3.002 11 3.002h2c4 0 5 0 5 4.998v1.229c0 2.092.002 5.706-.002 6.77C17.98 20.999 17 21 13 21h-2c-4 0-4.998-.001-4.998-5v-1.74C6 12.135 5.999 8.982 6.002 8M10 6a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1m2 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />}>
//                                 Электроника
//                             </Category_list>
//
//                             <Category_list icon={<path
//                                 d="M6 15c0 4 .357 5 6 5s6-1 6-5c0-3.085-.136-3.886.202-4.263.21-.234.602-.305 1.322-.657 1.881-.92 1.881-1.08.47-3.58-.47-.833-1.41-2.5-3.291-2.5s-2.117.5-2.352 1-.47 1-2.351 1c-1.87 0-2.113-.494-2.358-.992C9.395 4.506 9.147 4 7.212 4 5.416 4 4.476 5.667 4.006 6.5c-1.411 2.5-1.411 2.66.47 3.58.717.35 1.109.434 1.32.675.34.392.204 1.2.204 4.245m7-6h1a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2"
//                             />}>
//                                 Одежда
//                             </Category_list>
//
//                             <Category_list icon={<path
//                                 d="M11 6c1.074 0 2.292.288 3.5.768.513.204.734.334.182.843l-.536.535a.5.5 0 0 0 .708.708l.883-.884c.38-.381.427-.428.917-.136.46.274.346.486-.005.81l-.503.502a.5.5 0 0 0 .708.708l.565-.566c.278-.278.724-.47 1.27 0C20.065 10.476 21 11.816 21 13v.5c0 1.066-.46 1.5-1.5 1.5H8c-.924 0-.992-.255-1.15-.848L6.808 14a4 4 0 0 0-1.017-1.791A4 4 0 0 0 4 11.192l-.203-.055c-.744-.2-.796-.215-.796-1.137C3 7.994 3.513 7.97 4.594 7.994Q4.781 8 5 8c.57 0 .748.358.952.772C6.23 9.335 6.558 10 8 10c1.648 0 1.781-1.207 1.902-2.295C10 6.812 10.09 6 11 6"
//                             />}>
//                                 Обувь
//
//                             </Category_list>
//
//                             <Category_list icon={<path
//                                 d="M5.038 4.96c.2 1.693.745 3.954 2.226 4.693 1.063.53 2.73.34 3.69.163.032.659.042 1.383.045 2.184H7.5c-3 0-2.778 1-2 4.5S7 21 12 21s5.722-1 6.5-4.5 1-4.5-2-4.5H13c-.004-1.1-.02-2.114-.096-3.02-.098-1.172-.3-2.259-.759-3.177a4.45 4.45 0 0 0-2.553-2.2c-.854-.323-1.816-.49-2.644-.574-1.681-.172-2.086.42-1.909 1.931"
//                             />}>
//                                 Дом и сад
//                             </Category_list>
//
//                             <Category_list icon={<path
//                                 d="M11.5 3c3.177 0 5.265 1 5.265 1.5 0 .58-.634.936-1.473 1.154.281.708.414 1.51.414 2.346 0 .608-.22.88-1.059 1-2.44.35-6.353 1.76-6.353 4.5 0 1.068.466 1.96 1.25 2.575.774.608 1.828.925 2.985.925 1.24 0 2.293-.583 3.022-1.271a4.7 4.7 0 0 0 .872-1.106c.204-.367.342-.762.342-1.123 0-.276-.237-.5-.53-.5-.292 0-.53.224-.53.5 0 .139-.06.37-.22.659a3.7 3.7 0 0 1-.683.862c-.595.562-1.394.979-2.273.979-.96 0-1.76-.263-2.308-.694-.54-.424-.868-1.033-.868-1.806 0-1.165 1.023-2.047 2.705-2.658.687-.25 1.736-.456 2.61-.627.4-.079.763-.15 1.038-.215a21 21 0 0 0 2.285-.673c.574-.2.94-.327 1.42-.327C20.979 9 21 11 21 13s-.13 7-8.47 7C7.234 20 3 18.577 3 15.021c0-2.496 1.632-3.25 2.87-3.822C6.626 10.85 7 10.57 7 10c0-.771-.514-.888-.878-.97L6 9c-1.09-.285-2-.97-2-2 0-.45.364-.922 1-1 .907-.11 1.77-.366 2.483-1.08C8.613 3.784 9.813 3 11.5 3M10 6a.98.98 0 0 0-1-1 .98.98 0 0 0-1 1c0 .552.415 1 1 1a.98.98 0 0 0 1-1"
//                             />}>
//                                 Детские товары
//                             </Category_list>
//
//                             <Category_list icon={<path
//                                 d="M16 5.237C16 4.002 15.023 3 13.818 3c-.737 0-1.411.376-1.818.957A2.23 2.23 0 0 0 10.182 3C8.977 3 8 4.002 8 5.237 8 7.16 10.101 9 12 9c1.898 0 4-1.84 4-3.763M7 9c-2 0-4 2.064-4 5 0 4.941 3.236 7 9 7 5.765 0 9-2.059 9-7 0-2.936-2-5-4-5s-3.154 1-5 1-3-1-5-1m5 8c-1.657 0-3-.672-3-1.5s1.343-1.5 3-1.5 3 .672 3 1.5-1.343 1.5-3 1.5"
//                             />}>
//                                 Красота и здоровье
//                             </Category_list>
//
//                             <Category_list icon={<path
//                                 d="M20 6c0 2-1.333 2-8 2S4 8 4 6s1.333-2 8-2 8 0 8 2m-4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-2-1a1 1 0 1 0-2 0 1 1 0 0 0 2 0M7.908 8.968C8.985 9 10.331 9 11.985 9h.03c1.654 0 3 0 4.077-.032 1.07-.031 1.94-.095 2.617-.24C20 8.452 20 9 20 9.5v3c0 6.5 0 7.5-8 7.5s-8-1-8-7.5v-3c0-.5.001-1.048 1.29-.772.679.145 1.548.209 2.618.24M15 14a3 3 0 1 0-6 0 3 3 0 0 0 6 0"
//                             />}>
//                                 Бытовая техниака
//                             </Category_list>
//
//                             <Category_list icon={<path
//                                 d="M16.1 4.104c-4.442-2.762-9.296.065-10.49 3.98-.493 1.616-.246 1.997 1.112 2.793l6.139 3.601c1.837 1.078 2.501 1.448 4.093-.277 2.552-2.766 3.187-7.583-.854-10.097M11.629 16.22h.209c.511 0 1.345 0 .511-.525l-1.153-.727-4.927-3.104c-.57-.361-.66-.138-.498.288.089.233.183.454.272.665.367.861.664 1.56.226 2.235-.242.371-.968 1.274-1.594 2.038l-.074.09c-.882 1.075-.905 1.102.692 2.126 1.429.982 1.656.944 2.395-.255.5-.812 1.114-1.793 1.405-2.19.477-.649 1.562-.645 2.536-.642M18.5 21c1.551 0 2.5-.949 2.5-2.5s-.949-2.5-2.5-2.5-2.5.949-2.5 2.5.949 2.5 2.5 2.5"
//                             />}>
//                                 Спорт и отдых
//                             </Category_list>
//
//                             <Category_list icon={<path
//                                 d="M10.069 5.067Q10.86 5.01 11.585 5c1.01-.012 1.225.25 1.443 1.487l.781 4.434c.283 1.604.303 2.174-1.04 2.535-.704.189-1.442.333-2.195.427-3.087.386-6.425-.008-6.57-3.904-.131-3.5 3.207-4.698 6.065-4.912m7.581 5.673c-.392.471-.908.906-1.516 1.293-.862.548-1.008.537-1.201-.557l-.967-5.488c-.146-.827-.057-.898.652-.78q.846.141 1.516.36c.987.321 1.2 1.162 1.494 2.33l.022.086q.048.188.098.37c.241.903.459 1.716-.098 2.385M6.002 19.006c0-1.993.014-2.916.014-2.916q.001-.214-.002-.379c-.011-.79-.011-.8.917-.606.887.185 1.834.184 2.724.1 1.426-.133 1.388 1.172 1.355 2.31Q11 17.764 11 18c0 3-.5 3-2.5 3-2.247 0-2.498 0-2.498-1.994m7.704-4.778c1.465-.556 1.42 0 1.136.647-.284.648-.91 1.489-1.705 1.942-.796.453-1.137 0-1.137-.647 0-.648.293-1.406 1.706-1.942m7.458-6.242-1.85.364c-.427.083-.578-.214-.744-.85-.215-.822-.07-1 .43-1.126l1.836-.36a1 1 0 1 1 .328 1.972"
//                             />}>
//                                 Сторительство и ремонт
//                             </Category_list>
//
//                             <Category_list icon={<path
//                                 d="M4 13.5C4 10 6 8 8.5 8c1.5 0 2 1 3.5 1s2-1 3.5-1C18 8 20 10 20 13.5S17 20 12 20s-8-3-8-6.5m7.005-6.712c-1.37-.39-2.357-1.26-2.795-2.798-.534-1.871-.089-2.306 1.78-1.787 1.662.463 2.46 1.532 2.809 2.804.516 1.88.082 2.316-1.794 1.781"
//                             />}>
//                                 Продукты питания
//                             </Category_list>
//
//                             <Category_list icon={<path
//                                 d="M6.07 7.744c.18-1.525.713-2.696 1.654-3.503C8.876 3.253 10.428 3 12 3s3.124.253 4.276 1.24c.941.808 1.475 1.979 1.655 3.504C20.378 8.689 21 10.618 21 14c0 5.25-1.5 7-9 7s-9-1.75-9-7c0-3.382.622-5.311 3.07-6.256m2.122-.521C9.247 7.07 10.504 7 12 7s2.753.07 3.808.223c-.187-.72-.491-1.17-.834-1.464C14.376 5.247 13.428 5 12 5s-2.376.247-2.974.76c-.343.293-.647.742-.834 1.463M12 11a1 1 0 0 0-1 1v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 0 0-1-1"
//                             />}>
//                                 Аптека
//                             </Category_list>
//
//                             <Category_list icon={<path
//                                 d="M3.955 17.294c-1.234-1.38-1.462-4.24.81-5.358 1.39-.684 3.703-.927 5.668-.198.65.241 1.129.703 1.57.32.37-.32-.058-.847-.625-1.195C10.076 10.063 8 9.5 5 10.5c-1.299.433-1.416-.475-1.528-1.492s-.35-3.114-.465-4.149c-.064-.579.29-.901 1.115-.581.32.124 1.026.906 1.383 1.045C6.775 5.817 6.91 5.16 8.278 5c1.137-.133 1.848.522 2.739-.172.368-.287.627-1.319.987-1.599.395-.308.948-.411 1.198.38.17.54.588 1.895.77 2.47.289.915.513 1.144 1.59 1.33 1.264.217 3.23.72 4.522 1.845 2.034 1.771 2.673 5.259.811 7.766-1.447 1.933-4.917 2.937-8.401 2.979-3.431.04-6.874-.852-8.539-2.705"
//                             />}>
//                                 Зоотовары
//                             </Category_list>
//
//                             <Category_list icon={<path
//                                 d="M17 21h-5c-8 0-8-1-8-9s0-9 7-9h6c2.5 0 3 .5 3 3v12c0 2.5-.5 3-3 3m-8-2h9c1 0 1-.5 1-1.5s0-1.5-1-1.5H8c-.5 0-2 0-2 1s1 2 3 2M8 7a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H9a1 1 0 0 0-1 1m1 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
//                             />}>
//                                 Книги
//                             </Category_list>
//
//                             <Category_list icon={<path
//                                 d="M12.878 17c1.013-3.5 1.404-4.978 1.971-8 .563-3 1.054-2.5 1.054 1v6.927c0 2.033.08 2.033 2.109 2.033h3.163c.89 0 .976-.198.654-1.016l-4.408-11.21c-.732-1.861-.615-1.938-2.572-1.538-1.36.279-4.12.52-6.026.664-1.52.115-2.263.64-2.955 2.14-.981 2.124-2.474 5.39-3.126 7-1.19 2.936-1.014 4 1.013 4h6.082c2.534 0 2.747-.984 3.04-2"
//                             />}>
//                                 Туризм
//                             </Category_list>
//
//                             <Category_list icon={<path
//                                 d="M16.031 7c3-1.863 6-1.75 6 4.967s-3 6.83-6 4.967c-1.558-.967-1.62-1.465-1.031-2.074a3.4 3.4 0 0 0 .618-.893c.547-1.141 1.169-1.135 1.727-.816.376.215.587.424.832.67a.5.5 0 1 0 .707-.707l-.005-.006c-.253-.253-.542-.542-1.038-.825a6 6 0 0 0-.654-.316 5.5 5.5 0 0 0 .654-.316c.496-.283.785-.572 1.038-.825l.005-.005a.5.5 0 1 0-.707-.707c-.245.245-.456.454-.832.669-.7.4-1.295.184-1.454-.55-.11-.516-.317-1.012-.715-1.41-.524-.524-.584-.93.855-1.823M8 7.033C5 5.17 2 5.283 2 12s3 6.83 6 4.967c1.558-.967 1.62-1.465 1.031-2.074A3.4 3.4 0 0 1 8.413 14c-.547-1.141-1.169-1.135-1.727-.816-.376.215-.587.424-.832.67a.5.5 0 1 1-.708-.708l.005-.005c.254-.253.543-.542 1.038-.825.189-.108.404-.213.655-.316a6 6 0 0 1-.655-.316c-.495-.283-.784-.572-1.038-.825l-.005-.005a.5.5 0 1 1 .708-.708c.245.246.456.455.832.67.7.4 1.295.184 1.454-.55.11-.516.317-1.012.715-1.41.524-.524.584-.93-.855-1.823"
//                             />}>
//                                 Аксессуары
//                             </Category_list>
//                             <Category_list icon={<path
//                                 d="M18.5 11c-1.551 0-2.5.949-2.5 2.5 0 1-8 1-8 0 0-1.551-.949-2.5-2.5-2.5S3 11.949 3 13.5c0 1.182.551 2.015 1.5 2.344q.098.034.173.057c.15.05.232.075.276.131.052.066.051.172.051.403v.065c0 .99.286 1.613 1.282 1.989l-.263 1.315a1 1 0 0 0 1.962.392l.264-1.323c.961.091 2.19.127 3.755.127 1.31 0 2.384-.025 3.263-.087l.256 1.283a1 1 0 0 0 1.962-.392l-.234-1.169C18.627 18.283 19 17.631 19 16.5v-.065c0-.231 0-.337.05-.403.045-.056.126-.082.277-.13l.173-.058c.949-.33 1.5-1.162 1.5-2.344 0-1.551-.949-2.5-2.5-2.5"
//                             />}>
//                                 Мебель
//                             </Category_list>
//
//                             <Category_list icon={<path
//                                 d="M13.489 16.009c-.377.034-.8.073-1.49.073-.688 0-1.111-.039-1.488-.073a9 9 0 0 0-.928-.053c-1.312 0-1.666 1.083-2.01 2.135l-.015.048-.054.166c-.363 1.12-.55 1.694-1.504 1.694h-.086c-.86.005-2.951.015-2.913-3.033C3.001 6 4.937 4.125 12 4c7.062.126 8.999 2 8.999 12.965.038 3.049-2.053 3.039-2.913 3.035H18c-.954 0-1.14-.576-1.504-1.695l-.054-.166-.016-.048c-.343-1.052-.697-2.135-2.009-2.135-.354 0-.626.025-.928.053M8.999 9a1 1 0 0 0-2 0v1H6a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 0 0 0-2H9zm8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-2-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
//                             />}>
//                                 Игры и консоли
//                             </Category_list>
//
//                             <Category_list icon={<path
//                                 d="m8.329 4.1-.667-1.79c-.145-.39-.526-.402-.781-.094l-1.2 1.45-.136.163c-.522.62-.658.783.307 1.105a6 6 0 0 0 2.057.293c.857-.03.774-.235.537-.826q-.055-.135-.117-.3M7.91 6.263a7 7 0 0 1-2.058-.247c-1.028-.279-1.145.212-1.187.757l-.633 8.286c-.11 1.437.028 1.283.939.267v-.001l.24-.266 1.67-1.85c.707-.783.817-1.229 1.029-2.293l.72-3.625c.146-.735-.206-1.028-.72-1.028m7.2 2.582c-.857-.69-1.234-2.279 0-3.108.632-.423 1.132-.54 1.626-.657.366-.086.728-.17 1.139-.378q.247-.126.44-.23c.863-.454.955-.503.832.641-.24 2.248-1.113 6.087-4.036 3.732m.075 2.85c.486-.44.903-.818-.075-1.577-.503-.32-.975-.695-1.302-1.203-.72-1.054-1.221-.492-1.55-.123l-.048.053-5.028 5.57-2.36 2.612c-1.028 1.14-.273 1.9 0 2.175.236.237.829.834 1.645.394.454 1.67.81 1.593 3.177 1.081l9.238-1.992c2.4-.518 2.299-.926 1.893-2.562l-.008-.028c-.412-1.66-.514-2.071-1.727-1.81s-1.194.34-.86 1.685a.514.514 0 1 1-.998.251 8 8 0 0 1-.113-.55c-.115-.644-.166-.925-1.027-.739-.854.184-.778.425-.585 1.033.047.15.102.323.152.522a.514.514 0 1 1-.998.251c-.05-.2-.083-.379-.111-.535-.117-.638-.165-.903-1.02-.718-.85.183-.78.409-.59 1.012.046.146.099.314.147.508a.514.514 0 1 1-.998.251 7 7 0 0 1-.105-.523c-.104-.593-.154-.881-.94-.712l-.701.151 4.817-4.408z"
//                             />}>
//                                 Канцелярские товары
//                             </Category_list>
//                             <Category_list icon={<path
//                                 d="M7 5c0-2 0-2 5-2h3c1.834 0 2 0 2 1.5 0 .515 0 .786-.135.929-.15.158-.467.158-1.135.158-.52 0-.762.17-.46 1.02a5.3 5.3 0 0 0 .845 1.534c.223.288.34.44.042.621-.427.26-.732.096-1.157-.209-.35-.251-.61-.572-.86-.882L14 7.5c-.297-.36-1-.892-1 0V8c0 1 0 1-2 1-1.227 0-1.701 0-1.885-.23C9 8.623 9 8.385 9 8c0-1.044-.545-1.359-1.066-1.66C7.457 6.066 7 5.803 7 5m10.031 8.872c-.772-.474-1.58-.97-2.031-1.872-.75-1.5-2-2-3.57-2C6 10 6 12 6 15c0 6 2 6 7 6s6 0 6-4.5c0-1.42-.953-2.005-1.969-2.628"
//                             />}>
//                                 Бытовая химия и гигиена
//                             </Category_list>
//                             <Category_list icon={
//                                 //     <path
//                                 //     d="M18.968 9.03C17.938 5.326 17.57 4 12.008 4 6.449 4 6.08 5.325 5.05 9.03c-.13.47-.27.715-.826.284C3.86 9.03 3.477 9 3.112 9h-.018C2.544 9 2 9 2 10c0 .727.466 1 1.112 1 .293.004.658.005.973-.117q.106-.042.22-.095c.643-.292 1.74-.788 7.704-.788 5.948.001 7.043.497 7.686.788q.114.053.22.095c.315.122.68.12.973.117.646 0 1.112-.273 1.112-1 0-1-.544-1-1.094-1h-.018c-.36 0-.734.03-1.094.3-.556.418-.695.2-.826-.27"
//                                 // />
//                                 <path
//                                     d="M3.112 14.5c0 1.313.122 2.384 1.112 3.151v.849c0 1 0 1.5 1.668 1.5 1.517 0 1.655-.413 1.667-1.24 1.158.158 2.616.24 4.45.24s3.291-.082 4.45-.24c.012.827.15 1.24 1.666 1.24 1.669 0 1.669-.5 1.669-1.5v-.849c.99-.767 1.112-1.838 1.112-3.151 0-2.8-1.112-3.5-8.897-3.5s-8.897.7-8.897 3.5m6.673.5c0-.552.498-1 1.112-1h2.224c.614 0 1.112.448 1.112 1s-.498 1-1.112 1h-2.224c-.614 0-1.112-.448-1.112-1M19 14.5c0 .93-.57 1.5-1.5 1.5s-1.5-.57-1.5-1.5.57-1.5 1.5-1.5 1.5.57 1.5 1.5M6.5 16c-.93 0-1.5-.57-1.5-1.5S5.57 13 6.5 13s1.5.57 1.5 1.5S7.43 16 6.5 16"
//                                 />
//                             }>
//                                 Автомобили
//                             </Category_list>
//                         </ListItem>
//                     </List>
//                 </Box>
//
//                 <Box color="#001a34" letterSpacing="normal" textTransform="none" wordSpacing="normal" textSizeAdjust="none" fontFamily="GTEestiPro, arial, sans-serif" width="calc(100% - 331px)">
//                      <Flex flexDirection="column" gap={24} overflowY="auto">
//                         <Flex alignItems="flex-start" gap={8} >
//                             <Text fontSize="30px" fontWeight="700" letterSpacing="0.3px" lineHeight="30px" color="black">
//                                 Электроника
//                             </Text>
//                             <Text fontSize="14px" fontWeight="400" letterSpacing="0.2px" lineHeight="20px" color="rgba(0, 26, 52, 0.6)" marginBottom="1px" marginLeft="0" paddingRight="0">
//                                 Item amount in numbers
//                             </Text>
//                         </Flex>
//
//                          <Flex flexDirection="column" gap={36}>
//                             {[1, 2, 3].map((rowIndex) => (
//                                 <Flex key={rowIndex} flexDirection="row" gap={30} width="calc(100% - 164px)" display="flex">
//                                     {[1, 2, 3].map((columnIndex) => (
//                                         <Flex key={columnIndex} flexDirection="column" gap={30} width="calc(33% - 20px)" display="flex">
//                                             <Flex flexDirection="column" gap={8}>
//                                                 <Link fontSize="16px" fontWeight="700" href="/category/telefony-i-smart-chasy-15501/" isExternal>
//                                                     Телефоны и смарт-часы
//                                                 </Link>
//                                                 <Link fontSize="14px" href="/category/smartfony-15502/" isExternal>
//                                                     Смартфоны
//                                                 </Link>
//                                                 <Button
//                                                     fontSize="14px"
//                                                     fontWeight="400"
//                                                     variant="link"
//                                                     color="blue.400"
//                                                     _hover={{ color: "black" }}
//                                                     bg="transparent"
//                                                     borderRadius="0"
//                                                     display="flex"
//                                                     alignItems="center"
//                                                     justifyContent={"flex-start"}
//                                                 >
//                                                     Еще
//                                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="cz5">
//                                                         <path fill="currentColor" d="M6.293 9.293a1 1 0 0 1 1.414 0L12 13.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414"></path>
//                                                     </svg>
//                                                 </Button>
//
//
//                                             </Flex>
//                                         </Flex>
//                                     ))}
//                                 </Flex>
//                             ))}
//                         </Flex>
//                      </Flex>
//                 </Box>
//
//             </Flex>
//         </Box>
//     );
// }


// export default MainCatalog;
