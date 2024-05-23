import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../../Components/Models/User/IUserModel";
import {userApiService} from "../../services/users_api_service/users.api.service";

const AboutUsers: FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
        userApiService.getAllUsers().then(value => setUsers(value.data))
    }, []);

    return (
        <div>
            {users.map(value => <div key={value.id}><br/>{value.id} - {value.name} <br/><br/> Username - {value.username}</div>)}
        </div>
    );
};

export default AboutUsers;