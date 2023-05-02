import { FC, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


interface ImagesCarouselProps {
    images: string[]
}

const ImagesCarousel: FC<ImagesCarouselProps> = ({ images }) => {

    const [intervals, setIntervals] = useState(3000)

    const onChange = (_: any, item: any) => {
        setIntervals(item.props["data-interval"]);
    };

    return (
        <Carousel
            onChange={onChange}
            autoPlay
            interval={intervals}
            infiniteLoop={true}
            showThumbs={false}
        >

            {images.map(image => {
                return (
                    <img
                        key="image"
                        src={image}
                        alt=""
                        width={800}
                        height={450}
                    />

                )
            })}

        </Carousel>
    )
}

export default ImagesCarousel