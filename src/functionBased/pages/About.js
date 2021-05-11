import React from 'react'
import { useRouteMatch } from 'react-router-dom'

const About = () => {
    const { url , path } = useRouteMatch();

    return (
        <div className="about__content">
            <ul className="about__list">
            </ul>
            <h1>About</h1>
        </div>
    )
}

export default About