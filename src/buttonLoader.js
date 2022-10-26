import React, { Component } from "react";
import { Checkmark } from 'react-checkmark'

export default class ButtonLoader extends Component {

  state = {
    loading: false,
    loading2: false
  };
 
  fetchData = () => {
    this.setState({ loading: true });
    
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

  


  render() {
    const { loading } = this.state;
    

    return (
      <div className="vlvlvl">
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