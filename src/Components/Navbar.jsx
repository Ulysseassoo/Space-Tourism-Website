import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import LogoImage from "../assets/shared/logo.svg"
import { NavbarText } from "../Theme/global"

const Navbar = () => {
	return (
		<Container>
			<Logo src={LogoImage} alt="space website logo" />
			<NavLinks>
				<Link to="/">
					<Index>00</Index>
					<NavbarText>Home</NavbarText>
				</Link>
				<Link to="/destination">
					<Index>01</Index>
					<NavbarText>Destination</NavbarText>
				</Link>
				<Link to="/crew">
					<Index>02</Index>
					<NavbarText>Crew</NavbarText>
				</Link>
				<Link to="/technology">
					<Index>03</Index>
					<NavbarText>Technology</NavbarText>
				</Link>
			</NavLinks>
		</Container>
	)
}

const Container = styled.header`
	position: fixed;
	z-index: 1000;
	top: 30px;
	width: 100%;
	padding: 2rem 0;
	justify-content: space-between;
	display: flex;
	height: 150px;
	align-items: center;
`

const Logo = styled.img`
	max-width: 100%;
	margin-left: 2rem;
`
const NavLinks = styled.nav`
	display: flex;
	gap: 2rem;
	align-items: center;
	padding: 1rem 6rem;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	@supports (backdrop-filter: blur(40px)) {
		background-color: rgba(0, 0, 0, 0.4);
		background: transparent;
		backdrop-filter: blur(40px);
	}
`
const Link = styled(NavLink)`
	display: inline-flex;
	align-items: center;
	text-transform: uppercase;
	padding: 2rem 1rem;
	position: relative;
	transition: cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s;
	&.active::before {
		content: "";
		position: absolute;
		bottom: 0;
		width: 60%;
		background-color: var(--third-color);
		height: 4px;
	}
	&:hover::before {
		content: "";
		position: absolute;
		bottom: 0;
		width: 60%;
		background-color: var(--third-color);
		opacity: 50%;
		height: 4px;
	}
`
const Index = styled.span`
	color: var(--third-color);
	padding-right: 0.5rem;
`

export default Navbar
