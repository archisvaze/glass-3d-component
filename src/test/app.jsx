import React from 'react';
import { Glass3D } from '..';
import './app.css';

const App = () => {
    return (
        <div className='app'>
            <header>
                <h2 style={{ margin: '12px 4px' }}>React Component</h2>
            </header>
            <main>
                <Glass3D
                    width={300}
                    height={400}
                />
            </main>
        </div>
    );
};

export default App;
