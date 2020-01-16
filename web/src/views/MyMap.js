import React, { Component } from 'react'
import {
    withGoogleMap,
    GoogleMap,
    Marker,
    Polyline
  } from "react-google-maps";
import { compose, withProps } from "recompose"

const MyGoogleMap = compose(
    withProps({
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `600px` }} className="map-canvas" id="map-canvas"/> ,
      mapElement: <div style={{ height: `100%`, borderRadius: "inherit" }} />,
    }),
    withGoogleMap
    )((props) =>
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 41.4535189, lng: -8.2886961 }}
        center={ props.center }
        defaultOptions={{
          scrollwheel: true,
          styles: [
            {
              featureType: "administrative",
              elementType: "labels.text.fill",
              stylers: [{ color: "#444444" }]
            },
            {
              featureType: "landscape",
              elementType: "all",
              stylers: [{ color: "#f2f2f2" }]
            },
            {
              featureType: "poi",
              elementType: "all",
              stylers: [{ visibility: "off" }]
            },
            {
              featureType: "road",
              elementType: "all",
              stylers: [{ saturation: -100 }, { lightness: 45 }]
            },
            {
              featureType: "road.highway",
              elementType: "all",
              stylers: [{ visibility: "simplified" }]
            },
            {
              featureType: "road.arterial",
              elementType: "labels.icon",
              stylers: [{ visibility: "off" }]
            },
            {
              featureType: "transit",
              elementType: "all",
              stylers: [{ visibility: "off" }]
            },
            {
              featureType: "water",
              elementType: "all",
              stylers: [{ color: "#5e72e4" }, { visibility: "on" }]
            }
          ]
        }}
      >
          
      </GoogleMap>
);

export default class MyMap extends Component {

    render() {
        const center = this.props.center
        return (
            <MyGoogleMap
                center = {center}
            >
                
            </MyGoogleMap>
        )
    }
}
