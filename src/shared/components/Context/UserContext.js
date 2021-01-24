import React , { Component } from 'react';

const UserContext = React.createContext("context ie");
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserProvider,UserConsumer};