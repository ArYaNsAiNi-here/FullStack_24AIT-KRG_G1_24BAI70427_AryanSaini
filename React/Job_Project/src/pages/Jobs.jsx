import { Link } from "react-router-dom";
import useJobs from "../hooks/useJobs";

function Jobs() {
    const jobs = useJobs();

    return (
        <div>
            <h1>Job Listings</h1>
            <p>Here you can find all the available job listings.</p>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>
                        <h2>{job.title}</h2>
                        <p>Company: {job.company}</p>
                        <p>Location: {job.location}</p>
                        <Link to={`/jobs/${job.id}`}>View Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Jobs;