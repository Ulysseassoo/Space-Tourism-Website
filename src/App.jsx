import { Route, Routes, useLocation } from "react-router"
import Navbar from "./Components/Navbar"
import Home from "./Screens/Home"
import Crew from "./Screens/Crew"
import Destination from "./Screens/Destination"
import Technology from "./Screens/Technology"
import { GlobalStyles } from "./Theme/global"
import { AnimatePresence } from "framer-motion"

function App() {
	const location = useLocation()

	return (
		<>
			<GlobalStyles />
			<Navbar />
			<AnimatePresence exitBeforeEnter initial={false}>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} />
					<Route path="/destination" element={<Destination />} />
					<Route path="/crew" element={<Crew />} />
					<Route path="/technology" element={<Technology />} />
				</Routes>
			</AnimatePresence>
		</>
	)
}

export default App
