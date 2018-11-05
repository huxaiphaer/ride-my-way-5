import {Button, Card, Col, Input, ProgressBar, Row} from "react-materialize";
import  '../../styles/styles.scss'
import React from "react";
import styles from '../../styles/dashboard/driverdashboard.css'


export const DriverComponent = ({handleSubmit, handleChange,obj, loader})=>(

    <div className={styles.card}>
        <form onSubmit={handleSubmit}>
            <Card className={styles["align-content"]}>
                <Row>
                    <Col>
                        <label className={'header'}>  Make Ride Request </label>
                    </Col>
                    <Col s={12}>
                        { loader ? <ProgressBar className='purple' active='false' /> :''}
                    </Col>
                    <Input s={10} type={'text'} value={obj.name} label="Name" name='name'  onChange={handleChange}/>
                    <Col>
                        <div className={'errors'} s={10}>{obj.usernameError}</div>
                    </Col>

                    <Input s={10} type="text" value={obj.details} label="Details" name='details' onChange={handleChange} />
                    <Col>
                        <div className={'errors'}>{obj.passwordError}</div>
                    </Col>
                    <Input s={10} type="text" value={obj.price} label="Price" name='price' onChange={handleChange} />
                    <Col>
                        <div className={'errors'}>{obj.passwordError}</div>
                    </Col>
                </Row>
                <Button waves='light' className={`button-align`} value='submit' type='submit' >Create Ride Request</Button>
            </Card>
        </form>
    </div>
);
