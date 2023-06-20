import React from 'react';
import Tilt from 'react-parallax-tilt';
import './style.scss';

function Glass3D({ innerStyles, width, height }) {
    const container_styles = {
        width: width ? width : '100%',
        height: height ? height : '100%',
    };

    return (
        <Tilt
            style={container_styles}
            className='parallax-effect'
            perspective={300}
            glareEnable={true}
            glareMaxOpacity={0.39}
        >
            <div
                className='inner-element'
                style={innerStyles ? innerStyles : {}}
            >
                <p>Hello World</p>
            </div>
        </Tilt>
    );
}

export { Glass3D };
