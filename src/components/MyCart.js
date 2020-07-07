import React, { Component } from 'react';
import { connect } from 'react-redux'
import { CSSTransitionGroup } from 'react-transition-group'

class MyCart extends Component {
    formatDate (timestamp) {
        const d = new Date(timestamp)
        const time = d.toLocaleTimeString('en-US')
        return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
      }
    render(){
        const { inCart_phones, phones } = this.props;
        
        return(
            <div>
                <CSSTransitionGroup
                        transitionName="transPhones"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                                             
                    {inCart_phones.length
                    ? inCart_phones.map(phone =>(
                        <div key={phone} className="ui cards">
                            <div className="ui card centered">
                                <div className="content">
                                <img alt="sda"
                                    src={`/images/${phones[phone].brand}.jpg`} 
                                    className="ui mini right floated image"
                                />
                                <div className="header">{phones[phone].brand}</div>
                                <div className="meta">$ {phones[phone].price}</div>
                                <div className="meta price">{this.formatDate(phones[phone].timestamp)}</div>
                                <div className="description">
                                {phones[phone].capacity}
                                </div>
                                </div>
                                <div className="extra content">
                                <div className="ui two buttons">
                                    <button className="ui green basic button">Buy</button>
                                    <button className="ui red basic button">Decline</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        ))
                    : (
                        <div className="ui placeholder">No Phone in your cart...</div>
                    )}
                 </CSSTransitionGroup>
            </div>
        )
    }
}
function mapStateToProps({phones}){
    return{
        phones,
    }
  }

export default connect(mapStateToProps)(MyCart);

