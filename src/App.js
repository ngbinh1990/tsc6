import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import IntroCompany from './pages/IntroCompany/IntroCompany.js';
import About from './pages/IntroCompany/About.js';
import Layout from './pages/Layout/Layout.js';
import IntroLayout from './pages/IntroCompany/IntroLayout.js';
import Vission from './pages/IntroCompany/Vission';
import Product from './pages/IntroCompany/Product';
import Person from './pages/IntroCompany/Person';
import ProjectLayout from './pages/Project/ProjectLayout';
import Project from './pages/Project/Project';
import Hanoi from './pages/Project/Hanoi';
import Quangninh from './pages/Project/Quangninh';
import Nhatrang from './pages/Project/Nhatrang';
import ServiceLayout from './pages/Service/ServiceLayout';
import Service from './pages/Service/Service.js';
import ServiceQLCC from './pages/Service/ServiceQLCC';
import ServiceQLVP from './pages/Service/ServiceQLVP';
import ServiceKhac from './pages/Service/ServiceKhac';

function App() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
						<Route exact path='gioi-thieu' element={<IntroLayout />}>
							<Route index element={<IntroCompany />} />
							<Route path='about' element={<About />} />
							<Route path='vission' element={<Vission />} />
							<Route path='product' element={<Product />} />
							<Route path='person' element={<Person />} />
						</Route>
						<Route exact path='du-an' element={<ProjectLayout />}>
							<Route index element={<Project />} />
							<Route path='ha-noi' element={<Hanoi />} />
							<Route path='quang-ninh' element={<Quangninh />} />
							<Route path='nha-trang' element={<Nhatrang />} />
						</Route>
						<Route exact path='dich-vu' element={<ServiceLayout />}>
							<Route index element={<Service />} />
							<Route path='quan-ly-chung-cu' element={<ServiceQLCC />} />
							<Route path='quan-ly-van-phong' element={<ServiceQLVP />} />
							<Route path='quan-ly-bds-khac' element={<ServiceKhac />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
