import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Circle, Layer,Text, Line, Rect, Stage} from "react-konva";
import Whiteboard from './pages/Whiteboard';

function App() {
  return (
     <div>
       <Whiteboard/>
     </div>
  );
}

export default App;
