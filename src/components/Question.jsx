import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import { ButtonStyle, DivForm, FormStyle, RadioStyle, Titulo } from '../styles/CardQuestion'

export default class Question extends Component {

  constructor(props) {
    super(props);
    this.state = {      
      numberQuestion: 0,
      question: {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: ""
      },
      score: 0,
      answerSelect: ''
    }
  }

  componentDidMount() {

        const currentQuizData = this.props.cuestionario[this.state.numberQuestion];

        console.log(currentQuizData);

        this.setState({
            question: {
                question: currentQuizData.question,
                a: currentQuizData.a,
                b: currentQuizData.b,
                c: currentQuizData.c,
                d: currentQuizData.d,
                correct: currentQuizData.correct
            }
        })

        console.log(this.state);
  } 

    onChanged = (e) => {

        this.setState({
          answerSelect: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        if (this.state.answerSelect === this.state.question.correct) {
            this.setState({
                score: this.state.score + 1,
            })
        }
        if (this.state.numberQuestion < this.props.cuestionario.length) {
            this.componentDidMount()
        } else {
            console.log(this.state.score);
        }
    }


  render() {

    return (

      <DivForm>

        <FormStyle onSubmit={this.handleSubmit}>

          <Form.Group className="mb-3" controlId="control_radio" style={{padding:"4rem"}}>

            <Titulo>{this.state.question.question}</Titulo>

            <RadioStyle
              type="radio"              
              value={this.state.question.a}
              label={this.state.question.a}
              name={'respuestas'}
              id={'respuesta1'}
              onChange={this.onChanged}
            />
            <RadioStyle
              type="radio"              
              value={this.state.question.b}
              label={this.state.question.b}
              name={'respuestas'}
              id={'respuesta2'}
              onChange={this.onChanged}
            />
            <RadioStyle
              type="radio"              
              value={this.state.question.c}
              label={this.state.question.c}
              name={'respuestas'}
              id={'respuesta3'}
              onChange={this.onChanged}
            />
            <RadioStyle
              type="radio"              
              value={this.state.question.d}
              label={this.state.question.d}
              name={'respuestas'}
              id={'respuesta4'}
              onChange={this.onChanged}
            />

          </Form.Group>

          <ButtonStyle variant="primary" type="submit" onClick={() => { this.setState({ numberQuestion: this.state.numberQuestion + 1 }) }}>
              Enviar
          </ButtonStyle>

          <h2 style={{ textAlign: "center" }}>{this.state.score}/{this.props.cuestionario.length} </h2>

        </FormStyle>
      </DivForm>
    )
  }
}

