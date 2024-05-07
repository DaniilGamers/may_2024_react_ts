import React, {FC} from 'react';
import {IUserModel} from "../../Models/IUserModel";

interface IProps{
    user: IUserModel;
}

type IPropsType = IProps & { children?: React.ReactNode } & { lift?: (userId: number)=> void};


const UserComponent: FC<IPropsType> = ({user,lift}) => {
    const onClickHandler = () =>{
        if (lift){
            lift(user.id)
        }

    }

    return (
        <div>
            <h2 style={{borderStyle: "solid"}}> </h2>
            <h2>{user.id}</h2>
            <img src={user.image} alt={user.image}></img>
            <h2>Name: {user.firstName} {user.maidenName} {user.lastName}</h2>
            <h3>Username: {user.username}</h3>
            <h2>Age: {user.age}</h2>
            <h2>Gender: {user.gender}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Phone number: {user.phone}</h2>
            <h2>Birth date: {user.birthDate}</h2>
            <h2>Blood group: {user.bloodGroup}</h2>
            <button onClick={onClickHandler}>Click to show posts</button>
        </div>
    );
};

export default UserComponent;