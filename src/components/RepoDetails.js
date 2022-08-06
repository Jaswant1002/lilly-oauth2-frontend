function RepoDetails({details,loading,onloaddetail}){
    if(loading){
        return(
            <h1 className="loader">Loading.....</h1>
        )
    }
    return(
        <div className="repo-details-container" style={{display: onloaddetail ? 'block' : 'none' }}>
            <h3>Git Repo's details:</h3>
            <div className="details-row">
                <label className="label">Name:</label>
                <span className="value">{details.name}</span>
            </div>
            <div className="details-row">
            <label className="label">Forks Count:</label>
            <span className="value">{details.forks}</span>
            </div>
            <div className="details-row">
            <label className="label">Language:</label>
            <span className="value">{details.language}</span>
            </div>
            <div className="details-row">
            <label className="label">Stars:</label>
            <span className="value">{details.stargazers_count}</span>
            </div>
        </div>
    )
}

export default RepoDetails;