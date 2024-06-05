import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {AuthDataModel} from "../Models/AuthDataModel";
import {authService} from "../services/api.services";

const FormComponent = () => {
    const {
        handleSubmit,
        register
    } = useForm<AuthDataModel>({defaultValues:{username:'Lide12343', password:'L1#oweq23'}})

    const [isAuthState, setIsAuthState] = useState<boolean>(false);
    const authenticate = async (formData: AuthDataModel) => {
      const isAuth = await authService.authentication(formData)
        setIsAuthState(isAuth);
    }
    return (
        <div>
            <h3>Login form</h3>
            <div>
                {
                    isAuthState? <span>ok</span> : <span>not ok</span>
                }
            </div>
            <form onSubmit={handleSubmit(authenticate)}>
            <input type="text"{...register('username')}/>
            <input type="text"{...register('password')}/>
                <button>auth me</button>
            </form>
        </div>
    );
};

export default FormComponent;