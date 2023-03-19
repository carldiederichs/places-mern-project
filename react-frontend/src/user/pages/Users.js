import React from 'react'; 
import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = [
        {
            id: 'u1', 
            name: 'Carl Diederichs', 
            image: 'https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png', 
            places: 3
        }
    ];
    
    return <UsersList items={USERS}/>;
};

export default Users;