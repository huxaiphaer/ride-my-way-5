import React from "react";
import {Button, Card, Col, Input, Row} from "react-materialize";
import  '../../styles/dashboard/driverdashboard.scss'

export const DriverComponent = ({handleSubmit, handleChange,obj})=>(

    <div className={'bg-image'}>
            <Card className={'landing-card'}>
                <form onSubmit={handleSubmit}>
                <Row>
                    <Col s={12} m={12} l={12}>
                        <label s={12} l={12} className={'header'}>  Make Ride Request </label>
                    </Col>
                    <Input s={12} l={12} type={'text'} value={obj.trip_start} label="Trip Start" name='trip_start'  onChange={handleChange}/>

                    <Input s={12} l={12} type={'text'} value={obj.trip_end} label="Trip End" name='trip_end'  onChange={handleChange}/>

                    <Col s={12} m={12} l={6}>
                        <div className={'errors'} s={10}>{obj.nameError}</div>
                    </Col>
                    <div className="input-field col s12">
                        <textarea id="details" name='details' onChange={handleChange} className="materialize-textarea"></textarea>
                        <label htmlFor="details">Trip Details</label>
                    </div>
                    <Col s={12} m={12} l={6}>
                        <div className={'errors'}>{obj.detailsError}</div>
                    </Col>
                    <Input s={12} l={12} type="text" value={obj.price} label="Price" name='price' onChange={handleChange} />
                    <Col s={12} m={12} l={6}>
                        <div className={'errors'}>{obj.priceError}</div>
                    </Col>
                    <Col s={12} m={12} l={12}>
                        <Button waves='light' className={`purple button-align`} value='submit' type='submit' >Create Ride Request</Button>
                    </Col>
                </Row>
                </form>
            </Card>
    </div>
);
