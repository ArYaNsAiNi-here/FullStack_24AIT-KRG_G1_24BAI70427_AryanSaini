import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function JobDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchJob = async () => {
            try {
                setLoading(true);
                setError("");
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                setJob({
                    id: response.data.id,
                    title: response.data.title || "",
                    description: response.data.body || "",
                });
            } catch (err) {
                console.error("Error fetching job details:", err);
                setError("Failed to fetch job details.");
            } finally {
                setLoading(false);
            }
        };

        fetchJob();
    }, [id]);

    const handleFieldChange = (field, value) => {
        setJob((prev) => ({ ...prev, [field]: value }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!job) return;

        try {
            setUpdating(true);
            setError("");

            const payload = {
                id: Number(id),
                title: job.title.trim(),
                body: job.description.trim(),
                userId: 1,
            };

            const response = await axios.put(
                `https://jsonplaceholder.typicode.com/posts/${id}`,
                payload
            );

            setJob({
                id: response.data.id,
                title: response.data.title || "",
                description: response.data.body || "",
            });

            alert("Job updated successfully.");
        } catch (err) {
            console.error("Error updating job:", err);
            setError("Failed to update job.");
        } finally {
            setUpdating(false);
        }
    };

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this job?")) {
            return;
        }

        try {
            setDeleting(true);
            setError("");

            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
            alert("Job deleted successfully.");
            navigate("/jobs");
        } catch (err) {
            console.error("Error deleting job:", err);
            setError("Failed to delete job.");
        } finally {
            setDeleting(false);
        }
    };

    if (loading) {
        return <p>Loading job details...</p>;
    }

    if (!job) {
        return (
            <div>
                <h1>Job Details</h1>
                <p>{error || "Job not found."}</p>
                <Link to="/jobs">Back to Jobs</Link>
            </div>
        );
    }

    return (
        <div>
            <h1>Job Details</h1>
            {error && <p>{error}</p>}

            <form onSubmit={handleUpdate}>
                <div>
                    <label htmlFor="job-title">Job Title: </label>
                    <input
                        id="job-title"
                        type="text"
                        value={job.title}
                        onChange={(e) => handleFieldChange("title", e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="job-description">Job Description: </label>
                    <textarea
                        id="job-description"
                        rows="4"
                        value={job.description}
                        onChange={(e) => handleFieldChange("description", e.target.value)}
                    />
                </div>

                <button type="submit" disabled={updating}>
                    {updating ? "Updating..." : "Update Job (PUT)"}
                </button>
            </form>

            <br />

            <button type="button" onClick={handleDelete} disabled={deleting}>
                {deleting ? "Deleting..." : "Delete Job (DELETE)"}
            </button>

            <p>
                <Link to="/jobs">Back to Jobs</Link>
            </p>
        </div>
    );
}

export default JobDetail;
