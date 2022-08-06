import {useState} from 'react';
import '../App.css';
import axios from 'axios';
import RepoDetails from './RepoDetails'

function GitUser() {
  const [username,setUsername]=useState("");
  const [loading,setLoading]=useState(false);
  const [repos,setRepos]=useState([]);
  const [details,setDetails]=useState({});
  const [detailsLoading,setDetailsLoading]=useState(false);
  const [onload,setOnload]=useState(false);
  const [onloaddetail,setOnloaddetail]=useState(false);


  function handleSubmit(e){
    e.preventDefault();
    searchRepos();
  };

  function searchRepos(){
    setLoading(true);
    axios({
      method:"get",
      url:`https://api.github.com/users/${username}/repos`,
    }).then(res=>{
      setLoading(false);
      setRepos(res.data);
      res.data.length===0?setOnload(true):setOnload(false);
    })
    }

    function renderRepo(repo){
      return(
        <div className='row' onClick={()=>getDetails(repo.name)} key={repo.id}>
          <h3 className='repo-name'>
            {repo.name}
          </h3>
        </div>
      )
    }

    function getDetails(repoName){
      setDetailsLoading(true);
      axios({
        method:"get",
        url:`https://api.github.com/repos/${username}/${repoName}`,
      }).then(res=>{
        setDetailsLoading(false);
        setDetails(res.data);
        setOnloaddetail(true);
      });
    }
  
  return (
    <div className="page">
      <div className="landing-page-container">
        <div className="left-side">
          <form className="form">           
            <input className="input" value={username} placeholder="Github Username" onChange={e=>setUsername(e.target.value)} />
          <button className="button" onClick={handleSubmit}>{loading? "Searching..." : "Search"}</button>
          </form>
          <div className='results-container'>
            {repos.length>0?repos.map(renderRepo):onload?<h2>No user found</h2>:""}
          </div>
        </div>
        <RepoDetails details={details} loading={detailsLoading} onloaddetail={onloaddetail}/>
      </div>
    </div>
  );

  }
export default GitUser;

