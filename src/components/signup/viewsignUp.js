import {Button, Card, Input, Row} from "react-materialize";
import React from "react";
import styles from '../../styles/styles.css'

export const SignUpComponent = ({handleSubmit, handleChange,handleRadiobuttonChange,obj})=>(

    <div className={styles.card}>
        <form onSubmit={handleSubmit}>
            {console.log('all objects --> ',obj)}
        <Card className={styles["align-content"]}>
            <Row>
                <Input s={10} type={'text'} value={obj.username} label="Username" name='username'  onChange={handleChange}/>
                <div className={styles.errors}>{obj.error}</div>

                <Input s={10} type={'email'} value={obj.email} label="Email" name='email' onChange={handleChange}/>
                <div className={styles.errors}>{obj.error}</div>

                <Input s={10} type="password" value={obj.password} label="password" name='password' onChange={handleChange} />
                <div className={styles.errors}>{obj.error}</div>

                <Input name='isdriver' type='radio' value={1} onChange={handleRadiobuttonChange} label='Driver' />
                <div className={styles.errors}>{obj.error}</div>

                <Input name='isdriver' type='radio' value={0} onChange={handleRadiobuttonChange} label='Passenger' />
                <div className={styles.errors}>{obj.error}</div>
            </Row>
            <Button waves='light' className='purple' value='submit' type='submit' >Sign Up</Button>
        </Card>
        </form>
    </div>
);
