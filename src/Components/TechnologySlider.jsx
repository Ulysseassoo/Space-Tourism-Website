import React from "react"
import styled from "styled-components"
import { DefaultText, NavbarText, H3 } from "../Theme/global"

const TechnologySlider = ({ name, images, description }) => {
	return (
		<>
			<Content>
				<SubTitle>The terminology...</SubTitle>
				<MainTitle>{name}</MainTitle>
				<BodyText>{description}</BodyText>
			</Content>
			<ImageContainer>
				<Image src={images.portrait} />
			</ImageContainer>
		</>
	)
}
const Content = styled.div`
	height: 90%;
	justify-content: center;
	display: flex;
	flex-direction: column;
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
`
const BodyText = styled(DefaultText)`
	font-size: 1.1rem;
	line-height: 2rem;
	width: 80%;
`
const ImageContainer = styled.div`
	max-height: 420px;
	min-height: 300px;
	width: 90%;
`
const Image = styled.img`
	max-width: 100%;
	max-height: 100%;
	object-fit: fill;
	width: 100%;
`

export default TechnologySlider
