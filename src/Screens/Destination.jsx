import React from "react"
import { Container } from "../Theme/global"
import Background from "../assets/destination/background-destination-desktop.jpg"

const Destination = () => {
	return (
		<Container image={Background} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
			Destination
		</Container>
	)
}

export default Destination
