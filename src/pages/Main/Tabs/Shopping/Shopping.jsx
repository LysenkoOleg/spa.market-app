import React from 'react';
import Card from '../../../../components/Card/Card';

const Shopping = ({items, buyCard}) => {
	
	return (
		<>
			{
				items.map(({id, name, price, isAdded}) => (
					<Card
						id={id}
						cardPrice={price}
						cardName={name}
						isAdded={isAdded}
						buyCard={() => buyCard(id)}
					/>
				))
			}
		</>
	)
}

export default Shopping;