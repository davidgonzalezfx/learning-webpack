import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'

import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'

function App() {
	const [loaderList, setLoaderList] = useState([])

  const handleClick = () => {
    setLoaderList(data.loaders)
  }

	return (
		<div>
			Que buena app hecha con react.js yau
			<video src={video} width={360} controls poster={logo} />
			<p>
				<img src={logo} alt='' width={40} />
			</p>
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
