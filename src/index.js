//imoprting the libraries
import React from  'react' ;
import ReactDOM from 'react-dom' ;
import faker from  'faker'   ;
import Commentdetails from './Commentdetails' ;
import ApprovalCard from './ApprovalCard' ;
//making the app
const App=() => {   
    return (
        <div  className="ui container comments">
            <ApprovalCard>
           <Commentdetails 
            author ="sam" 
            timeago="Today at 4:45pm" 
            text="qwertyazxcv" 
            imageq={faker.image.avatar()}/></ApprovalCard>
             <ApprovalCard>
           <Commentdetails  author="samar" timeago="yes at 4:45pm"text="qwertyddddd"imageq={faker.image.avatar()}/>
           </ApprovalCard>
           <ApprovalCard>
           <Commentdetails  author="samy" timeago="gdsdgd" text="qwertyassd"imageq={faker.image.avatar()}/>
           </ApprovalCard> <ApprovalCard>
           <Commentdetails author="summer" timeago="fhbre" text="qwerty"imageq={faker.image.avatar()}/>
           </ApprovalCard>
        </div>
    );
};
//showing the app
ReactDOM.render(<App/>,document.querySelector('#root'));