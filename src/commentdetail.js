//importing the libraries
import  React from 'react';
import faker from 'faker' ;
// new component 

const commentdetail = () => {
return (
    <div className="comment">
    <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
    </a>
    <div className="content">
        <a href="/" className="author">
          SAMAR
        </a>
        <div className="metadata">
           <span className="date">Today at 6:00PM</span>
        </div>
        <div className="text">NICE BLOG POST</div>
    </div>
</div>
);
};
export default commentdetail ;
