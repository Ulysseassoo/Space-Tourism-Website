import { Route, Routes } from "react-router"
import Navbar from "./Components/Navbar"
import Home from "./Screens/Home"
import Crew from "./Screens/Crew"
import Destination from "./Screens/Destination"
import Technology from "./Screens/Technology"
import { Container, GlobalStyles } from "./Theme/global"
import HomeBackground from "./assets/home/background-home-desktop.jpg"

function App() {
	return (
		<>
			<GlobalStyles />
			<Navbar />
			<Container image={HomeBackground}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/destination" element={<Destination />} />
					<Route path="/crew" element={<Crew />} />
					<Route path="/technology" element={<Technology />} />
				</Routes>
			</Container>
		</>
	)
}

export default App
