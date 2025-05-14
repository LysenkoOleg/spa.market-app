import React from 'react'
import './Content.css'
import Shopping from '../../pages/Main/Tabs/Shopping/Shopping';
import Home from '../../pages/Main/Tabs/Home/Home';
import Statistics from '../../pages/Main/Tabs/Statistics/Statistics';

class Content extends React.Component {
	render() {
		const {
			activeTab,
			items,
			buyCard,
			buyItems
		} = this.props
		
		return (
			<div className='content-container'>
				{activeTab === 'home' && <Home buyItems={buyItems} buyCard={buyCard}/>}
				{activeTab === 'shopping' && <Shopping items={items} buyCard={buyCard}/>}
				{activeTab === 'statistics' && <Statistics />}
			</div>
		)
	}
}

export default Content