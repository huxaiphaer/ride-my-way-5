import React from "react";
import {Button, Card, Col, Row} from 'react-materialize'
import  '../../styles/rides/rides.scss';

export const GetRideDetails = ({rides})=>(

    <Card className='details-card'>
       <Row>
           <Col s={12} m={12} l={12}>
               <label s={12} l={12} className={'text-inputs'}>Driver Name : </label>
               <label s={12} l={12} className={'text-results'}>xxx</label>
           </Col>
       </Row>
        <Row>
            <Col s={12} m={12} l={12}>
                <label s={12} l={12} className={'text-inputs'}>Trip Name : </label>
                <label s={12} l={12} className={'text-results'} >xxx</label>
            </Col>
        </Row>
        <Row>
            <Col s={12} m={12} l={12}>
                <label s={12} l={12} className={'text-inputs'} >Price : </label>
                <label s={12} l={12} className={'text-results'}>xxx</label>
            </Col>
        </Row>
        <Row>
            <Col s={12} m={12} l={12}>
                <label s={12} l={12} className={'text-trip-header'} >Trip Details</label>
            </Col>
        </Row>
        <Row>
            <Col s={12} m={12} l={12}>
                <label s={12} l={12} className={'text-align-center'}>xxx</label>
            </Col>
        </Row>
        <Row>
            <Col s={12} m={12} l={12}>
                <Button className={'purple button-align'}>ACCEPT RIDE</Button>
            </Col>
        </Row>
    </Card>
);
