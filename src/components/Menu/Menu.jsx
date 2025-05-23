import React from 'react'
import './Menu.css'

import homeIcon from '../../assets/icons/home.svg'
import shoppingIcon from '../../assets/icons/shopping.svg'
import statisticsIcon from '../../assets/icons/statistics.svg'
import signoutIcon from '../../assets/icons/signout.svg'

class Menu extends React.Component {
	
	updateActiveTab = (tab) => () => {
		this.props.setActiveTab(tab)
	}
	
	getClassName = (tab) => {
		return this.props.activeTab === tab ? 'menu-item active' : 'menu-item'
	}
	
	render() {
		return (
			<div className='menu-container'>
				<div className='menu-items'>
					<div className={this.getClassName('home')} onClick={this.updateActiveTab('home')}>
						<img
							className='menu-item-icon'
							src={homeIcon}
							alt='home'
							width='' height='' loading='lazy'
						/>
					</div>
					<div className={this.getClassName('shopping')} onClick={this.updateActiveTab('shopping')}>
						<img
							className='menu-item-icon'
							src={shoppingIcon}
							alt='shopping'
							width='' height='' loading='lazy'
						/>
					</div>
					<div className={this.getClassName('statistics')} onClick={this.updateActiveTab('statistics')}>
						<img
							className='menu-item-icon'
							src={statisticsIcon}
							alt='statistics'
							width='' height='' loading='lazy'
						/>
					</div>
				</div>
				<div className='menu-item'>
					<img
						className='menu-item-icon'
						src={signoutIcon}
						alt='signout'
						width='' height='' loading='lazy'
					/>
				</div>
			</div>
		)
	}
}

export default Menu