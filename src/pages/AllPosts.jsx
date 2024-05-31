import React from 'react';
import NavBar from '../components/navbar.tsx';
import '../styles/allposts.css';
import fivestars from '../assets/5stars.png';



export default function AllPosts() {
    return (
        <div className="allposts-return">
            <NavBar/>
            <img className="allposts-bg" src="https://i.pinimg.com/736x/ce/e9/e6/cee9e6fc30ec55fc4b1839f021cebb88.jpg"/>
            <div className="allposts-page-container">
                <div className="products-sidebar">
                    <h1>Delivery Options</h1>
                    <label><input type="checkbox"/>One-day</label>
                    <label><input type="checkbox"/>Standard</label>
                    <hr></hr>

                    <h1>Shipping from</h1>
                    <label><input type="radio"/>All</label>
                    <label><input type="radio"/>Davis</label>
                    <hr></hr>

                    <h1>Discounts</h1>
                    <label><input type="checkbox"/>On sale</label>
                    <hr></hr>

                    <h1>Price Filter</h1>
                    <div className="pricefilter"><input type="number" placeholder="$"/><span className="hyphen">-</span><input type="number" placeholder="$"/></div>
                    
                </div>
                <div className="all-products">
                    <ProductCard info={{src: "https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg", 
                                        name: "Cow thing",
                                        price: "$99.99"}}/>
                    

                    <ProductCard info={{src: "https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg",
                                        name: "Cow thing 2",
                                        price: "$79.99"}}/>

                    <ProductCard info={{src: "https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg",
                                        name: "Cow thing 2",
                                        price: "$79.99"}}/>

                    <ProductCard info={{src: "https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg",
                                        name: "Cow thing 2",
                                        price: "$79.99"}}/>
                </div>
            </div>
        </div>
    );

}


export function ProductCard({info}) {
    return(
        <div className="product-prev">
            <img className="product-previmg" src={info.src}/>
            <h2>{info.name}</h2>
            <label><img className="product-5stars" src={fivestars}></img>({Math.floor(Math.random() * 100)})</label>
            <h2>{info.price}</h2>
            
        </div>
    );
}