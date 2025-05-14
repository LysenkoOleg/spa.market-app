import React from 'react';
import './Card.css'

import cardIcon from '../../assets/icons/book.svg'
import addCardIcon from '../../assets/icons/shopping.svg'
import { logDOM } from '@testing-library/dom';

class Card extends React.Component {
	state = {
		isAdded: false
	}
	
	toggleIsAdded = () => {
		this.setState((prevState) => {
			console.log(prevState);
			return {
				...prevState,
				isAdded: !prevState.isAdded
			}
		})
	}
	
	render() {
		const {
			cardPrice = '0.00',
			cardName = 'item'
		} = this.props
		
		const cardClass = this.state.isAdded ? ' is-added' : ''
		
		return (
			<div className={'card-container' + cardClass}>
				<img
					className='card-add-icon'
					src={addCardIcon}
					alt=''
					width='' height='' loading='lazy'
					onClick={this.toggleIsAdded}
				/>
				<img
					className='card-icon'
					src={cardIcon}
					alt=''
					width='' height='' loading='lazy'
				/>
				<div className='card-price'>{cardPrice}</div>
				<div className='card-name'>{cardName}</div>
			</div>
		)
	}
}

export default Card