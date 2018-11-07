import React from "react";
import  '../../styles/styles.scss'
import '../../styles/dashboard/getrides.css'
import {Table} from 'react-materialize'


export const GetRidesComponent = (props)=>(

    <div>
        <Table s={6} className='alignTable' responsive={true}>
            <thead>
            <tr>
                <th data-field="id">Name</th>
                <th data-field="details">Details</th>
                <th data-field="driver">Driver</th>
                <th data-field="price">Price</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>name</td>
                {/*<td>{props.details}</td>*/}
                {/*<td>{props.driver}</td>*/}
                {/*<td>{props.price}</td>*/}
            </tr>
            </tbody>
        </Table>
    </div>
);
