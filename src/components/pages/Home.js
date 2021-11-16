import React from 'react'
import './Home.css'
import Banner from '../Banner.js'
import Header from '../Header.js'
import Footer from '../Footer.js'
import Card from '../Card.js'

function Home() {
  return (

  <div className="content-container">

    <div className= 'home'>
      <Header />
      <Banner />

      <div className='home_section'>
        <Card
          src=""
          title="List a parking space"
          description="With AMPD, you can rent your bay (driveway, garage, mooring, land, etc.) at home or work to others while you aren’t using it."
        />
        <Card
          src=""
          title="Tailored solutions for any car park"
          description="AMPD is designed to automate and bring digital functionality to ANY car park. Learn more about AMPD's solutions for car park operators, airports, shopping malls, hotels and more here."
        />
        <Card
          src=""
          title="Invest in AMPD"
          description="Few investment opportunities address such a sizeable market as KERB does. KERB is a disruptive global mobility ecosystem that is activating the kerbside through technology and IoT - right across the world."
        />
      </div>
    </div>

  

  </div>

  )

}

export default Home;
