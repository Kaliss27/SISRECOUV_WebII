import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import FormDE_E from './FormDE_E';
import FormDE_PG from './FormDE_PG';


export default function ControlledTabs() {
    const [key, setKey] = useState('home');

    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="profile" title="Estudiantes">
                <FormDE_E/>
            </Tab>
            <Tab eventKey="contact" title="Publico General">
                <FormDE_PG/>
            </Tab>
        </Tabs>
    );
}
