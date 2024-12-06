import React, { useEffect, useState } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';

const App = () => {
    const [elements, setElements] = useState([
        { data: { id: '1', label: 'Node 1' } },
        { data: { id: '2', label: 'Node 2' } },
        { data: { source: '1', target: '2' } },
    ]);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080/ws');
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log('Data received:', data);
        };
        return () => ws.close();
    }, []);

    return (
        <CytoscapeComponent
            elements={elements}
            style={{ width: '100%', height: '500px' }}
            layout={{ name: 'grid' }}
        />
    );
};

export default App;
