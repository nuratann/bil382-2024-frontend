import UserProfileSidebar from "../../components/Sidebar/UserProfileSidebar";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import UserProfileEdit from "../../components/UserProfileComponents/UserProfileEdit";
import { Flex } from "@chakra-ui/react";
import React, { useState } from 'react';

function UserProfile() {
    const [activeComponent, setActiveComponent] = useState(null);

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };
    return(
        <>
            <Header/>
            <Navbar/>
            <Flex>
                <UserProfileSidebar onChangeComponent={handleComponentChange} />
                {activeComponent === 'edit' && <UserProfileEdit />}
            </Flex>
            
        </>
    );
}

export default UserProfile;