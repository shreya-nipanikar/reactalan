import {useState, useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import Card from './Card';
import './App.css';
import Cardcart from './Cardcart';
import Icons from './Icons';



{/*const menuItems = [
  { name:"Burger",price: 10,category: 'burger'},
  { name:"Pizza", price: 15, category: 'pizza'},
  { name:"Pasta",price: 12,category: 'pasta'},
  { name:"Maggie", price: 5, category: 'pasta'},
  { name:"Tomato Salad",price: 21,category: 'saland'},
  { name:"Veggie Lasagna", price: 7, category: 'pasta'},
  ];
*/}
function App() {

  const [cart, setCart] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {

    alanBtn({ 
      key: 'd1563df44f644d402e28f447289aa9092e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if (commandData.command === 'getMenu') {
          //call client code that will react to the received command
          setMenuItems(commandData.data);
        }
        else if (commandData.command === 'addToCart') {
          addToCart(commandData.data)
        }
      },
    });

  }, []);

  const addToCart = (result) => {
       setCart((oldCart) => {
         return [...oldCart, result];
       })
  }

  return (
    <div>
    <div className="App mt-4">
      <h1>Shopping Cart With Alan</h1>
      <h6>(Say Show menu to get started)</h6>

      <div className="container-fluid">
        <div className="row">
        <div className="col-md-10 mx-auto my-4">
         <div className="row gy-3">
          
          {menuItems.map((menu,index) => {
            const linkIcons =Icons[index];
            return <Card key={menu.name} imgsrc={linkIcons.image} title={menu.name} price={menu.price} category={menu.category}
             btn={() => addToCart(menu)} />
          })}

           </div>
         </div>
        </div>
        </div>
      
      

      <h1>Your Cart</h1>
      <h6>(Say add burger to cart)</h6>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="row gy-4">
             {
               cart.map(cartItem => {
                 return <Cardcart menuname={cartItem.name} price={cartItem.price}
                   category={cartItem.category}
                  />
               })
             }  
          </div>
        </div>
        </div>
      </div>
      
      {/*{cart.map(cartItem => (
        <table key={cartItem.name}>
          <tbody>
            <tr>
            You Choosed:
            <td>Menu Item:- {cartItem.name}, Price:- {cartItem.price}, Category:- {cartItem.category}</td>
            </tr>
          </tbody>
        </table>
      ))}*/}

    </div>
    </div>
    
  );
}

export default App;
