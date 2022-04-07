import React, { Component } from 'react';
import { useMatch } from 'react-router-dom';

export const useMatcher = (Component) => {
    
    const ProfileURLMatch = (props) => {
        const match = useMatch('/profile/:userId/');
        return <Component {...props} match={match} />;
      }
    return ProfileURLMatch
}