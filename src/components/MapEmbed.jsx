import React from 'react';

const MapEmbed = () => {
    return (
        <div className="map_main">
            <div className="map-responsive">
                <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France"
                    width="600"
                    height="400"
                    title="Google Map"
                    frameborder="0"
                    style={{ border: 0, width: '100%' }}
                    allowFullScreen
                />
                
            </div>
        </div>
    );
};

export default MapEmbed;