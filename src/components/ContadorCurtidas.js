import React, { useState, useEffect } from 'react';

function ContadorCurtidas() {
  const [curtidas, setCurtidas] = useState(0);

  useEffect(() => {
    
    if (curtidas >= 5) {
      if(curtidas % 5 === 0){
            window.alert("Curtidas em Alta!");
        }
    }

    return () => {
      console.log("O contador será removido!");
    };
 
  }, [curtidas]);

  const handleIncrementar = () => {
    setCurtidas(curtidas + 1);
  };

  return (
    <div style={{ padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
      <h2>Contador de Curtidas</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{curtidas}</p>
      <button onClick={handleIncrementar}>
        Curtir 
      </button>
    </div>
  );
}

export default ContadorCurtidas;