import React from 'react';
import IosArrowRoundForward from 'react-ionicons/lib/IosArrowRoundForward'

const NextPageButtonCustom = (path , title ) => {
	console.log(path,title);
	return (
        <a href= {path.path} onClick={() => alert('Next clicked')} style={containerStyle}>
            
            <div style={{ width: '50%', color: 'white' }}>
                Next
				<IosArrowRoundForward color='white' />
            </div>
        </a>
    );
}
const containerStyle = {
    width: 250,
    height: 45,
    margin: '50px 0',
    border: '1px solid #C4C4C4',
    boxSizing: 'border-box',
    boxShadow: '6px 6px 10px rgba(103, 54, 107, 0.15)',
    borderRadius: 6,
    background: 'linear-gradient(284.05deg, #BA7CF7 0%, #67366B 44.91%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
}

export default NextPageButtonCustom;
