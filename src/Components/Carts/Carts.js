
import './Carts.css'

const Carts = ({cartInfo, removing}) => {

   

    let name = [];
    cartInfo.map(perCart => <p>{name.push(perCart.model)} </p>)
    
    if(name.length > 4){
        alert('your Items are above 4')
    } 

 
   
   


const randoming = () => {

 let ranRe =  name[Math.floor(Math.random() * name.length)]

 alert(ranRe);


  }



   
    return (
        <div>
             <div className='addTocart'>
           <h3 className='name'>{name}</h3>
           <button onClick={randoming} className='btn'>Choose 1 For Me </button><br />
            <button onClick={()=>removing} className='btn-again'>Choose Again</button>
            
            
        </div>
        </div>
       
    );
};

export default Carts;