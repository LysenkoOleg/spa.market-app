import React from 'react';
import './BankCard.css'

import masterCardIcon from '../../assets/icons/mastercard.svg'
import qrcodeIcon from '../../assets/icons/qrcode.svg'

class BankCard extends React.Component {
	render() {
		return (
			<div className='bankCard-container'>
				<img
					className='bankCard-icon'
					src={masterCardIcon}
					alt=''
					width='' height='' loading='lazy'
				/>
				<h3 style={{lineHeight: '1em'}}>BBB</h3>
				<h3 style={{lineHeight: '1em'}}>**** 9618</h3>
				<div className='bankCard-month-container'>
					<div className='bankCard-month'>
						<span style={{width: '4em'}}>
							Expire date
						</span>
						<span><b>09/30</b></span>
					</div>
					<img
						className='bankCard-qrCodeIcon'
						src={qrcodeIcon}
						alt=''
						width='' height='' loading='lazy'
					/>
				</div>
			</div>
		)
	}
}

export default BankCard;