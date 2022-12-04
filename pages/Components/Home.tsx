import React from "react";
import { Container } from '@mui/material'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Home () {

    const images = [
        '/activites/61667.jpg',
        '/activites/69288.jpg',
        '/activites/69301.jpg',
    ];

    return (
        <Container maxWidth='lg' className="slide-images" style={{  }}>
            <div>
                <Slide>
                    <div className="each-slide-effect">
                        <div 
                            style={{ 
                                'backgroundImage': `url(${images[0]})` }}>
                            {/* <span>Slide 1</span> */}
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                            {/* <span>Slide 2</span> */}
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                            {/* <span>Slide 3</span> */}
                        </div>
                    </div>
                </Slide>
            </div>
        </Container>
    );
}

export default Home;