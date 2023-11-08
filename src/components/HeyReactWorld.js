import React from 'react'

function HeyReactWorld({numberprop, name,}) {

    const greeting = "Hey ReactWorld, ";
    const briefings = "My Name Is Sammy Otia"
    const link = "https://www.sammyotia.pythonanywhere.com/"



  return (
    <div>
        <div>{greeting} {name}</div>
        <div>{briefings}</div>
        <a href={link}> visit my website for my recent pojects and portfolio </a>
        <div className='myStyle2'>Generated number from props is: {numberprop + 1/2 * 17}</div>
    </div>
  )
}

export default HeyReactWorld