import React from "react";
import {Button, Card, Col, Row} from 'react-materialize'
import  '../../styles/rides/rides.scss';

export const GetRideDetails = ({singleride,handleSubmit})=>(

    <div className={'bg-image'}>
        <Card className='details-card'>
            <Row>
                <Col s={12} m={12} l={12}>
                    <h3 s={12} l={12} className={'text-header-details'}>Ride Details</h3>
                </Col>
            </Row>
           <Row>
               <Col s={12} m={12} l={12}>
                   <label s={12} l={12} className={'text-inputs'}>Driver Name : </label>
                   <label s={12} l={12} className={'text-results'}>{singleride.driver}</label>
               </Col>
           </Row>
            <Row>
                <Col s={12} m={12} l={12}>
                    <label s={12} l={12} className={'text-inputs'}>Trip Name : </label>
                    <label s={12} l={12} className={'text-results'} >{singleride.name}</label>
                </Col>
            </Row>
            <Row>
                <Col s={12} m={12} l={12}>
                    <label s={12} l={12} className={'text-inputs'} >Price : </label>
                    <label s={12} l={12} className={'text-results'}>{singleride.price}</label>
                </Col>
            </Row>
            <Row>
                <Col s={12} m={12} l={12}>
                    <label s={12} l={12} className={'text-trip-header'} >Trip Details</label>
                </Col>
            </Row>
            <Row>
                <Col s={12} m={12} l={12}>
                    <label s={12} l={12} className={'text-align-center'}>{singleride.details}</label>
                </Col>
            </Row>
            <Row>
                <Col s={12} m={12} l={12}>
                    <Button className={'purple button-align'}
                            onClick={handleSubmit}
                    >ACCEPT RIDE</Button>
                </Col>
            </Row>
        </Card>
    </div>
);
