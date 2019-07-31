//importing the libraries
import  React from 'react';
import faker from 'faker' ;
// new component 

const Commentdetails = (props) => {
 console.log(props); // this wil show an object with property author and value which we have given to it. 
return (
<div className="comment">
    <a href="/" className="avatar">
        <img alt="avatar" src={props.imageq} />
    </a>
    <div className="metadata">
        <div className="date">{props.timeago}</div>
    </div>
    <div className="text">{props.text}</div>
</div> 
);
};
export default Commentdetails ;
