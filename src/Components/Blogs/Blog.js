import React from 'react';

const Blog = () => {
    return (
        <div style={{width:'80%', textAlign:'center',margin:'auto',paddingTop:'40px'}}>
            <q><b>How React Work ?</b> </q>
            <p>There's no question that React.js is the most talked-about JavaScript framework in years <br />  Along with Angular and lately Vue, React has been a significant force in the way we build web applications. <br /> But what best describes React.js?
             It’s a library. For building user interfaces. This is perfect because, more often than not, this is all we want. The best part about this description is that it highlights React’s simplicity. It’s not a mega framework. It’s not a full-stack solution that’s going to handle everything from the database to real-time updates over web socket connections. We don’t actually want most of these pre-packaged solutions, because in the end, they usually cause more problems than they solve. Facebook sure did listen to what we want.</p>
             <br /> <br />

             <q><b>How State Work ?</b> </q>
            <p>State is a plain Javascript Object to change the component's data over time. It allows us to change data in every time. By using Usestate() we can start a value.then by function data is changed when need.this is declared by two array, 1 is for starting value, and the other is for changing value. The other is always function. <br />
                It works to change data of 
                the first array. we use it like this const [product, Setprodunct] = useState([])
        it is used in class based component type of this.state(). But works and processing are similar, using is different.
           .</p>
           <p> Finally , we say that The heart of every React component is its “state”, an object that determines how that component renders & behaves. In other words, “state” is what allows you to create components that are dynamic and interactive.</p>
        </div>
    );
};

export default Blog;