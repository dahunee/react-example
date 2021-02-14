import React from 'react';
import Headroom from "react-headroom";
import "./Styles.css";

export default function HeadRoom() {
    return (
        <>
            <div className="App">
                <Headroom>
                    <div className="sticky">
                        <h1>🚂 Santa express</h1>
                    </div>
                </Headroom>

                <section className="bg1">
                    <h1>The north pole is just a train station away*</h1>
                </section>

                <section style={{ background: "#ff3c45", color: "white" }}>
                    <h2>Schedule</h2>
                </section>

                <section className="bg1" id="sec3">
                    <h2>Service onboard</h2>
                </section>

                <section className="bg2">
                    <h2>Booking</h2>
                </section>
            </div>
        </>
    );
}
