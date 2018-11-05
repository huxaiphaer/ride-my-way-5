import React from "react";
import {Button, Card, Table} from 'react-materialize'
import  '../../styles/rides/rides.scss';

export const GetRidesComponent = ({rides})=>(

    <Card className='auto'>
        <Table s={6} className='alignTable' striped={true} responsive={true}>
            <thead>
            <tr>
                <th data-field="id">Trip Name</th>
                <th data-field="details">Ride Details</th>
                <th data-field="driver">Driver</th>
                <th data-field="price">Price</th>
                <th data-field="price">More Details</th>
            </tr>
            </thead>
            <tbody>
            {rides.map( ride =>
                <tr key={ride.id}>
                    <td>{ride.name}</td>
                    <td>{ride.details}</td>
                    <td>{ride.driver}</td>
                    <td>{ride.price}</td>
                    <td> <Button className='purple'>More Details</Button></td>
                </tr>
            )}

            </tbody>
        </Table>
    </Card>
);
