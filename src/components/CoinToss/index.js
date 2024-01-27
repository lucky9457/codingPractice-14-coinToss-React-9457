// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    head: 0,
    tail: 0,
    total: 0,

    imgg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  TossResult = () => {
    const randomint = Math.floor(Math.random() * 2)
    if (randomint === 0) {
      return 'heads'
    }
    return 'tails'
  }

  onclicktoss = () => {
    const tossresult = this.TossResult()

    if (tossresult === 'heads') {
      this.setState(prev => ({
        head: prev.head + 1,
        total: prev.total + 1,
        imgg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prev => ({
        tail: prev.tail + 1,
        total: prev.total + 1,
        imgg: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {imgg, head, tail, total} = this.state

    return (
      <div className="main">
        <div className="card">
          <h1 className="head">Coin Toss Game</h1>
          <p className="desc">Heads (or) Tails</p>
          <img alt="toss result" className="img" src={imgg} />
          <button onClick={this.onclicktoss} type="button" className="btn">
            Toss Coin
          </button>
          <div className="count-cont">
            <p className="countpara">Total:{total}</p>
            <p className="countpara">Heads:{head}</p>
            <p className="countpara">Tails:{tail}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
