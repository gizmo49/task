import React, { Component } from 'react';

export default class Pay extends Component {
    state = {
        cardnumber:"4324 5433 9382 1030",
        expiration:"03/24",
    }
    handleChange(e){
        console.log("handling change");
        const {name, value} = e.target;
        this.setState({ [name] : [value]})
    }
    render() {
        return (
        <main>
        <div className="container">
            <hr/>
            <div className="finite">
                <div className="row">
                    <div className="col-6">
                        <div className="furry">
                            <h6>Payment Information</h6>
                            <p>Choose your method of payment.</p>
                        </div>
                    </div>
                    <div className="col-6">

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="master-card">
                        <div className="spread">
                            <div className="content">
                                <label>card number</label>
                                <p className="dae">{this.state.cardnumber}</p>
                            </div>

                            <div className="content">
                                <label>EXPIRATION DATE</label>
                                <p className="dae">{this.state.expiration}</p>
                            </div>
                            <div className="content">
                                <label>John Doe</label>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="sparta-form">
                        <div className="form-row">
                            <div className="col-6">
                                <label>Credit card number</label>
                                <input type="text" className="form-control" name="cardnumber" value={this.state.cardnumber} onChange={this.handleChange.bind(this)}/>
                            </div>
                            <div className="col-6">
                                <label>Expiration Date</label>
                                <input type="text" className="form-control" name="expiration" value={this.state.expiration} onChange={this.handleChange.bind(this)}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-6">
                                <label>Security Code</label>
                                <input type="text" className="form-control" value="420"/>
                            </div>
                            <div className="col-6">
                                <label>Postal Code</label>
                                <input type="text" className="form-control" value="10119"/>
                            </div>
                        </div>
                        <label className="my-check">Use this card for next time purchase
                            <input type="checkbox" checked="checked"/>
                            <span className="checkmark"></span>
                        </label>
                        <button className="btn add-card">Add card</button>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="play">
                <div className="direct">
                    <h6 className="que">Subtotal</h6>
                    <span className="ans">₦2,497.00</span>
                </div>
                <div className="direct">
                    <h6 className="que">Estimated Tax</h6>
                    <span className="ans">₦119.64</span>
                </div>
                <div className="direct">
                    <h6>Promotional Code: <span className="code">Z4KXLM9A</span></h6>
                    <span className="ans">₦-60.00</span>
                </div>
            </div>

            <hr/>
            <div className="d-flex">
                <button className="btn payment">Complete payment</button>
                <h6 className="ml-auto complete">TOTAL: ₦2556.64</h6>
            </div>
        </div>
        </main> 
        )
    }
}