import {Button, Card, Col, Input, ProgressBar, Row} from "react-materialize";
import  '../../styles/styles.scss'
import React from "react";
import styles from '../../styles/styles.scss'


export const SignUpComponent = ({handleSubmit, handleChange,handleRadiobuttonChange,obj, loader})=>(

    <div className={styles.card}>
        <form onSubmit={handleSubmit}>
        <Card className={styles["align-content"]}>
            <Row>
                <Col>
                    <label className={'header'}> Sign Up </label>
                </Col>
                <Col s={12}>
                    { loader ? <ProgressBar className='purple' active='false' /> :''}
                </Col>
                <Input s={10} type={'text'} value={obj.username} label="Username" name='username'  onChange={handleChange}/>
                <Col>
                <div className={'errors'} s={10}>{obj.usernameError}</div>
                </Col>

                <Input s={10} type={'email'} value={obj.email} label="Email" name='email' onChange={handleChange}/>
                <Col>
                <div className={'errors'}>{obj.emailError}</div>
                </Col>

                <Input s={10} type="password" value={obj.password} label="password" name='password' onChange={handleChange} />
                <Col>
                <div className={'errors'}>{obj.passwordError}</div>
                </Col>

                <Col>
                <Input name='isdriver' type='radio' value={1} onChange={handleRadiobuttonChange} label='Driver' />
                <Input name='isdriver' type='radio' value={0} onChange={handleRadiobuttonChange} label='Passenger' />
                </Col>

            </Row>
            <Button waves='light' className='purple' value='submit' type='submit' >Sign Up</Button>
        </Card>
        </form>
    </div>
);
