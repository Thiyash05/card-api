import Carousel from 'react-bootstrap/Carousel';


function Carouselsection(){
    return(
        <div>
               <Carousel>
                    <Carousel.Item>
                        < img src="img/img2.jpg" className='carosel-img' />
                        <Carousel.Caption>
                        <h3>Top Movies</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        < img src="img/img2.jpg" className='carosel-img'/>
                        <Carousel.Caption>
                        <h3>Series</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        < img src="img/img2.jpg" className='carosel-img' />
                        <Carousel.Caption>
                        <h3>Drama's</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
        </div>
    )
}
export default Carouselsection;