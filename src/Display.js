import React from "react";
import axios from "axios";
import SearchBar from "./component/SearchBar";
import Card from "./component/Card";

let oDataP, oDataF;
class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e, searchTerm) {
    e.preventDefault();
    this.setState({
      data: {
        paid: oDataP.filter((x) =>
          x.confName.toLowerCase().match(searchTerm.toLowerCase()) ||
          x.city.toLowerCase().match(searchTerm.toLowerCase())
            ? x
            : ""
        ),
        free: oDataF.filter((x) =>
          x.confName.toLowerCase().match(searchTerm.toLowerCase()) ||
          x.city.toLowerCase().match(searchTerm.toLowerCase())
            ? x
            : ""
        )
      }
    });
  }
  componentDidMount() {
    axios
      .get(
        "https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences"
      )
      .then((response) => {
        debugger;
        console.log({ response });
        this.setState({ data: response.data });
        oDataP = response.data.paid;
        oDataF = response.data.free;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    /// const { paid, free } = this.state.data;
    const { paid } = this.state.data;
    const { free } = this.state.data;
    return (
      <>
        <SearchBar submit={this.onSubmit} />
        <h2>Paid Conferences</h2>
        <div className="fl">
          {paid && paid.length
            ? paid.map((x) => (
                <Card
                  key={x.conference_id}
                  place={x.city}
                  img={x.imageURL}
                  sdate={x.confStartDate}
                  edate={x.confEndDate}
                  name={x.confName}
                  web={x.confUrl}
                  entry={x.entryType}
                />
              ))
            : null}
        </div>
        <h2>Free Conferences</h2>
        <div className="fl">
          {free && free.length
            ? free.map((x) => (
                <Card
                  key={x.conference_id}
                  place={x.city}
                  img={x.imageURL}
                  sdate={x.confStartDate}
                  edate={x.confEndDate}
                  name={x.confName}
                  web={x.confUrl}
                  entry={x.entryType}
                />
              ))
            : null}
        </div>
      </>
    );
  }
}
export default Display;
