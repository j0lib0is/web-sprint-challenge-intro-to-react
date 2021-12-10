import React from 'react';
import styled from 'styled-components';

const StyledDetails = styled.div`
	padding: 16px;
`

export default function Details(props) {
	const { character, close } = props;

	return (
		<StyledDetails>
			<p>{character.height}</p>
			<p>{character.hair_color}</p>
			<p>{character.eye_color}</p>
			<p>{character.birth_year}</p>
			<p>{character.gender}</p>
			<button onClick={() => close()}>Close Details</button>
		</StyledDetails>
	);
}