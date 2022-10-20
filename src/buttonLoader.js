import React, { Component, useState } from "react";
import { Checkmark } from 'react-checkmark'

export default class ButtonLoader extends Component {
/*   constructor() {
    super(props);
   
    this.selectorRef = React.createRef(null);
 } */
  state = {
    loading: false,
    loading2: false
  };
  /* const box = React.useRef(0); */
  fetchData = () => {
    this.setState({ loading: true });
    /* this.setState({ loading2: true }); */

    //Faking API call here
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
    setTimeout(() => {
      this.setState({ loading2: true });
    }, 3000);
    setTimeout(() => {
      this.setState({ loading2: false });
    }, 5000);
  };

  
/*   handleClickInside = () => {
    this.fetchData;
    this.selectorRef.current.style.visibility = 'visible'
  } */

  render() {
    const { loading } = this.state;
    const { loading2 } = this.state;

    return (
      <div /* style={{ marginTop: "60px" }} */className="vlvlvl">
        <button className="button" onClick={this.fetchData} disabled={loading}>
          {loading && (
            <i
              className="fa fa-refresh fa-spin"
              style={{ marginRight: "5px" }}
            />
          )}
          {loading && <span>...Checking</span>}
          {!loading && <span>Verify</span>}
        </button>
        <div className={this.state.loading2 ? 'on' : 'of'}>
          <Checkmark />
          </div>
        
        
        
      </div>
    );
  }
}