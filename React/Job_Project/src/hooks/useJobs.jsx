import { use, useEffect, useState } from "react";
import axios from "axios";

function useJobs() {
    const [jobs, setJobs] = useState([]);
    // useEffect(() => {
    //     const jobsData = [
    //         { id: 1, title: "Software Engineer", company: "Tech Corp", location: "New York" },
    //         { id: 2, title: "Data Scientist", company: "Data Inc", location: "San Francisco" },
    //         { id: 3, title: "Product Manager", company: "Products LLC", location: "Chicago" },
    //     ];
    //     setJobs(jobsData);
    // }, []);
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                const jobsData = response.data.map((job) => ({
                    id: job.id,
                    title: job.title,
                    company: "Company " + job.userId,
                    location: "Location " + job.userId,
                }));
                setJobs(jobsData);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };
        fetchJobs();
    }, []);
    return jobs;
}

export default useJobs;