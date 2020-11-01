import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
    VALIDATOR_MIN,
    VALIDATOR_REQUIRE,
} from '../../shared/components/utils/validators';
import { useForm } from '../../shared/components/Hooks/form-hook';

import './PlaceForm.css';

const Places = () => {
    const [formState, inputHandler] = useForm(
        {
            title: {
                value: '',
                isValid: false,
            },
            description: {
                value: '',
                isValid: false,
            },
            address: {
                value: '',
                isValid: false,
            },
        },
        false
    );

    const placeSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    return (
        <form className='place-form' onSubmit={placeSubmitHandler}>
            <Input
                id='title'
                element='input'
                type='text'
                label='hi'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Enter Something'
                onInput={inputHandler}
            />
            <Input
                id='description'
                element='textarea'
                label='description'
                validators={[VALIDATOR_MIN('5')]}
                errorText='Please enter more than 5 characters'
                onInput={inputHandler}
            />
            <Input
                id='address'
                element='input'
                label='Address'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Please enter a valid address'
                onInput={inputHandler}
            />
            <Button type='submit' disabled={!formState.isValid}>
                Add Place
            </Button>
        </form>
    );
};

export default Places;
