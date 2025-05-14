import React from 'react';
import './Main.css'
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';

class Main extends React.Component {
	render() {
		const {
			setActiveTab,
			buyCard,
			state: {
				activeTab,
				cash,
				currentDate,
				items,
				buyItems
			},
		} = this.props
		
		return (
			<div className='main-container'>
				<Menu activeTab={activeTab} setActiveTab={setActiveTab}/>
				<div className='main-content'>
					<Header
						cash={cash}
						currentDate={currentDate}
					/>
					<Content
						activeTab={activeTab}
						items={items}
						buyCard={buyCard}
						buyItems={buyItems}
					/>
				</div>
			</div>
		)
	}
}

export default Main;