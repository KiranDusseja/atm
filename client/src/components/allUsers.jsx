import { Component } from "react";

class AllUsers extends Component {
  componentDidMount() {
    this.callApi() //henter callApi metoden fra denne filen
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/showFormData");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
}
export default AllUsers;
