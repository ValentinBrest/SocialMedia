import React, { Component } from 'react';
import { useMatch } from 'react-router-dom';

export const useMatcher = (Compnent) => {
    
    const ProfileURLMatch = (props) => {
        const match = useMatch('/profile/:userId/');
        return <Compnent {...props} match={match} />;
      }
    return ProfileURLMatch
}