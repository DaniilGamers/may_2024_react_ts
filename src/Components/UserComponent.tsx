import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
import {useNavigate} from "react-router-dom";

interface IProps {
    user: IUserModel;
}

const UserComponent:FC<IProps> = ({user}) => {

    const navigate = useNavigate();

    return (
        <div>
            {user.id} : {user.name}
            <button onClick={() => {
                navigate(user.id.toString());
            }}>details
            </button>
        </div>
    );
};

export default UserComponent;