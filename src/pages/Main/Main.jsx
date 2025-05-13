import React from 'react';
import './Main.css'
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';

class Main extends React.Component {
	render() {
		return (
			<div className='main-container'>
				<Menu />
				<div className='main-content'>
					<Header />
					<Content />
				</div>
			</div>
		)
	}
}

export default Main;