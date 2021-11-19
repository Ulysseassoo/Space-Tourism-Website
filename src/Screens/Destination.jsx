import React, { useState } from "react"
import { Container, DefaultText, H1, H2, SubH1, SubH2 } from "../Theme/global"
import Background from "../assets/destination/background-destination-desktop.jpg"
import BackgroundMobile from "../assets/destination/background-destination-mobile.jpg"
import BackgroundTablet from "../assets/destination/background-destination-tablet.jpg"
import styled, { css } from "styled-components"
import Data from "../data.json"

const Destination = () => {
	const [activeTab, setActiveTab] = useState(0)

	return (
		<DestinationContainer
			image={Background}
			mobileImage={BackgroundMobile}
			tabletImage={BackgroundTablet}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}>
			<Flex>
				<Title>
					<Index>01</Index>Pick your destination
				</Title>
				<Content>
					<Center>
						<Image src={Data.destinations[activeTab].images.png} alt="image" />
					</Center>
					<CenterColumn>
						<Tabs>
							{Data.destinations.map((value, index) => {
								return (
									<TabName key={index} index={index} activeTab={activeTab} onClick={() => setActiveTab(index)}>
										{value.name}
									</TabName>
								)
							})}
						</Tabs>
						<Text>
							<H2>{Data.destinations[activeTab].name}</H2>
							<BodyText>{Data.destinations[activeTab].description}</BodyText>
							<Line />
							<Specifics>
								<Box>
									<SubH2>AVG. DISTANCE</SubH2>
									<SubHeader>{Data.destinations[activeTab].distance}</SubHeader>
								</Box>
								<Box>
									<SubH2>Est. travel time</SubH2>
									<SubHeader>{Data.destinations[activeTab].travel}</SubHeader>
								</Box>
							</Specifics>
						</Text>
					</CenterColumn>
				</Content>
			</Flex>
		</DestinationContainer>
	)
}

const DestinationContainer = styled(Container)`
	height: 100vh;
	display: flex;
	flex-direction: column-reverse;
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
const TabName = styled.p`
	padding: 0.5rem;
	color: var(--second-color);
	font-family: "Barlow Condensed", sans-serif;
	font-size: 1rem;
	text-transform: uppercase;
	letter-spacing: 0.2rem;
	position: relative;
	cursor: pointer;
	transition: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	${({ index, activeTab }) =>
		index === activeTab &&
		css`
			&::before {
				content: "";
				position: absolute;
				bottom: 0;
				width: 60%;
				background-color: var(--third-color);
				height: 3px;
			}
		`}
	&:hover::before {
		content: "";
		position: absolute;
		bottom: 0;
		width: 60%;
		background-color: var(--third-color);
		opacity: 50%;
		height: 3px;
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
const Content = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	gap: 3rem;
	@media screen and (max-width: 900px) {
		flex-direction: column;
	}
`
const Image = styled.img`
	object-fit: contain;
	display: block;
	height: 100%;
	width: 100%;
`
const Center = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 350px;
	@media screen and (max-width: 900px) {
		height: 30%;
	}
`
const CenterColumn = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 0 0 2rem 0;
	gap: 2rem;
	justify-content: space-between;
	@media screen and (max-width: 900px) {
		flex-direction: column;
		align-items: center;
	}
`
const Tabs = styled.div`
	display: flex;
`
const Text = styled.div`
	@media screen and (max-width: 900px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
`
const Line = styled.span`
	width: 80%;
	display: block;
	height: 1px;
	margin: 2rem 0;
	background-color: #383b4b;
`
const Specifics = styled.div`
	display: flex;
	@media screen and (max-width: 900px) {
		width: 100%;
	}
	@media screen and (max-width: 600px) {
		flex-direction: column;
	}
`
const Box = styled.div`
	flex: 1;
`
const BodyText = styled(DefaultText)`
	line-height: 1.6rem;
	max-width: 80%;
`
const SubHeader = styled(SubH1)`
	text-transform: uppercase;
	padding-top: 1rem;
`

export default Destination
