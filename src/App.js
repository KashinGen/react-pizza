import React from 'react';
import Header from './components/Header';
import { Routes, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './scss/app.scss';

export const SearchContext = React.createContext();

function App() {
	const [search, setSearch] = React.useState('');

	return (
		<div className="App">
			<SearchContext.Provider value={{ search, setSearch }}>
				<div class="wrapper">
					<Header />
					<div class="content">
						<div class="container">
							<Routes>
								<Route exact path="/" element={<Home search={search} />} />

								<Route path="/cart" element={<Cart />} />

								<Route path="*" element={<NotFound />} />
							</Routes>
						</div>
					</div>
				</div>
			</SearchContext.Provider>
		</div>
	);
}

export default App;
