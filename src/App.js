import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours,setTours] = useState([]);

  const removeTour = (id) =>{
    const newTours = tours.filter((tour)=>tour.id !== id)
    setTours(newTours);
  }
const fetchTours = async () => {
  setLoading(true);
  try{
    const response = await fetch(url)
    const tours = await response.json()
    setLoading(false)
    setTours(tours)
  }catch(error){
    setLoading(false);
    console.log(error)
  }
}
useEffect(()=>{
  fetchTours()
},[])//componentDidMount()
if(loading){
  return(
    <main>
      <Loading/>
    </main>
  )
}
if(tours.length === 0){//eğer gösterilecek veri yoksa verileri tekrar çekmek için kullanılan yapım
  return(
    <main>
      <div className='title'>
        <h2>no tours left</h2>
        <button className='btn' onClick={()=> fetchTours() }>
          refresh
        </button>
      </div>
    </main>
  )
}
return(//gösterilecek ve silinecek verileri gösterdiğim ve işlemleri yaptığım alanım
  <main>
    <Tours tours={tours} removeTour={removeTour}/>
  </main>
)
}

export default App
