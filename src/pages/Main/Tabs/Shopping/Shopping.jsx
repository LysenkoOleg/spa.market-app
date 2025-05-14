import React from 'react';
import Card from '../../../../components/Card/Card';

const Shopping = ({items}) => {
	
	return (
		<>
			{
				items.map(({name, price}) => (
					<Card cardPrice={price} cardName={name}/>
				))
			}
		</>
	)
}

export default Shopping;