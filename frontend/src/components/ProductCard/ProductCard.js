import React from 'react';
import Card from "../UI/Card/Card";

const MovieCard = props => {
    const {product} = props;

    let photo = "http://localhost:8000/uploads/default_image.png";
    if (product.photos[0]) {
        photo = product.photos[0].photo
    }

    const {name, id} =product;

    const link = {
        text: 'more',
        url: '/products/' + id,
    };

    return <Card header={name} image={photo} link={link} className='h-100'/>;
};

export default MovieCard;