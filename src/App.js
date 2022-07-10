import Header from './components/Header';
import { Routes, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import './scss/app.scss';

function App() {
	return (
		<div className="App">
			<div class="wrapper">
				<Header />
				<div class="content">
					<div class="container">
						<Routes>
							<Route exact path="/" element={<Home />} />

							<Route path="/cart" element={<Cart />} />

							<Route path="*" element={<NotFound />} />
						</Routes>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
