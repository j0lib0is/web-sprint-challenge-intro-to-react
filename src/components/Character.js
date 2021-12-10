// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`

`

export default function Character(props) {
	const { character } = props;

	return (
		<StyledCharacter>
			<h3>{character.name}</h3>
		</StyledCharacter>
	);
}