import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import { compose } from 'redux';
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ProfileURLMatch from "./components/Profile/ProfileContainer";
import Preloader from './components/UI/Preloader/Preloader';
import UsersContainer from "./components/Users/UsersConrainer";
import { useMatcher } from './hoc/useMatcher';
import { initializeApp } from './redux/app_reducer';


class App extends Component {
	componentDidMount() {
        this.props.initializeApp()
    }
	
	render() {
		if (!this.props.initialized){
			return <Preloader/> 
		}
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
					<Route 
						path="login" 
						element={<Login />} 
					/>
				</Routes>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

export default compose(
	useMatcher,
	connect(mapStateToProps, {initializeApp}))(App);
