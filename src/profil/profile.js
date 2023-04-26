import React from 'react'
import image from '../images/cat.png';
import PropTypes from "prop-types";
// eslint-disable-next-line no-use-before-define
Profile.propTypes ={
    fullName:PropTypes.string,
    Bio:PropTypes.string,
    Profession:PropTypes.string,
}

Profile.defaultProps = {
    fullName: "Rahul",
    bio: "deepblue",
    Profession: "xxxxxxxxxx"
  }
    
function Profile(props) {
    return (
        <div>
            <p> Hello, i'm is {props.fullName} ,{props.Bio}, {props.Profession}, </p>
            {props.children}
            <button onClick={() => props.sayhello(props.fullName)}> show </button>
        </div>
    );

}

export default Profile
