import React from 'react'
import pinIcon from '../images/pin.svg'

export default function Entry(props) {
    return (
        <div className='entry'>
            <img src={props.imageUrl} className='entry__img' />
            <div className="entry__info">
                <div className="entry__location">
                    <div className='location-div'>
                        <img src={pinIcon}/>
                        <h6>{props.location}</h6>
                    </div>
                    <a href={props.googleMapsUrl} target='_blank'>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className="entry__dates"><span>{props.startDate}</span> - <span>{props.endDate}</span></p>
                <p className='entry__desc'>{props.description}</p>
            </div>
        </div>
    )
}