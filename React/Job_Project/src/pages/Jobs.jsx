import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import { Links } from 'react-router-dom'
import useJobs from '../hooks/useJobs'

function Jobs() {
    return (
        <div>
            <h1>Job Listings</h1>
            <p>Here you can find all the available job listings.</p>
            <ul>
                {useJobs().map((job) => (
                    <li key={job.id}>
                        <h2>{job.title}</h2>
                        <p>Company: {job.company}</p>
                        <p>Location: {job.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Jobs;