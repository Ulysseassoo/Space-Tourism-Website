import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import LogoImage from "../assets/shared/logo.svg"
import Hamburger from "../assets/shared/icon-hamburger.svg"
import CloseMenu from "../assets/shared/icon-close.svg"
import { NavbarText } from "../Theme/global"

const Navbar = () => {
	const [activeMobile, setActiveMobile] = useState(false)
	const handleMobileMenu = () => {
		setActiveMobile(!activeMobile)
	}
	return (
		<Container>
			<Logo src={LogoImage} alt="space website logo" />
			<NavLinks activeMobile={activeMobile}>
				<Link to="/" onClick={() => setActiveMobile(false)}>
					<Index>00</Index>
					<NavbarText>Home</NavbarText>
				</Link>
				<Link to="/destination" onClick={() => setActiveMobile(false)}>
					<Index>01</Index>
					<NavbarText>Destination</NavbarText>
				</Link>
				<Link to="/crew" onClick={() => setActiveMobile(false)}>
					<Index>02</Index>
					<NavbarText>Crew</NavbarText>
				</Link>
				<Link to="/technology" onClick={() => setActiveMobile(false)}>
					<Index>03</Index>
					<NavbarText>Technology</NavbarText>
				</Link>
			</NavLinks>
			<MobileHamburger activeMobile={activeMobile} onClick={() => handleMobileMenu()} />
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
const MobileHamburger = styled.div`
	background: ${({ activeMobile }) => (activeMobile ? `url(${CloseMenu})` : `url(${Hamburger})`)};
	background-repeat: no-repeat;
	width: 48px;
	aspect-ratio: 1;
	cursor: pointer;
	margin-right: 2rem;
	background-position: center;
	display: none;
	transition: 0.3s ease;
	z-index: 1000;
	@media screen and (max-width: 600px) {
		display: block;
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

const NavLinks = styled.nav`
	display: flex;
	gap: 2rem;
	align-items: center;
	padding: 1rem 6rem;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	z-index: 100;
	@supports (backdrop-filter: blur(40px)) {
		background-color: rgba(0, 0, 0, 0.4);
		background: transparent;
		backdrop-filter: blur(40px);
	}
	@media screen and (max-width: 600px) {
		position: fixed;
		flex-direction: column;
		inset: 0 0 0 30%;
		padding: 0 4rem;
		justify-content: center;
		align-items: initial;
		transition: cubic-bezier(0.55, 0.055, 0.675, 0.19) 0.4s;
		transform: ${({ activeMobile }) => (activeMobile ? "translateX(0%)" : "translateX(100%)")};
		& > ${Link} {
			padding: 0;
			&.active::before {
				content: initial;
			}
			&:hover::before {
				content: initial;
			}
		}
	}
`

const Index = styled.span`
	color: var(--third-color);
	padding-right: 0.5rem;
`

export default Navbar
