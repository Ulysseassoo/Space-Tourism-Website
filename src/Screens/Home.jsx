import React from "react"
import HomeBackground from "../assets/home/background-home-desktop.jpg"
import { Container } from "../Theme/global"

const Home = () => {
	return (
		<Container
			image={HomeBackground}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}></Container>
	)
}

export default Home
