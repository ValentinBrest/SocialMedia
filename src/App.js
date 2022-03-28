import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersConrainer";
import ProfileURLMatch from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {
	return (
			<div className="app-wrapper">
				<HeaderContainer/>
				<Navbar />
				<Routes>
					<Route 
						path="profile/*" 
						element={<ProfileURLMatch/>} 
					/>
					<Route 
						path="dialogs/*" 
						element={<DialogsContainer/>} 
					/>
					<Route 
						path="users" 
						element={<UsersContainer />} 
					/>
				</Routes>
			</div>
	);
};

export default App;
