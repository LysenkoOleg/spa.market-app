import Purchases from '../../../../components/Purchases/Purchases';
import Card from '../../../../components/Card/Card';
import React from 'react';

const Home = (props) => {
	const {
		buyItems,
		buyCard
	} = props
	
	return (
		<>
			<Purchases />
			<>
				{
					buyItems.map(({id, name, price, isAdded}) => (
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
		</>
	)
}

export default Home;