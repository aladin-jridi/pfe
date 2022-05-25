import React from "react";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "../../organism/sidebar";
import Navbar from "../../organism/navbar";
import UsersManager from "../../organism/usersManager";
// import Login from '../../organism/login'
import FournisseurManager from "../../organism/fournisseurManager";
import ColisManager from "../../organism/coliesManager";


function BackOfficeInterface() {
	return (
		<BrowserRouter>
			<div className='backOfficeInterface '>
				<SideBar />
				{/* <div className='login'></div> */}
				<div className='content'>
					<Navbar />
					<Routes>
						<Route
							path='/gestionPersonnel'
							element={<UsersManager />}
						></Route>
						<Route
							path='/gestionfournisseurs'
							element={<FournisseurManager />}
						></Route>
						<Route
							path='/gestioncolis'
							element={<ColisManager />}
						></Route>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default BackOfficeInterface;
