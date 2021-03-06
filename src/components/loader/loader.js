import React from "react";
import { ProgressBar } from "react-materialize";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

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
