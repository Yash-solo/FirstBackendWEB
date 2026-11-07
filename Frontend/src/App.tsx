import { useEffect } from 'react';
import './App.css'
import { useState } from 'react';
import ReviewCard from './componants/ReviewCard';
function App() {

  const [houseData, setHousedata] = useState([]);
  const [reviewdata, setreviewData] = useState([]);
  const [UserData, setUserData] = useState({
    'firstName': "",
    'lastName': "",
    'email': "",
    "mobileNo": 0,
    "Message": "",
  });

  interface HouseData {
    id: number,
    House: string,
    Rent: number,
  }
  interface ReviewData {
    id: number,
    Name: string,
    Stars: number,
    House: string,
    message: string

  }

  useEffect(() => {
    async function getReviewData() {
      const response = await fetch(`/api/ReviewData`);
      if (response.ok) {
        const data = await response.json();
        setreviewData(data);
      } else {
        console.log("Server is not responding!");
      }
    }
    getReviewData();
  })
  const renderReviewCards = reviewdata.map((reviews: ReviewData) => {
    return <ReviewCard key={reviews.id} revName={reviews.Name} House={reviews.House} stars={reviews.Stars} message={reviews.message} />
  })
  useEffect(() => {
    async function getData() {
      const response = await fetch('/api/Udata');
      if (response.ok) {
        const data = await response.json();
        setHousedata(data);
      } else {
        console.log("Data is not there");
      }
    }
    getData();

  }, [])
  async function sendData() {
    const response = await fetch('/api/giveData', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(UserData)
    });
    if (response.ok) {
      const data = await response.json();
      alert(data.message);
      setUserData({
        'firstName': "",
        'lastName': "",
        'email': "",
        "mobileNo": 0,
        "Message": "",
      })

    } else {
      console.log("Server is not responding!");
    }
  }

  const renderhouseId = houseData.map((houseData: HouseData) => {
    return <h2 key={houseData.id} >{houseData.id}</h2>
  })
  const renderhouseprice = houseData.map((houseData: HouseData) => {
    return <h2 key={houseData.id}>{houseData.Rent}</h2>
  })
  const renderhousetypeData = houseData.map((house: HouseData) => {
    return <h2 key={house.id}>{house.House}</h2>
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  }

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
        <h1>Reviews</h1>
      </section>
      <section className='reviews'>

        {renderReviewCards}
      </section>
      <section className='contactUs'>
        <div className='contactusText'>
          <h1>Contact Us</h1>
          <h4>Fill this form and our team will reach out you by you Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, deserunt eaque suscipit placeat minima, minus sit officiis excepturi itaque vel harum quidem nisi, rerum nulla odit quis nemo cupiditate possimus?</h4>
        </div>
        <form>
          <div className='inputes'>
            <label htmlFor="firstName">
              <span>First Name</span>
              <input name="firstName" value={UserData.firstName} onChange={handleChange} type="text" placeholder='Enter first Name' />
            </label>
            <label htmlFor="lastName">
              <span>Last Name</span>
              <input name="lastName" value={UserData.lastName} onChange={handleChange} type="text" placeholder='Email Last Name' />
            </label>
            <label htmlFor="mobileNo">
              <span>Mobile Number</span>
              <input name="mobileNo" value={UserData.mobileNo} onChange={handleChange} type="text" placeholder='Enter Mobile Number' />
            </label>
            <label htmlFor="email">
              <span>Email</span>
              <input name="email" value={UserData.email} onChange={handleChange} type="text" placeholder='Enter Email address' />
            </label>
          </div>
          <p>Your message</p>
          <textarea name="Message" value={UserData.Message} onChange={handleChange} id="message" placeholder='Enter your message'></textarea>
          <button onClick={() => sendData()} type="button">Submit</button>
        </form>
      </section>
    </>
  )
}

export default App
