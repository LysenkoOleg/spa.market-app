import React from 'react';
import './Card.css'

import cardIcon from '../../assets/icons/book.svg'
import addCardIcon from '../../assets/icons/shopping.svg'

class Card extends React.Component {
	render() {
		const {
			cardPrice = '0.00',
			cardName = 'item',
			isAdded,
			buyCard
		} = this.props
		
		const cardClass = isAdded ? ' is-added' : ''
		
		return (
			<div className={'card-container' + cardClass}>
				<img
					className='card-add-icon'
					src={addCardIcon}
					alt=''
					width='' height='' loading='lazy'
					onClick={buyCard}
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