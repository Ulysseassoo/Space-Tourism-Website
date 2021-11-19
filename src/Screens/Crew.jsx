import React from "react"
import { Container } from "../Theme/global"
import Background from "../assets/crew/background-crew-desktop.jpg"
import BackgroundMobile from "../assets/crew/background-crew-mobile.jpg"

const Crew = () => {
	return (
		<Container
			image={Background}
			mobileImage={BackgroundMobile}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}>
			Crew
		</Container>
	)
}

export default Crew
