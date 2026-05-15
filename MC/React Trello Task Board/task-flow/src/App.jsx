// src/App.jsx

import React from 'react';
import { BoardProvider } from './context/BoardContext';
import Navbar from './components/Navbar';
import Board from './components/Board';
import CardModal from './components/CardModal';

export default function App() {
  return (
    <BoardProvider>
      <div className="min-h-screen" style={{ background: '#0f172a' }}>
        <Navbar />
        <Board />
        <CardModal />
      </div>
    </BoardProvider>
  );
}
