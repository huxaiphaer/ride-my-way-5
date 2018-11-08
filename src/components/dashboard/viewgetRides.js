import React from "react";
import {Button, Card, Table} from 'react-materialize'
import  '../../styles/rides/rides.scss';
import '../../styles/landingpage/landingpage.scss'
import {Link} from "react-router-dom";

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
                        <td>
                            <Link to={`/details/${ride.id}`}>
                                <Button className='purple'>More Details</Button>
                            </Link>
                        </td>
                    </tr>
                )}

                </tbody>
            </Table>
        </Card>
);

