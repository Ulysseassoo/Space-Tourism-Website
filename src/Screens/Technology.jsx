import React from "react"
import { Container } from "../Theme/global"
import Background from "../assets/technology/background-technology-desktop.jpg"
import BackgroundMobile from "../assets/technology/background-technology-mobile.jpg"

const Technology = () => {
	return (
		<Container
			image={Background}
			mobileImage={BackgroundMobile}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}></Container>
	)
}

export default Technology
