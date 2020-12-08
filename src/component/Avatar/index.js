import React from 'react'

const Avatar = ({round, width, src, alt}) => 
    <img 
        loading="lazy"
        className={(round)?"imageredonda":""}
        width={width} 
        src={src} 
        alt={alt}
        />

export default Avatar