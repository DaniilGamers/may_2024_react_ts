import React from 'react';
import UserComponent from "./UserComponent";
import {useAppSelector} from "../redux/store";

const UsersComponent = () => {

    const {users, isLoaded} = useAppSelector(state => state.userSlice)
    return (
        <div>
            {
                isLoaded ? users.map(user => <UserComponent user={user} key={user.id}/>) : <h2>Loading....</h2>
            }
        </div>
    );
};

export default UsersComponent;