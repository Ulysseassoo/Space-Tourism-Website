import React, { useRef } from "react"
import { Container, DefaultText } from "../Theme/global"
import Background from "../assets/crew/background-crew-desktop.jpg"
import BackgroundMobile from "../assets/crew/background-crew-mobile.jpg"
import styled from "styled-components"
import { Data } from "../data"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, EffectCreative } from "swiper"
import SliderContent from "../Components/SliderContent"

// Import styles for swiper
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-creative"

// install Swiper modules
SwiperCore.use([Pagination, EffectCreative])

const Crew = () => {
	const paginationRef = React.useRef(null)

	return (
		<CrewContainer
			image={Background}
			mobileImage={BackgroundMobile}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}>
			<Flex>
				<Title>
					<Index>02</Index>Meet your crew
				</Title>
				<SliderContainer>
					<SwiperContainer
						pagination={true}
						spaceBetween={100}
						pagination={{ clickable: true }}
						effect={"creative"}
						grabCursor={true}
						pagination={{ el: paginationRef.current }}
						creativeEffect={{
							prev: {
								shadow: true,
								translate: [0, 0, -400],
								opacity: 0
							},
							next: {
								translate: ["100%", 0, 0]
							}
						}}
						onBeforeInit={(swiper) => {
							swiper.params.pagination.el = paginationRef.current
						}}>
						<SwiperBullets ref={paginationRef} />

						{Data.crew.map((value, index) => {
							return (
								<SwiperSlide key={index}>
									<SliderContent {...value} />
								</SwiperSlide>
							)
						})}
					</SwiperContainer>
				</SliderContainer>
			</Flex>
		</CrewContainer>
	)
}

const CrewContainer = styled(Container)`
	height: 100vh;
	display: flex;
	flex-direction: column-reverse;
	overflow: hidden;
`
const SwiperContainer = styled(Swiper)`
	height: 100%;
	margin: 0;
	width: 100%;
`

const SwiperBullets = styled.div`
	position: absolute;
	bottom: 50px !important;
	@media screen and (max-width: 900px) {
		display: none;
	}
`

const Flex = styled.div`
	height: 75%;
	width: 100%;
	padding: 0 6rem;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 900px) {
		height: 85%;
	}
	@media screen and (max-width: 600px) {
		padding: 0;
	}
`

const Title = styled.h2`
	font-family: "Barlow Condensed", sans-serif;
	font-size: 1.6rem;
	margin-bottom: 4rem;
	display: inline-flex;
	letter-spacing: 0.3rem;
	text-transform: uppercase;
	color: var(--third-color);
	@media screen and (max-width: 900px) {
		font-size: 1.1rem;
		margin: 0;
	}
	@media screen and (max-width: 600px) {
		justify-content: center;
	}
`
const Index = styled.p`
	font-weight: bold;
	padding-right: 1rem;
	opacity: 0.25;
`
const SliderContainer = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	@media screen and (max-width: 900px) {
		flex-direction: column;
	}
	@media screen and (max-width: 600px) {
		padding: 2rem 1rem;
	}
`
export default Crew
