import React from 'react'
import './Header.css'

import avatarIcon from '../../assets/icons/avatar.svg'
import notificationIcon from '../../assets/icons/notification.svg'
import searchIcon from '../../assets/icons/search.svg'

class Header extends React.Component {
	render() {
		const {
			cash,
			currentDate
		} = this.props
		
		return (
			<div className='header-container'>
				<div className='header-avatar-container'>
					<img
						className='header-avatar-icon'
						src={avatarIcon}
						alt='avatar'
						width='' height='' loading='lazy'
					/>
					<div className='header-cash-container'>
						<div>Name</div>
						<div><b>{cash}</b></div>
					</div>
				</div>
				<div className='header-control-container'>
					<div className='header-currentData'>
						{currentDate.toDateString()}
					</div>
					<div className='header-search-container'>
						<img
							className='header-search-icon'
							src={searchIcon}
							alt='search'
							width='' height='' loading='lazy'
						/>
						<input type='text' className='header-search' />
					</div>
					<img
						className='header-notification-container'
						src={notificationIcon}
						alt='notification'
						width='' height='' loading='lazy'
					/>
				</div>
			</div>
		)
	}
}

export default Header