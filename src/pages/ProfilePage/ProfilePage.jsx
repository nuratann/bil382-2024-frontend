import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ProfileMain from '../../components/Profile/ProfileMain';
import useUserStore from '../../stores/useUserStore';


function ProfilePg() {
    const user = useUserStore(state=>state.user)
    return (
        <>
            {user.isAuth?
            <>
                <Header />
                <Navbar />
                <ProfileMain />
                <Footer />
            </>
            :
            <></>}
        </>
    )
}

export default ProfilePg;
