import '../styles/Home.css';
import NavBar from '../components/navbar.tsx';
import ad1 from '../assets/Aggiemart.png';
import fivestars from '../assets/5stars.png';
import salepic from '../assets/deal2salepic.png';
import benefit1 from '../assets/benefit1.png';
import benefit2 from '../assets/benefit2.png';
import benefit3 from '../assets/benefit3.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <NavBar/>


      <div className="homepage-container">

        <div className="ad-deals-container">
          <img className="ad1" src={ad1}></img>

          <div className="deals-container">
            <div className="deal1-container">
              <h2>Most Viewed Today</h2>
              <div className="deal1-deals">

                <div className="deal1-deal">
                  <img className="deal-previmg" src="https://i.etsystatic.com/26331095/r/il/545019/4734254710/il_570xN.4734254710_g87i.jpg"/>
                  <p>Cow Computer</p>
                  <label><img className="fivestars"src={fivestars} alt="five stars"/>({Math.floor(Math.random() * 100)})</label>
                  <h3>$499.99</h3>
                </div>

                <div className="deal1-deal">
                  <img className="deal-previmg" src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2015/02/19/13/cowbike.jpg?width=1200&auto=webp&quality=75"/>
                  <p>Cow Bike</p>
                  <label><img className="fivestars"src={fivestars} alt="five stars"/>({Math.floor(Math.random() * 100)})</label>
                  <h3>$199.99</h3>
                </div>

                <div className="deal1-deal">
                    <img className="deal-previmg" src="https://c8.alamy.com/comp/S366P7/a-cow-with-shoes-marken-the-netherlands-S366P7.jpg"/>
                    <p>Cow Statue</p>
                    <label><img className="fivestars"src={fivestars} alt="five stars"/>({Math.floor(Math.random() * 100)})</label>
                    <h3>$0.99</h3>
                </div>

                  
    
              </div>
            </div>

            <div className="deal2-container">
                <img className="sale-pic deal2-deal" src={salepic}></img>
                <div className="today-deal deal2-deal">
                  <h2>Today's Top Deal</h2>
                  <div className="top-deal">
                    <img className="top-deal-previmg" src="https://static.wikia.nocookie.net/hayday/images/4/40/Cow_Hungry.png/revision/latest/scale-to-width-down/250?cb=20191025194717"/>
                    <p>Hay Day Cow</p>
                    <label><img className="fivestars"src={fivestars} alt="five stars"/>({Math.floor(Math.random() * 100)})</label>
                    <h3>$0.99</h3>
                  </div>
                </div> 
            </div>
          </div>
        </div>

        <div className="benefits-container">
          <img src={benefit1}></img>
          <img src={benefit2}></img>
          <img src={benefit3}></img>
        </div>

   
          

         

        

      </div>

      <div className="view-allposts-link">
        <Link to="../allposts">
          <button className="view-allposts-button" type="button">View All Products</button>
        </Link>
      </div>
    </div>
  );
}
