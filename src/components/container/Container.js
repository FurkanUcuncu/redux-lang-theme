import React from 'react';

function Container({children,extendClass}) {
    let extendedClass = ''
    if(extendedClass){
        extendedClass = extendClass
    }
    return (
        <div className={extendClass +  " container max-w-screen-2xl mx-auto"}>
            {children}
        </div>
    );
}

export default Container;