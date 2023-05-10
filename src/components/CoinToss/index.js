import {Component} from 'react'

import './index.css'

const hedesimges = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const Tailes = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {imgurl: hedesimges, Heads: 0, Tails: 0, total: 0}

  //   changeCoin = () => {
  //     const {Headings, Tails, inTrue} = this.state
  //     this.setState(prevState => ({
  //       inTrue: !prevState.inTrue,
  //       [inTrue ? 'Tails' : 'Headings']:
  //         prevState[inTrue ? 'Tails' : 'Headings'] + 1,
  //     }))
  //   }
  changeCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    const myArry = [hedesimges, Tailes][tossResult]
    this.setState(prevState => ({
      imgurl: myArry,
      Heads: prevState.Heads + 1,
      Tails: prevState.Tails + 1,
      total: prevState.Heads + prevState.Tails + 1,
    }))
  }

  render() {
    const {imgurl, Heads, Tails, total} = this.state
    console.log(imgurl)

    return (
      <div className="coin-container">
        <div className="coin-toss-game">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="Heads-Tails">Heads (or) Tails</p>
          <img src={imgurl} alt="toss result" className="Coin-size" />
          <button type="button" className="buttonel" onClick={this.changeCoin}>
            TToss Coin
          </button>
          <div className="result-card">
            <p className="total-heading ">Total: {total}</p>
            <p className="total-heading ">Heads: {Heads}</p>
            <p className="total-heading ">Tails: {Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
