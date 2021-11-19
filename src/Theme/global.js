import styled, { createGlobalStyle } from "styled-components"
import { motion } from "framer-motion"

export const GlobalStyles = createGlobalStyle`
:root {
	--first-color: #0B0D17;
	--second-color: #D0D6F9;
	--third-color: #FFFFFF;
}

body {
	background-color: black;
}

* {
	box-sizing: border-box;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
	text-decoration: none;
}
`

export const Container = styled(motion.section)`
	min-height: 100vh;
	background: ${({ image }) => (image ? `url(${image})` : "")};
	background-size: cover;
`

export const H1 = styled.h1`
	font-family: "Bellefair", serif;
	font-size: 9.375rem;
`

export const H2 = styled.h2`
	font-family: "Bellefair", serif;
	font-size: 6.25rem;
`

export const H3 = styled.h3`
	font-family: "Bellefair", serif;
	font-size: 3.5rem;
`

export const H4 = styled.h4`
	font-family: "Bellefair", serif;
	font-size: 2rem;
`

export const H5 = styled.h5`
	font-family: "Bellefair", serif;
	font-size: 1.75rem;
	letter-spacing: 4.75px;
`

export const SubH1 = styled.p`
	font-family: "Bellefair", serif;
	font-size: 1.75rem;
`

export const SubH2 = styled.p`
	font-family: "Barlow Condensed", sans-serif;
	font-size: 0.875rem;
	letter-spacing: 2.35px;
`

export const NavbarText = styled.p`
	font-family: "Barlow Condensed", sans-serif;
	font-size: 1rem;
	letter-spacing: 2.7px;
	color: var(--third-color);
`

export const DefaultText = styled.p`
	font-size: 1rem;
`
