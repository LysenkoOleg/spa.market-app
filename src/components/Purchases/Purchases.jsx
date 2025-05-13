import React from 'react';
import './Purchases.css'
import BankCard from '../BankCard/BankCard';
import Buy from './Buy/Buy';

class Purchases extends React.Component {
	render() {
		return (
			<div className='purchases-container'>
				<Buy />
				<BankCard />
			</div>
		)
	}
}

export default Purchases;