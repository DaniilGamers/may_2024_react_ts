import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";

interface IProps {
    user: IUserModel;
}

const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            <br/>{user.id} {user.name}<br/>
        </div>
    );
};

export default UserComponent;