import React from 'react';
import Car from './Car/Car'

export default class Cars extends React.Component {
    state = {
        cars:[
            { name: "Mazda", year: 2020},
            { name: "Ford", year: 2018}
        ]
    }
    render() {
        return (
            <div style={{
                width:600,
                margin:'auto',
                paddingTop: '20px'
            }}>
                {this.state.cars.map((car,index)=> {
                    return(
                        <Car
                            key={index}
                            name={car.name}
                            year={car.year}
                        />
                    )
                })}
            </div>
        )
    }
}