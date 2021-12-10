import React from 'react';
import styled from 'styled-components';

const StyledDetails = styled.div`
	padding: 0px 16px;
	margin-bottom: 12px;
	background-color: #f8c706;
	border-radius: 0px 0px 16px 0px;
	button {
		background-color: #f8c706;
		border: 1px solid black;
		color: black;
		&:hover {
			background-color: black;
			color: #f8c706;
		}
	}
`

export default function Details(props) {
	const { character, close } = props;

	return (
		<StyledDetails>
			<div className='detailsHeader'>
				<h4>More about {character.name}</h4>
				<button onClick={() => close()}>Close Details</button>
			</div>
			<div className='characterDetail'>
				<p>Height:</p>
				<p>{character.height}</p>
			</div>
			<div className='characterDetail'>
				<p>Eye Color:</p>
				<p>{character.eye_color}</p>
			</div>
			<div className='characterDetail'>
				<p>Hair Color:</p>
				<p>{character.hair_color}</p>
			</div>
			<div className='characterDetail'>
				<p>Birth Year:</p>
				<p>{character.birth_year}</p>
			</div>
			<div className='characterDetail'>
				<p>Gender:</p>
				<p>{character.gender}</p>
			</div>
		</StyledDetails>
	);
}