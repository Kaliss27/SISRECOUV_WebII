import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';



export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <React.Fragment>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://scontent.fntr5-1.fna.fbcdn.net/v/t1.0-9/90387983_2779237368821158_6816712920999657472_o.jpg?_nc_cat=103&ccb=2&_nc_sid=e3f864&_nc_eui2=AeH67EBVd8oGmQjKbcvvHq56CZDaSkD_itcJkNpKQP-K1-h0VbmICj1XHcaXkl02037dBZIqiyQ7AQ1edt6JM3tB&_nc_ohc=oEi-ZEDVHBIAX8eWrxJ&_nc_oc=AQkCYPFNSmWDEsjmfEXIXQCqLQB5MIImFAafqluQ9pN-T8jI54K19DqpkHPfF2oqf6PGp31A7kmUefFps1UfxJjy&_nc_ht=scontent.fntr5-1.fna&oh=1f747f3528235a6d86b6fbab3920ec17&oe=6027F2A3"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://scontent.fntr5-1.fna.fbcdn.net/v/t1.0-9/57368760_2144297025648532_5373429044245168128_o.jpg?_nc_cat=110&ccb=2&_nc_sid=e3f864&_nc_eui2=AeFpko_0PFI2CA9Qq-D5t4mQROlWKlSgXdZE6VYqVKBd1sQKm4YzQD7zOOK5ttdDOwpWnJ0JOe-pBNc0RViFJ5wW&_nc_ohc=QEHeRFX0E_IAX9b3dgT&_nc_ht=scontent.fntr5-1.fna&oh=2ce3256f83ac50f983c07c642c4a001e&oe=60250419"
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </React.Fragment>
       
    );
}