import Recat, { useState, useEffect } from 'react'
//import './App.css'
import Products from './components/Products';
const App =() =>{

  const  [search, setSearch] = useState('')
  const  [data, setData]=useState([])

  const YOUR_APP_ID = "4ed385bd";
  const YOUR_APP_KEY ="fc484e95dc4d18552b2fe3aa6c17b685	";

  const submitHandler= e =>{
    e.preventDefault();
    console.log(search)
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response=>response.json()
    ).then(data=>setData(data.hits))
  }

 
  return(
    <div>
      <center>
      <h1>Food Delivery APP</h1>
      <form onChange={submitHandler}>
        <input  type="text" placeholder='Enter the food item' value={search} onChange={e=>setSearch(e.target.value)} /><br/><br/>
        <input type="submit"  value="search" className="btn btn-primary"/>

      </form><br/>

      {data.length>=1 ?<Products data={data}/>:null}
      </center>
      </div>
  )
}

export default App