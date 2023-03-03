import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect, useRef, SyntheticEvent, MutableRefObject } from 'react';
import CarouselData from '~/data/carousel.json'
import { icDown , icUp } from '~/assets/fontAwesome';
import { CarouselContent, CarouselItem, Title, Buttons, Text, TitleItem, TextArea, CarouselWrap } from '~/components/molecules/Carousel/Carousel.styles'

const Carousel = () => {
    const CarouselPt = CarouselData['pt-BR']
    const carousel = useRef(null) as unknown as MutableRefObject<HTMLDivElement>

    const handleLeftClick = (e: SyntheticEvent<EventTarget>) =>{
        e.preventDefault();
        carousel.current.scrollLeft -= 184;
    }

    const handleRightClick = (e: SyntheticEvent<EventTarget>) =>{
        e.preventDefault();
        carousel.current.scrollLeft += 184;
    }

    return (
        <>
        <CarouselWrap>
            <Title>Na mídia</Title>
            <CarouselContent ref={carousel}>
                
                {CarouselPt && CarouselPt.map((menuItem, i) => {
                    return (
                        <CarouselItem key={i}>
                            <Link href={menuItem.link}/>
                            <Image src={menuItem.src} alt={menuItem.alt} width={menuItem.width} height={menuItem.height}></Image>
                            <TextArea>
                                <TitleItem>{menuItem.title}</TitleItem>
                                <Text>{menuItem.text}</Text>
                            </TextArea>
                        </CarouselItem>
                    );
                })}
            </CarouselContent>
        </CarouselWrap>
        <Buttons>
            <button onClick={handleLeftClick}> {icDown} </button>
            <button onClick={handleRightClick}> {icUp} </button>
        </Buttons>
        </>
    )
}

export default Carousel