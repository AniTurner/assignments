import React, {Component} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel showThumbs={false} autoPlay={true} stopOnHover={true} transitionTime={10} style={{width: '50vw'}}>
                <div className='carousel'>
                    <img src='https://www.eatthis.com/wp-content/uploads/media/images/ext/175228805/sugary-restaurant-meals-ocharleys-babybackribs-500x375.jpg' alt='pic1'/>
                </div>
                <div className='carousel'>
                    <img src='https://secure.i.telegraph.co.uk/multimedia/archive/02999/restaurant_2999753b.jpg' alt='pic2'/>
                </div>
                <div className='carousel'>
                    <img src='https://www.goodfood.com.au/content/dam/images/h/0/f/a/q/i/image.related.wideLandscape.940x529.h0fa4n.png/1515456591895.jpg' alt='pic3'/>
                </div>
                <div className='carousel'>
                    <img src='http://tag-restaurant.com/wp-content/uploads/2014/12/tag-social-food-and-environment-11.jpg' alt='pic4'/>
                </div>
                <div className='carousel'>
                    <img src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/05/05/09/gourmet-istock.jpg?w968h681' alt='pic5'/>
                </div>
            </Carousel>
        )
    }
}

export default DemoCarousel
