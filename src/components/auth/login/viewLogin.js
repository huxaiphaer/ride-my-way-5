import React from "react";
import {Button, Card, Col, Input, Row} from "react-materialize";
import '../../../styles/styles.scss'
import '../../../styles/landingpage/landingpage.scss'


export const LoginComponent = ({handleSubmit, handleChange,handleRadiobuttonChange,obj})=>(
        <div className='bg-image'>
            <Card className='landing-card'>
                <form onSubmit={handleSubmit}>
                <Row>
                    <Col  s={12} m={12} l={12}>
                        <label s={12} l={12} className={'header'}>  Login </label>
                    </Col>
                    <Input s={12} l={12} type={'text'} value={obj.username} label="Username" name='username'  onChange={handleChange}/>
                    <Col s={12} m={12} l={6}>
                        <div className={'errors'} s={10}>{obj.usernameError}</div>
                    </Col>

                    <Input s={12} l={12} type="password" value={obj.password} label="password" name='password' onChange={handleChange} />
                    <Col s={12} m={12} l={6}>
                        <div className={'errors'}>{obj.passwordError}</div>
                    </Col>
                    <Col s={12} m={12} l={12}>
                        <Button waves='light' className='purple button-align' value='submit' type='submit' >Login</Button>
                    </Col>
                </Row>
                </form>
            </Card>
        </div>

);
