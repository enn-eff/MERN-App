import React, { useCallback, useReducer } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
    VALIDATOR_MIN,
    VALIDATOR_REQUIRE,
} from '../../shared/components/utils/validators';

import './NewPlace.css';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {
                        value: action.value,
                        isValid: action.isValid,
                    },
                },
                isValid: formIsValid,
            };
        default:
            return state;
    }
};

const Places = () => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            title: {
                value: '',
                isValid: false,
            },
            description: {
                value: '',
                isValid: false,
            },
        },
        isValid: false,
    });
    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'INPUT_CHANGE',
            value: value,
            isValid: isValid,
            inputId: id,
        });
    }, []);

    return (
        <form className='place-form'>
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
            <Button type='submit' disabled={!formState.isValid}>
                Add Place
            </Button>
        </form>
    );
};

export default Places;
