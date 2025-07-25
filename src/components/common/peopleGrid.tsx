import React from "react";
import { People } from "../../aPI/endpoint";
import './peopleGrig.css';

interface PeopleGridProps {
    person: People;
}

export const PeopleGrid = ({person}: PeopleGridProps) => {
    return (
        <div className="people-item">
            <img src={person.profile_path} alt={person.name} className="people-item-img" />
            <div className="people-item-details">
                <div className="people-item-name">{person.name}</div>
                <div className="people-item-ActingType">
                    <span className="people-item-ActingText">{person.known_for_department}:  </span>
                    {person.known_for && person.known_for.map((movie) => (
                        <span 
                            key={movie.id} 
                            className="people-item-ActingType"
                        >
                            {movie.title},
                         </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
   
