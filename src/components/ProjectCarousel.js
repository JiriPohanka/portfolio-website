import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components';

const H3 = styled.h3(({ theme }) =>
    `color: ${theme.section.fontColPrimary};
    line-height: 2;
    font-weight: 500;
    padding-top: 1rem;
    text-align: center;
`)

const Desc = styled.p(({ theme }) =>
    `color: ${theme.section.fontColPrimary};
    line-height: 2;
    font-size: 90%;
    max-width: 80%;
    text-align: center;
`)


const ProjectCarousel = ({ items }) => {

    return (
        <div className='ml-auto mr-auto max-w-80'>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={130}
                totalSlides={items.length}
                className='relative'
            >
                <Slider className='rounded'>
                    {items.map((item, index) => <Slide index={index} key={index}>
                        <div className='flex flex-col items-center'>
                            <img className="object-cover" src={item.thumb} />
                            <H3>{item.title}</H3>
                            <Desc>{item.description}</Desc>
                            <div className='flex my-4'>
                                <a className="transform transition-all duration-300 px-4 py-2 inline-block rounded-lg border mr-2 bg-gray-200 hover:bg-cyan-300 hover:border-cyan-800" href={item.link} target="_blank" rel="noopener noreferrer">Live preview</a>
                                <a className="transform transition-all duration-300 px-4 py-2 inline-block rounded-lg border mr-2 bg-gray-200 hover:bg-cyan-300 hover:border-cyan-800" href={item.repo} target="_blank" rel="noopener noreferrer">Github repo</a>
                            </div>
                        </div>
                    </Slide>
                    )}

                </Slider>
                <div className='animate-fadeIn absolute w-full h-full top-0'>
                    <div className='absolute flex top-32 w-full'>
                        <div className='mr-auto -ml-8 rounded-full bg-gray-200 h-16 w-16 flex justify-center items-center'>
                            <ButtonBack className=''>prev</ButtonBack>
                        </div>
                        <div className='ml-auto -mr-8 rounded-full bg-gray-200 h-16 w-16 flex justify-center items-center'>
                            <ButtonNext>next</ButtonNext>
                        </div>
                    </div>
                </div>
            </CarouselProvider>
        </div>
    );
}

export default ProjectCarousel
