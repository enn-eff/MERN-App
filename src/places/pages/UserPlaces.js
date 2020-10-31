import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

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

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = Dummy_Places.filter(
        (place) => place.creator === userId
    );

    return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
