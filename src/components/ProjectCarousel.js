import { useContext } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';

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
    max-width: 90%;
    text-align: center;
`)

const Button = styled.a(({ theme }) =>
    `color: ${theme.section.fontColPrimary};
    `
)

const ProjectCarousel = ({ items }) => {

    const theme = useContext(ThemeContext)

    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={150}
            totalSlides={items.length}
            className='relative'
            infinite={true}
            isIntrinsicHeight={true}
            onDragStart={e => console.log(e)}
        >
            {/* <div className='flex justify-center'>{items.map((item, index) => <Dot className={`p-4`} onClick={e => console.log(e)} slide={index} children="o" />)}</div> */}
            <Slider className='rounded z-10'>
                {items.map((item, index) => <Slide index={index} key={index}>
                    <div className='flex flex-col items-center'>
                        <img className="object-cover" src={item.thumb} />
                        <H3>{item.title}</H3>
                        <Desc>{item.description}</Desc>
                        <div className='flex my-4'>
                            <Button className={`text-sm transform transition-all duration-300 px-4 py-2 inline-block rounded-lg mr-2 transform transition-all duration-500 border-2 ${theme.projectButton.fontCol} ${theme.projectButton.bgrCol} ${theme.projectButton.borderCol} `} href={item.link} target="_blank" rel="noopener noreferrer">Live preview</Button>
                            <Button className={`text-sm transform transition-all duration-300 px-4 py-2 inline-block rounded-lg mr-2 transform transition-all duration-500 border-2 ${theme.projectButton.fontCol} ${theme.projectButton.bgrCol} ${theme.projectButton.borderCol} `} href={item.repo} target="_blank" rel="noopener noreferrer">Github repo</Button>
                        </div>
                    </div>
                </Slide>
                )}

            </Slider>
            <div className='animate-fadeIn absolute w-full top-0 z-0'>
                <div className='absolute flex top-32 w-full'>
                    <ButtonBack className='mr-auto -ml-8 rounded-full bg-transparent hover:bg-gray-200 h-16 w-16 flex justify-center items-center'>
                        <div className='-ml-6'>&lt;</div>
                    </ButtonBack>
                    <ButtonNext className='ml-auto -mr-8 rounded-full bg-transparent hover:bg-gray-200 h-16 w-16 flex justify-center items-center'>
                        <div className='-mr-6'>&gt;</div>
                    </ButtonNext>
                </div>
            </div>

        </CarouselProvider >
    );
}

export default ProjectCarousel
