import React, { Component } from 'react'
import { Container, Calculator, Line, InputContainer, FirstLine, LastLine } from "./style";


class Calculadora extends Component {

  state = {
    num: 0,
    OldNum: 0,
    operator: ""
  }

  InputNum = (e) => {
    const input = e.target.value

    if (this.state.num === 0) {
      this.setState({
        num: input
      })
    } else {
      this.setState({
        num: this.state.num + input
      })
    }

  }


  HandleOperator = (e) => {
    const operatorInput = e.target.value

    this.setState({
      operator: operatorInput,
      OldNum: this.state.num,
      num: 0
    })
  }


  Result = () => {
    if (this.state.operator === "/") {
      this.setState({
        num: Number(this.state.num) / Number(this.state.OldNum)
      })
    }

    else if (this.state.operator === "X") {
      this.setState({
        num: this.state.num * this.state.OldNum
      })
    }

    else if (this.state.operator === "+") {
      this.setState({
        num: Number(this.state.num) + Number(this.state.OldNum)
      })
    }

    else if (this.state.operator === "-") {
      this.setState({
        num: Number(this.state.num) - Number(this.state.OldNum)
      })
    }
  }

  clear = () => {
    this.setState({
      num: 0,
      OldNum: 0
    })
  }

  render() {
    return (
      <Container>
        <Calculator>

          <InputContainer>
            <h1>{this.state.num}</h1>
          </InputContainer>

          <FirstLine>
            <button onClick={this.clear}>AC</button>
            <button onClick={this.HandleOperator} value={"/"} style={{ backgroundColor: '#FF8C00'}}>/</button>
          </FirstLine>

          <Line>
            <button onClick={this.InputNum} value={7}>7</button>
            <button onClick={this.InputNum} value={8}>8</button>
            <button onClick={this.InputNum} value={9}>9</button>
            <button onClick={this.HandleOperator} value={"X"} style={{ backgroundColor: '#FF8C00' }}>X</button>
          </Line>


          <Line>
            <button onClick={this.InputNum} value={4}>4</button>
            <button onClick={this.InputNum} value={5}>5</button>
            <button onClick={this.InputNum} value={6}>6</button>
            <button onClick={this.HandleOperator} value={"-"} style={{ backgroundColor: '#FF8C00' }}>-</button>
          </Line>

          <Line>
            <button onClick={this.InputNum} value={1}>1</button>
            <button onClick={this.InputNum} value={2}>2</button>
            <button onClick={this.InputNum} value={3}>3</button>
            <button onClick={this.HandleOperator} value={"+"} style={{ backgroundColor: '#FF8C00' }}>+</button>
          </Line>

          <LastLine>
            <button onClick={this.InputNum} value={0}>0</button>
            <button onClick={this.HandleOperator} value={"."}>,</button>
            <button onClick={this.Result} value={"="} style={{ backgroundColor: '#FF8C00' }}>=</button>
          </LastLine>

        </Calculator>
      </Container>
    )
  }
}

export default Calculadora;
