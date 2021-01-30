import React, { useState } from 'react';

import Hello from '../components/hello';
 
const Main = () => {
    const [name, setName] = useState<string | null>('Peter');
    return (
        <Hello 
          message={name}
        />
    )
}

export default Main;