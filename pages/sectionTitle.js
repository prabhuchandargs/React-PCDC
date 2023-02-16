import React from 'react';

const sectionTitle = ({ subtitle, title }) => {
  var firstPart;
  var middlePart;
  var lastPart;

  if(title) {
    const stringLength = title.length;
    const firstThirdEnd = Math.floor(stringLength / 3);
    const lastThirdStart = Math.ceil(stringLength - stringLength / 3);
    firstPart = title.slice(0, firstThirdEnd);
    middlePart = title.slice(firstThirdEnd, lastThirdStart);
    lastPart = title.slice(lastThirdStart);
  }


  return (
    <div className='container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', fontFamily: 'Questrial', margin: '20pxpx auto 20px' }}>

      <h3 style={{ fontSize: 20, marginRight: 10, textTransform: 'uppercase', fontWeight: 700 }}>{subtitle}</h3>
      <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'Questrial' }}>
        {title && <h1 style={{ fontSize: 36, color: '#24498b', fontFamily: 'Questrial', textTransform: 'uppercase', marginRight: 10 }}>
        <span style={{ fontWeight: 400 }}>{firstPart}</span>
        <span style={{ fontWeight: 800 }}>{middlePart}</span>
        <span style={{ fontWeight: 800 }}>{lastPart}</span>
        </h1>}
        <hr style={{ flexGrow: 1, height: 2, width: 150, backgroundColor: '#24498b', border: 'none', opacity: 1 }} />
      </div>
    </div>
  );
};

export default sectionTitle;