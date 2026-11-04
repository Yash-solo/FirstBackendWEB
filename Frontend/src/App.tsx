import {useEffect } from 'react';
import './App.css'
import { useState } from 'react';
function App() {

  const [houseData,setHousedata] = useState([]);
  interface HouseData{
    id:number,
    House: string,
    Rent: number,
  }

  useEffect(()=>{
    async function getData(){
      const response = await fetch('/api/Udata');
      if(response.ok){
        const data = await response.json();
        setHousedata(data);
      }else{
        console.log("Data is not there");
      }
    }
    getData();

  },[])
  const renderhouseId = houseData.map((houseData: HouseData)=>{
    return <h2>{houseData.id}</h2>
  })
  const renderhouseprice = houseData.map((houseData: HouseData)=>{
    return <h2>{houseData.Rent}</h2>
  })
  const renderhousetypeData = houseData.map((house: HouseData)=>{
    return <h2>{house.House}</h2>
  })
  return (
    <>
      <nav >
        <h2>SeekHome</h2>
        <ul>
          <li>Home</li>
          <li>Houses</li>
          <li>Prices</li>
          <li>About us</li>
        </ul>
        <button>Contact us</button>
      </nav>
      <main>
        <div className='first'>
          <h1>Welcome to SeekHome</h1>
          <h4>Everyone thinks same but one who think differntly </h4>
          <p>On our website we provides a great deals on home loan and homes for rent Everywhere in the country</p>
          <div className='myBtn'>
            <button>Explore</button>
            <button>Watch House</button>
          </div>
        </div>
        <div className='myDiv2'><img src="./public/Good-team-bro-500x500.png" alt="" /></div>
      </main>
      <section>
        <h1>House Name and rent according availability!</h1>
        <div className='renderTable'>
          <div>
            {renderhouseId}
          </div>
          <div>
            {renderhousetypeData}
          </div>
          <div>
            {renderhouseprice}
          </div>
        </div>
      </section>
    </>
  )
}

export default App
