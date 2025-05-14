import './App.css';
import React from 'react';
import Main from './pages/Main/Main';

class App extends React.Component {
	state = {
		activeTab: 'home', // 'home', 'shopping, 'statictics'
		cash: 19542,
		currentDate: new Date(),
		items: [
			{
				id: 1,
				name: 'book',
				price: '10.1',
				isAdded: false
			},
			{
				id: 2,
				name: 'phone',
				price: '200.1',
				isAdded: false
			},
			{
				id: 3,
				name: 'notebook',
				price: '44100.1',
				isAdded: false
			},
		],
		buyItems: []
	}
	
	setActiveTab = (activeTab) => {
		this.setState({activeTab})
	}
	
	buyCard = (id) => {
		this.setState((prevState) => {
			const newItems = this.state.items.map((item) => {
				if (id !== item.id) {
					return item
				}
				return {
					...item,
					isAdded: !item.isAdded
				}
			})
			
			return {
				...prevState,
				buyItems: newItems.filter(item => item.isAdded),
				items: newItems
			}
		})
	}
	
	render() {
		return (
			<div className="app-window-container">
				<div className='app-window'>
					<Main
						state={this.state}
						setActiveTab={this.setActiveTab}
						buyCard={this.buyCard}
					/>
				</div>
			</div>
		);
	}
}

export default App;
