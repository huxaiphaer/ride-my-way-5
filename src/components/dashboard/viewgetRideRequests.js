import React from "react";
import { Card, Table} from "react-materialize";
import  '../../styles/dashboard/driverdashboard.scss'

export const GetRideRequestsComponent = ({requests})=>(

    <Card className='auto'>
        <Table s={6} className='alignTable' striped={true} bordered={true} responsive={true}>
            <thead>
            <tr>
                <th data-field="id">Trip Name</th>
                <th data-field="details">Passenger Name</th>
                <th data-field="driver">Request Creation</th>
            </tr>
            </thead>
            <tbody>
            {requests.map( ride =>
                <tr key={ride.id}>
                    <td>{ride.name}</td>
                    <td>{ride.passengername}</td>
                    <td>{ride.time}</td>
                </tr>
            )}

            </tbody>
        </Table>
    </Card>
);
