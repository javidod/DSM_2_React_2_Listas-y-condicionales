import React from 'react';

const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

const CharComponent = (props) => props.CharComponent.map((currElement, index) => {
    return (
        <div style={style} onClick = {() => props.clicked(index)}>
            <p>
                {currElement}
            </p>
        </div>
    )
});

export default CharComponent;