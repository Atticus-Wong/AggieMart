import React from 'react';
import NavBar from '../components/navbar.tsx';
import '../styles/allposts.css';
import fivestars from '../assets/5stars.png';



export default function AllPosts() {
    return (
        <div>
            <NavBar/>
            <div className="allposts-page-container">
                <div className="products-sidebar">
                    <h1>Sidebar</h1>
                    <p>What to put here?</p>
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