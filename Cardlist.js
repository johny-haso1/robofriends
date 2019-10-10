import React from 'react';
import Card from './Card';

const Cardlist = ({ robots }) => {
	const CardComponent = robots.map((user, i) => {
	return (
		<Card
		key={i}
		id={robots[i].id}
		name={robots[i].name}
		Email={robots[i].Email}
		/>
	);
})
	return (
		<div>
			{CardComponent}
		</div>
		);
}

export default Cardlist;