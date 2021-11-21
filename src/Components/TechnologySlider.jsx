import React from "react"
import styled from "styled-components"
import { DefaultText, NavbarText, H3 } from "../Theme/global"

const TechnologySlider = ({ name, images, description }) => {
	const tabletSize = window.matchMedia("(max-width: 900px)").matches
	return (
		<>
			<Content>
				<SubTitle>The terminology...</SubTitle>
				<MainTitle>{name}</MainTitle>
				<BodyText>{description}</BodyText>
			</Content>
			<ImageContainer>
				<Image src={tabletSize ? images.landscape : images.portrait} />
			</ImageContainer>
		</>
	)
}
const Content = styled.div`
	height: 90%;
	justify-content: center;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 900px) {
		align-items: center;
		order: 1;
	}
`
const SubTitle = styled(NavbarText)`
	font-size: 1rem;
	text-transform: uppercase;
	color: var(--second-color);
	margin-bottom: 2rem;
`
const MainTitle = styled(H3)`
	color: var(--third-color);
	margin-bottom: 0.5rem;
	text-transform: uppercase;
	@media screen and (max-width: 900px) {
		font-size: 2.5rem;
	}
`
const BodyText = styled(DefaultText)`
	font-size: 1.1rem;
	line-height: 2rem;
	width: 80%;
	@media screen and (max-width: 900px) {
		text-align: center;
	}
	@media screen and (max-width: 600px) {
		font-size: 0.7rem;
	}
`
const ImageContainer = styled.div`
	max-height: 420px;
	min-height: 300px;
	width: 90%;
	@media screen and (max-width: 900px) {
		width: 100%;
		height: 200px;
		max-height: 200px;
		min-height: 200px;
		order: 3;
	}
`
const Image = styled.img`
	max-width: 100%;
	max-height: 100%;
	object-fit: fill;
	width: 100%;
`

export default TechnologySlider
