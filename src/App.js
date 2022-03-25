import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersConrainer";


const App = () => {
	return (
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<Routes>
					<Route 
						path="profile" 
						element={<Profile />} 
					/>
					<Route 
						path="dialogs" 
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
