import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'

import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'

import '../../sass/sass.scss'
import '../../stylus/stylus.styl'
import '../../less/less.less'

function App() {
	const [loaderList, setLoaderList] = useState([])

  const handleClick = () => {
    setLoaderList(data.loaders)
  }

	return (
		<div>
			<p className="sass">esto es sass</p>
			<p className="less">esto es less</p>
			<p className="stylus">esto es stylus</p>
			<p className="post-css">esto es postcss</p>
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
