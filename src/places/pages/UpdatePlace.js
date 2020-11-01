import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
    VALIDATOR_MIN,
    VALIDATOR_REQUIRE,
} from '../../shared/components/utils/validators';
import { useForm } from '../../shared/components/Hooks/form-hook';

const Dummy_Places = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrappers in the world!',
        imageUrl:
            'https://images.pexels.com/photos/5304026/pexels-photo-5304026.jpeg?cs=srgb&dl=pexels-armin-rimoldi-5304026.jpg&fm=jpg',
        address: 'Sector J, Dha phase 2 Islamabad',
        location: {
            lat: '33.6844',
            lng: '73.0479',
        },
        creator: 'u1',
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrappers in the world!',
        imageUrl:
            'https://images.pexels.com/photos/5243232/pexels-photo-5243232.jpeg?cs=srgb&dl=pexels-gantas-vai%C4%8Diul%C4%97nas-5243232.jpg&fm=jpg',
        address: 'Sector J, Dha phase 2 Islamabad',
        location: {
            lat: '33.6844',
            lng: '73.0479',
        },
        creator: 'u2',
    },
];

const UpdatePlace = (props) => {
    const placeId = useParams().placeId;

    const identifiedPlace = Dummy_Places.find((p) => p.id === placeId);

    const [formState, inputHandler] = useForm({
        title: {
            value: identifiedPlace.title,
            isValid: true,
        },
        description: {
            value: identifiedPlace.description,
            isValid: true,
        },
    });

    const placeUpdateSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    if (!identifiedPlace) {
        return (
            <div>
                <h2>Couldn't find place!</h2>
            </div>
        );
    }
    return (
        <form className='place-form' onSubmit={placeUpdateSubmitHandler}>
            <Input
                id='title'
                element='input'
                type='text'
                label='Title'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Please enter a valid title'
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input
                id='description'
                element='textarea'
                label='Description'
                validators={[VALIDATOR_MIN(5)]}
                errorText='Please enter a valid description (min. 5 characters).'
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            />
            <Button type='submit' disabled={!formState.isValid}>
                UPDATE
            </Button>
        </form>
    );
};

export default UpdatePlace;
