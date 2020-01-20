import React, { Component } from "react";

// import ReactDOM from "react-dom";

class FormCards extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      users: [],
      error: null,
      bookmark: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ users: this.state.bookmark });
  }

  fetchUsers() {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          users: data,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    const addBookmark = id => {
      var url = "https://jsonplaceholder.typicode.com/photos/";
      this.state.bookmark.push(url + id);
      console.log(this.state.bookmark);
    };
    const { isLoading, users, error } = this.state;

    return (
      <React.Fragment>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          users.slice(0, 16).map(user => {
            const { username, id, thumbnailUrl, albumId } = user;
            return (
              <div key={id}>
                <p style={{ fontWeight: "bold" }}>Candidate ID: {id}</p>
                <img src={thumbnailUrl}></img>

                <div className="mt-3">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      addBookmark(id);
                    }}
                  >
                    Bookmark
                  </button>
                </div>

                <div className="mt-1">
                  {" "}
                  <button
                    onClick={this.handleClick}
                    className="btn btn-primary"
                  >
                    Filter results
                  </button>
                </div>

                <hr />
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}

// ReactDOM.render(<Bookmark />, document.getElementById("root"));
export default FormCards;
