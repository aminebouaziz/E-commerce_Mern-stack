import React, { Component } from 'react'
import imgLan  from '../../img/lan.png'
export default class Sec1 extends Component {
  render() {
    return (
      <div className="sec1">
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <h2>Nos prosuits</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odio quisquam, aperiam, fugiat eos velit reiciendis quam fugit, nesciunt mollitia corporis. In dicta adipisci repudiandae quisquam cumque repellat amet perferendis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odio quisquam, aperiam, fugiat eos velit reiciendis quam fugit, nesciunt mollitia corporis. In dicta adipisci repudiandae quisquam cumque repellat amet perferendis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odio quisquam, aperiam, fugiat eos velit reiciendis quam fugit, nesciunt mollitia corporis. In dicta adipisci repudiandae quisquam cumque repellat amet perferendis.
                </p>
              </div>
              <div className="col-md-6">
               
                <img  className="imgLan" src={imgLan} alt=""/>
              </div>
            </div>
        </div>
      </div>
    )
  }
}
