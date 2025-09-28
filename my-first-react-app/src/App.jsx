import { useState } from 'react'
import './App.css'


// component can be like this also
// const App1 = () => {}
// function App(){
// 	return(
// 		<h2>Functional Arrow Components</h2>
// 	)
// }
const Card = ({ title }) => {
	const [hasLiked, setHasLiked] = useState(false);
	return (
		<div className='card'>
			<h2>{title}</h2>
			<button onClick={() => setHasLiked(!hasLiked)}>
				{hasLiked ? 'Liked': 'Like'}
			</button>
		</div>
	)
}

const App = () => {
	return (
		<div className='card-container'>
			<Card title="Star Wars" />
			<Card title="Avatar" />
			<Card title="The Lion King" />
		</div>
	)
}

export default App
