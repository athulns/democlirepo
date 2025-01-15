function Home()
{
    return(
        <>
        <div className="jumbotron">
      <h1 className="display-4">IMDB</h1>
      <p className="lead">THE COMPLETE MOVIE DATABASE</p>
      <hr className="my-4"/>
      <p>Choose below options to add or view reviews</p>
      <p className="lead">
      <a className="btn btn-outline-primary btn-lg m-2" href="/addreview" role="button">Add Reviews</a>
      <a className="btn btn-outline-warning btn-lg m-2" href="/viewreviews" role="button">View Reviews</a>
  </p>
</div>
        </>
    )
}

export default Home;