import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const Inputer = () => {

    // form validation rules 
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(1, "Please enter a name more than 1 character")
            .max(20, "Too long")
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        lastName: Yup.string()
            .min(1, "Please enter more than 1 character")
            .max(20, "Too long")
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        email: Yup
            .string()
            .email('Must be a valid email')
            .max(25, "Too long"),
        phoneNumber: Yup.number()
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const {
        register,
         handleSubmit, 
         reset, 
         formState: {errors, isDirty, isValid}, 
        } = useForm({mode:"onchange"});

    // user state for form
    const [user, setUser] = useState(null);
    

    // effect runs on component mount
    useEffect(() => {
        // simulate async api call with set timeout
        setTimeout(() => setUser({
            firstName: 'John',
            lastName: 'Brown',
            email: 'john.brown@gmail.com',
            phoneNumber: 421
        }), 1000);
    }, []);

    // effect runs when user state is updated
    useEffect(() => {
        // reset form with user data
        reset(user);
    }, [user]);

    function onSubmit(data) {
        // display form data on submit
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }
    

    return (
        <div >
            <div >
                {user &&
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div >
                            <div >
                                <label>First Name</label>
                                <input name="firstName" type="text"   {...register('firstName')}
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
                                <div >{errors.firstName?.message}</div>
                            </div>
                            <div >
                                <label>Last Name</label>
                                <input name="lastName" type="text" {...register('lastName')}
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
                                <div >{errors.lastName?.message}</div>
                            </div>
                            <div >
                                <label>Email</label>
                                <input name="email" type="text" {...register('email')}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                                <div >{errors.email?.message}</div>
                            </div>
                            <div >
                                <label>Phone Number</label>
                                <input name="phoneNumber" type="text"  {...register('phoneNumber')}
                                    className={`form-control ${errors.mobile ? 'is-invalid' : ''}`} />
                                <div >{errors.phoneNumber?.message}</div>
                            </div>

                        </div>
                        <div >
                            <button type="submit"
                                className="btn btn-primary mr-1" disabled={!isDirty || !isValid} >Change</button>
                            <button type="button"
                                onClick={() => reset()}
                                className="btn btn-secondary"  disabled={!isDirty || !isValid} >Cancel</button>
                        </div>
                    </form>
                }
                {!user &&
                    <div >
                        <span></span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Inputer;