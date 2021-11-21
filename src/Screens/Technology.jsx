import React, { useState } from "react"
import { Container } from "../Theme/global"
import Background from "../assets/technology/background-technology-desktop.jpg"
import BackgroundTablet from "../assets/technology/background-technology-tablet.jpg"
import BackgroundMobile from "../assets/technology/background-technology-mobile.jpg"
import styled, { css } from "styled-components"
import { Data } from "../data"
import TechnologySlider from "../Components/TechnologySlider"

const Technology = () => {
	const [activeSlide, setActiveSlide] = useState(1)
	return (
		<TechnologyContainer
			image={Background}
			mobileImage={BackgroundMobile}
			tabletImage={BackgroundTablet}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}>
			<Flex>
				<Title>
					<Index>03</Index>Space launch 101
				</Title>
				<SliderContainer>
					<Navigation>
						{Data.technology.map((data, index) => {
							return (
								<Circle index={index + 1} activeSlide={activeSlide} key={index} onClick={() => setActiveSlide(index + 1)}>
									{index + 1}
								</Circle>
							)
						})}
					</Navigation>
					<TechnologySlider {...Data.technology[activeSlide - 1]} />
				</SliderContainer>
			</Flex>
		</TechnologyContainer>
	)
}

const TechnologyContainer = styled(Container)`
	height: 100vh;
	display: flex;
	flex-direction: column-reverse;
`

const Flex = styled.div`
	height: 75%;
	width: 100%;
	padding: 0 0 0 6rem;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 900px) {
		height: 85%;
		padding: 0;
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
		margin-left: 2rem;
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
	flex: 1;
	display: flex;
	gap: 2rem;
	@media screen and (max-width: 900px) {
		flex-direction: column-reverse;
	}
`
const Navigation = styled.div`
	width: 20%;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 2rem;
	height: 90%;
	order: 2;
	justify-content: center;
	@media screen and (max-width: 900px) {
		flex-direction: row;
		width: 100%;
		height: 20%;
	}
`
const Circle = styled.button`
	border-radius: 50%;
	height: 60px;
	width: 60px;
	background-color: transparent;
	border: 1px solid rgba(255, 255, 255, 0.25);
	color: var(--third-color);
	transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
	cursor: pointer;
	outline: transparent;
	&:hover {
		border: 1px solid var(--third-color);
	}
	@media screen and (max-width: 900px) {
		height: 50px;
		width: 50px;
	}
	${({ index, activeSlide }) =>
		index === activeSlide &&
		css`
			background-color: var(--third-color);
			color: var(--first-color);
		`}
`

export default Technology
