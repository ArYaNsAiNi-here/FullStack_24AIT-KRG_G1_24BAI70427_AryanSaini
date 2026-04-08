import { useState } from "react";
import axios from "axios";

function AddJob() {
    const [jobId, setJobId] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [errors, setErrors] = useState([]);

    const validateForm = () => {
        const validationErrors = [];

        if (jobId.trim() === "") {
            validationErrors.push("Job ID is required");
        }

        if (jobId.trim() !== "" && (!Number.isInteger(Number(jobId)) || Number(jobId) <= 0)) {
            validationErrors.push("Job ID must be a positive number");
        }

        if (jobTitle.trim() === "") {
            validationErrors.push("Job title is required");
        }

        if (jobTitle.trim().length > 0 && jobTitle.trim().length < 3) {
            validationErrors.push("Job title must be at least 3 characters");
        }

        if (jobDescription.trim() === "") {
            validationErrors.push("Job description is required");
        }

        if (jobDescription.trim().length > 0 && jobDescription.trim().length < 10) {
            validationErrors.push("Job description must be at least 10 characters");
        }

        setErrors(validationErrors);
        return validationErrors.length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const payload = {
            id: Number(jobId),
            title: jobTitle.trim(),
            description: jobDescription.trim(),
        };

        try {
            await axios.post("https://jsonplaceholder.typicode.com/posts", payload);
            alert(`Job submitted successfully: ${payload.title} (ID: ${payload.id})`);
            setJobId("");
            setJobTitle("");
            setJobDescription("");
            setErrors([]);
        } catch (error) {
            console.error("Error submitting job:", error);
            alert("Failed to submit job. Please try again.");
        }
    };

    return (
        <div>
            <h1>Add Job</h1>

            {errors.length > 0 && (
                <ul>
                    {errors.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
            )}

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="job-id">Job ID: </label>
                    <input
                        id="job-id"
                        type="number"
                        value={jobId}
                        onChange={(e) => setJobId(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="job-title">Job Title: </label>
                    <input
                        id="job-title"
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="job-description">Job Description: </label>
                    <textarea
                        id="job-description"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        rows="4"
                    />
                </div>

                <button type="submit">Submit Job</button>
            </form>
        </div>
    );
}

export default AddJob;