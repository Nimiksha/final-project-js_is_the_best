import React from 'react';
import ListingCard from '../components/ListingCard/ListingCard.js';
import Navigationbar from '../components/Navbar/Navigationbar';

//const wsClient = new WebSocket('ws://localhost:5000')
const Listings = [{
    img: './placeholder-image.jpg',
    title: 'Static Listing',
    price: '$6.99',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat imperdiet dui, ',
},
{
    img: './placeholder-image.jpg',
    title: 'Static Listing',
    price: '$6.99',
    description: 'Lorem ipsum diet eros venenatis. et feugiat arcu vestibulum sit amet. Aliquam varius, erat ac mollis imperdiet, purus mauris pharetra arcu, a aliquet eros elit iaculis aPraesent viverra pellentesque erat ac lacinia. Morbi gravida metus nec placerat pellentesque.',
},
{
    img: './placeholder-image.jpg',
    title: 'Static Listing',
    price: '$6.99',
    description: ' augue pulvinar a. Sed sodales arcu in dolor turpis. Nulla a velit eget quam facilisis scelerisque. Nulla ac risus lorem.',
},
{
    img: './placeholder-image.jpg',
    title: 'Static Listing',
    price: '$6.99',
    description: 'Laugue pulvinar a. Sed aliquet dolor turpis. Vestibulum mollis id velit luctus semper. Nulla ac risus lorem.',
},
{
    img: './placeholder-image.jpg',
    title: 'Static Listing',
    price: '$6.99',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. C. Nulla ac risus lorem.',
},
]

const Home = () => {
    return(
        <div class='Home'>
            <Navigationbar />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
        </div>
    );
}

export default Home
