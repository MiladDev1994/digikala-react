import React , {useState} from 'react';
import styles from "./Pay.module.css";
import GoogleMapReact from 'google-map-react';
import {useRef} from "react";

const Pay = () => {
    // const AnyReactComponent = ({ lat }) => console.log(lat);
    // export default function SimpleMap(){
        const defaultProps = {
            center: {
                lat: 35.7,
                lng: 51.3
            },
            zoom: 11
        };

    const handleApiLoaded = (map, maps) => {
        console.log(maps)
    };


    const mapRef = useRef();
    const [bounds, setBounds] = useState(null);
    const [zoom, setZoom] = useState(10);
        console.log(bounds)
        console.log(zoom)

    // navigator.geolocation.getCurrentPosition(position => console.log(position.coords.latitude))
    return (
        <div className={'w-100'} dir={'rtl'}>
            <form className={`${styles.box} text-light d-flex align-items-stretch`}>
                <div className={`${styles.detailBox} py-3 px-2`}>
                    <div className={`${styles.products} w-100 rounded-4 shadow py-2 px-3`}>
                        <h5 className={'opacity-50  py-2'}>اطلاعات تکمیلی</h5>

                        <div className={'rounded-4 overflow-hidden shadow position-relative d-flex align-items-center justify-content-center'} style={{ height: '300px', width: '50%' }}>
                            <div className={'bi-geo-alt-fill position-absolute h5 text-danger'} style={{zIndex: '1'}}/>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "" }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                                yesIWantToUseGoogleMapApiInternals
                                onGoogleApiLoaded={({ map, maps }) => {
                                    mapRef.current = map
                                }}
                                onChange={({ zoom, bounds }) => {
                                    setZoom(zoom);
                                    setBounds([
                                        bounds.nw.lng,
                                        bounds.se.lat,
                                        bounds.se.lng,
                                        bounds.nw.lat
                                    ]);
                                }}
                            />
                        </div>

                    </div>
                </div>
                <div className={`${styles.priceBox} p-2`}>
                    <div className={`w-100 rounded-4 shadow p-2 ${styles.stickyBox}`}>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Pay;
