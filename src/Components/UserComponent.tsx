import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
import {useStore} from "../context/store";

interface IProps {
    user: IUserModel;
}

const UserComponent:FC<IProps> = ({user}) => {

    const {userStore:{setFavoriteUser}} = useStore();

    return (
        <div>
            <br/>{user.id} {user.name} <button onClick={() => {setFavoriteUser(user)}}>set as favorite user</button><br/>
        </div>
    );
};

export default UserComponent;