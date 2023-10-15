import { Container } from "./style"
import { Swiper, SwiperSlide } from 'swiper/react'
import Cards from "../Cards"


function Slider({ info, title }) {
    console.log(info, title)
    return (
        <Container>
            <h2>{title}</h2>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                grabCursor
                className="swiper"
            >
                {info.map((item, index) => (

                    <SwiperSlide key={index}>
                        <Cards item={item} />
                    </SwiperSlide>

                ))}
            </Swiper>
            
        </Container>
    )
}

export default Slider