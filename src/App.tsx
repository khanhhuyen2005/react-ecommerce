import React, { Component, useEffect, useState } from 'react';
import './App.css';
import {  RouterProvider } from 'react-router-dom';
import router from './routes';

// jsx --> tsx
const App = () => {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App; // camelCase, snake_case, PascalCase
