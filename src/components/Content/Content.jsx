import React from 'react'
import './Content.css'
import Shopping from '../../pages/Main/Tabs/Shopping/Shopping';

class Content extends React.Component {
	state = {
		isVisible: true,
		items: [
			{
				name: 'book',
				price: '10.1'
			},
			{
				name: 'phone',
				price: '200.1'
			},
			{
				name: 'notebook',
				price: '44100.1'
			},
		]
	}
	
	createItemCard = () => {
		let randomPrice = Math.floor(Math.random() * 100);
		let randomName = 'itemcard'.split('').sort(() => Math.random() - 0.5).join('')
		
		const items = [
			...this.state.items,
			{
				name: randomName,
				price: randomPrice
			}]
		
		this.setState({items})
		
		console.log(this.state);
	}
	
	render() {
		return (
			<div className='content-container'>
				<button onClick={this.createItemCard}></button>
				<Shopping items={this.state.items}/>
			</div>
		)
	}
}

export default Content