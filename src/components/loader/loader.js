import { ProgressBar } from "react-materialize";
import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import  '../../styles/loader/loader.css';

export const LoaderComponent = (props)=> {
    return props.isRequestLoading ?
        (
            <div>
                <ProgressBar className='purple' active='false'/>
            </div>
        ) : null
};


LoaderComponent.propTypes = {
    isRequestLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({ ...state.requestLoadingReducer });



export default connect(mapStateToProps)(LoaderComponent);
