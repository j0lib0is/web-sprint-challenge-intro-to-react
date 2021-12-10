// Write your Character component here
import React from 'react';
import styled from 'styled-components';
import Details from './Details';

const StyledCharacter = styled.div`
	padding: 4px 16px;
	border: 1px solid #f8c706;
	border-radius: 32px 0px 32px 0px;
	margin-bottom: 16px;
	display: flex;
	flex-direction: column;
	h3 {
		color: #f8c706;
		text-transform: uppercase;
	}
	button {
		border: 1px solid #f8c706;
		border-radius: 16px 0px 16px 0px;
		background-color: black;
		color: #f8c706;
		padding: 8px 24px;
		cursor: pointer;
		&:hover {
			transition: all 0.2s ease-in-out;
			background-color: #f8c706;
			color: black;
		}
	}
`

export default function Character(props) {
	const { character, selected, open, close } = props;

	return (
		<StyledCharacter>
			<div className='characterHeader'>
				<h3>{character.name}</h3>
				<button onClick={() => open(character.name)}>Show Details</button>
			</div>
			{selected === character.name && < Details character={character} close={close} />}
		</StyledCharacter>
	);
}