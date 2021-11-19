import React from "react"
import styled from "styled-components"
import HomeBackground from "../assets/home/background-home-desktop.jpg"
import HomeBackgroundMobile from "../assets/home/background-home-mobile.jpg"
import { Container, DefaultText, H1, H5, H4 } from "../Theme/global"

const Home = () => {
	return (
		<HomeContainer
			image={HomeBackground}
			mobileImage={HomeBackgroundMobile}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}>
			<Flex>
				<Center>
					<TextTitle>So, you want to travel to</TextTitle>
					<H1>Space</H1>
					<BodyText>
						Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit
						back, and relax because we’ll give you a truly out of this world experience!
					</BodyText>
				</Center>
				<CenterEnd>
					<Circle>
						<Text>Explore</Text>
					</Circle>
				</CenterEnd>
			</Flex>
		</HomeContainer>
	)
}

const HomeContainer = styled(Container)`
	display: flex;
	align-items: end;
	overflow: hidden;
`
const Flex = styled.div`
	padding: 8rem;
	display: flex;
	align-items: center;
`
const Center = styled.div`
	flex: 2;
`
const CenterEnd = styled(Center)`
	align-self: end;
	flex: 1;
`
const Circle = styled.button`
	padding: 1rem;
	height: 200px;
	background: white;
	width: 200px;
	margin: 0 0 0 auto;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	position: relative;
	&::after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: rgba(255, 255, 255, 0.1);
		width: 100%;
		height: 100%;
		border-radius: 50%;
		transition: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}
	&:hover {
		&::after {
			width: 170%;
			height: 170%;
		}
	}
`
const Text = styled(H4)`
	letter-spacing: 0.4rem;
	text-transform: uppercase;
	font-size: 1.2rem;
	z-index: 5;
`
const BodyText = styled(DefaultText)`
	line-height: 1.8rem;
	max-width: 50%;
`
const TextTitle = styled(H5)`
	margin-bottom: 2.5rem;
`

export default Home
