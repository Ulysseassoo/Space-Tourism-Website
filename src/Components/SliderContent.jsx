import React from "react"
import { Container, DefaultText, H2, H3, H4 } from "../Theme/global"
import styled from "styled-components"

const SliderContent = ({ name, role, bio, images }) => {
	return (
		<Section>
			<Box>
				<Text>
					<Gray>{role}</Gray>
					<Name>{name}</Name>
					<BodyText>{bio}</BodyText>
				</Text>
			</Box>
			<Image src={images.png} alt="image" />
		</Section>
	)
}

const Section = styled.div`
	display: flex;
	height: 65vh;
	width: 100%;
`

const Gray = styled(H4)`
	text-transform: uppercase;
	opacity: 50%;
	color: var(--third-color);
	margin-bottom: 1rem;
`
const Name = styled(H3)`
	text-transform: uppercase;
	color: var(--third-color);
	margin-bottom: 1rem;
`
const Image = styled.img`
	object-fit: contain;
	flex: 1;
`
const Text = styled.div`
	@media screen and (max-width: 900px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
`
const BodyText = styled(DefaultText)`
	line-height: 1.6rem;
	max-width: 50%;
`
const Box = styled.div`
	flex: 2;
	display: flex;
	align-items: center;
`
export default SliderContent
