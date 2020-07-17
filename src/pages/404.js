import React from 'react'
import { Link } from 'gatsby'

const NotFound = () => {
    return (
        <div className="NotFound">
            <h1 className="NotFound__heading">Oops. It looks like you're lost</h1>
            <p className="NotFound__text">Find your way back by clicking <Link to={`/`}>here</Link></p>
        </div>
    )
}
export default NotFound