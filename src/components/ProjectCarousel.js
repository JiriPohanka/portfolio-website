import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const ProjectCarousel = ({ items }) => {

    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={3}
        >
            <Slider>
                {items.map((item, index) => <Slide index={index} key={index}>
                    <img className="object-cover" src={item.thumb} />
                    <div>{item.title}</div>
                    <div>{item.description}</div>
                </Slide>
                )}

            </Slider>
            <ButtonBack>prev</ButtonBack>
            <ButtonNext>next</ButtonNext>
        </CarouselProvider>
    );
}

export default ProjectCarousel
