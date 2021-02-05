import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'

console.log(data)

function App() {
	const [loaderList, setLoaderList] = useState([])

  const handleClick = () => {
    setLoaderList(data.loaders)
  }

	return (
		<div>
			Que buena app hecha con react.js yau
			<ul>
				{loaderList.map((item) => (
					<Loader {...item} key={item.id} />
				))}
			</ul>
			<button onClick={handleClick}>Mostrar que hemos aprendido</button>
		</div>
	)
}

export default App
