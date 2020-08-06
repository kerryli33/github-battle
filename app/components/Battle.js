import React from 'react'
import { FaUserFriends, FaFighterJet, FaTrophy } from 'react-icons/fa'


function Instructions() {
    return (
        <div>
            <h1 className='center-text header-lg'>
                Instructions
            </h1>
            <ol className='container-sm grid center-text battle-instructions'>
                <li>
                    <h3 className='header-sm'>Enter two Github users</h3>
                    <FaUserFriends className='bg-dark' 
                                   color='#807c38'
                                   size={140}
                    />
                </li>
                <li>
                    <h3 className='header-sm'>Battle</h3>
                    <FaFighterJet className='bg-red' 
                                   color='#727272'
                                   size={140}
                    />
                </li>
                <li>
                    <h3 className='header-sm'>See the winners</h3>
                    <FaTrophy className='bg-light' 
                                   color='#ffc745'
                                   size={140}
                    />
                </li>
            </ol>
        </div>
    )
}

export default class Battle extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Instructions />
            </React.Fragment>
        )
    }
}