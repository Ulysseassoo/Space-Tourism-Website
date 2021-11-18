import { Route, Routes } from "react-router"
import Navbar from "./Components/Navbar"
import Home from "./Screens/Home"
import Crew from "./Screens/Crew"
import Destination from "./Screens/Destination"
import Technology from "./Screens/Technology"

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/destination" element={<Destination />} />
				<Route path="/crew" element={<Crew />} />
				<Route path="/technology" element={<Technology />} />
			</Routes>
		</>
	)
}

export default App
