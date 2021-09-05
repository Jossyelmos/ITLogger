import React from 'react'

const Preloader = () => {
    return (
        <div className='progress blue lighten-4' style={preloaderStyle}>
            <div className="indeterminate blue"></div>
        </div>
    )
}

const preloaderStyle = {
    marginTop: '200px'
}

export default Preloader;
