import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../../Models/IUserModel";
import {getAllUser} from "../../services/users.api.service";
import UserComponent from "../User/UserComponent";

type IPropsType = {lift?:(userId:number)=> void}
const UsersComponent:FC<IPropsType> = ({lift}) => {

    const [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
        getAllUser().then(({data}) => setUsers(data.users));
    }, []);


    return (
        <div>
            {users.map((user) => (<UserComponent key={user.id} user={user} lift={lift}/>))}
        </div>
    );
};

export default UsersComponent;