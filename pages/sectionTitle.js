import React from 'react';

const sectionTitle = ({ subtitle, title }) => {
  return (
    <div className='container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', fontFamily: 'Questrial', margin: '20pxpx auto 20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'Questrial' }}>
        <h3 style={{ fontSize: 20, marginRight: 10, textTransform: 'uppercase', fontWeight: 700  }}>{subtitle}</h3>
        <hr style={{ flexGrow: 1, height: 1, width: 150, backgroundColor: '#24498b', border: 'none', opacity: 1 }} />
      </div>
      <h1 style={{ fontSize: 36, color: '#24498b', fontFamily: 'Questrial', textTransform: 'uppercase', fontWeight: 700 }}>{title}</h1>
    </div>
  );
};

export default sectionTitle;