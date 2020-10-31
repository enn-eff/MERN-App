import React, { useRef, useEffect } from 'react';

import './Map.css';

const Map = (props) => {
    const mapRef = useRef();
    const { center, zoom } = props;

    let cood = {
        lat: parseFloat(center.lat),
        lng: parseFloat(center.lng),
    };

    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: cood,

            zoom: zoom,
        });

        new window.google.maps.Marker({ position: cood, map: map });
    }, [cood, zoom]);

    return (
        <div
            ref={mapRef}
            className={`map ${props.className}`}
            style={props.style}
        ></div>
    );
};

export default Map;
