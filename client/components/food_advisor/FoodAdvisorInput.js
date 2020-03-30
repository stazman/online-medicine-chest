import React from 'react'
import { connect } from 'react-redux'
import { addFoodAdvisor } from '../../actions/addFoodAdvisor'
import { Row, Form, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { device } from '../styles/device'
import RowStyles from '../styles/RowStyles'
import ButtonStyles from '../styles/ButtonStyles'
import TextStyles from '../styles/TextStyles'

const MediaQueries = styled.div`

  @media ${device.mobileS} {
    button.btn-submit {
      font-size: 2rem;
  }

  @media ${device.mobileS} {
    div.row.centered-row-form {
      padding-top: 8rem;
  }

  @media ${device.tabletS} {
    label.form-label {
      font-size: 2.4rem;
    }
    input[type='radio'] { 
      transform: scale(1.4);
    }
    label.form-check-label {
      font-size: 2.2rem;
    }
    button.btn-submit {
      font-size: 2.4rem;
    }
  }

  @media ${device.tabletL} {
    label.form-label {
      font-size: 2.8rem;
      line-height: 130%;
    }
    input[type='radio'] { 
      transform: scale(1.8);
      top: 25%;
    }
    label.form-check-label {
      font-size: 2.6rem;
    }
    button.btn-submit {
      font-size: 2.8rem;
    }
  }

  @media ${device.laptop} {
    label.form-label {
      font-size: 3rem;
    }
    input[type='radio'] { 
      transform: scale(2);
      top: 30%;
    }
    label.form-check-label {
      font-size: 2.8rem;
    }
    button.btn-submit {
      font-size: 3rem;
    }
  }

  @media ${device.custLaptopPos3} {
    label.form-label {
      font-size: 3.2rem;
    }
    input[type='radio'] { 
      transform: scale(2);
      top: 30%;
    }
    label.form-check-label {
      font-size: 3rem;
    }
    button.btn-submit {
      font-size: 3.2rem;
    }
  }
`

class FoodAdvisorInput extends React.Component {
 
  state = {
    how_big_meals: null,
    how_much_snacked: null,
    how_healthy: null
  }
 
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value    
    })
  }
 
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addFoodAdvisor(this.state)
    this.setState = ({
      how_big_meals: null,
      how_much_snacked: null,
      how_healthy: null
    })
    this.props.history.push('/food_advisors');
  }
 
  render(){
    return (
      <MediaQueries>
        <RowStyles>
          <ButtonStyles>
            <TextStyles>
  
              <Row className='centered-row-form'>
                  
                <Form onSubmit={this.handleSubmit} className='advice-form'>
                  <Form.Label>
                    In general, how big were your meals?
                  </Form.Label>
                    {['radio'].map(type => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check 
                          label="&nbsp;large" 
                          type={type} 
                          id={`inline-${type}-1`}
                          onChange={e => this.handleChange(e)}
                          name='how_big_meals'
                          value={2}
                          checked={this.state.checked}  
                        />
                        <Form.Check 
                          label="&nbsp;medium" 
                          type={type} 
                          id={`inline-${type}-2`}
                          onChange={e => this.handleChange(e)}
                          name='how_big_meals'
                          value={1}
                          checked={this.state.checked}    
                        />
                        <Form.Check 
                          label="&nbsp;small" 
                          type={type} 
                          id={`inline-${type}-3`}
                          onChange={e => this.handleChange(e)}
                          name='how_big_meals'
                          value={0}
                          checked={this.state.checked}  
                        />
                      </div>
                    ))}
                  <br></br>
    
                  <Form.Label>
                    How much did you snack?
                  </Form.Label>
                    {['radio'].map(type => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check 
                          label="&nbsp;a lot" 
                          type={type} 
                          id={`inline-${type}-1`}
                          onChange={e => this.handleChange(e)}
                          name='how_much_snacked'
                          value={2}
                          checked={this.state.checked}  
                        />
                        <Form.Check 
                          label="&nbsp;some" 
                          type={type} 
                          id={`inline-${type}-2`}
                          onChange={e => this.handleChange(e)}
                          name='how_much_snacked'
                          value={1}
                          checked={this.state.checked}  
                        />
                        <Form.Check 
                          label="&nbsp;a little" 
                          type={type} 
                          id={`inline-${type}-3`}
                          onChange={e => this.handleChange(e)}
                          name='how_much_snacked'
                          value={0}
                          checked={this.state.checked}  
                        />
                      </div>
                    ))}
                  <br></br>

                  <Form.Label>
                    In general, how healthy were your meals and snacks?
                  </Form.Label>
                    {['radio'].map(type => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check 
                          label="&nbsp;not healthy" 
                          type={type} 
                          id={`inline-${type}-1`}
                          onChange={e => this.handleChange(e)}
                          name='how_healthy'
                          value={2}
                          checked={this.state.checked}   
                        />
                        <Form.Check 
                          label="&nbsp;somewhat healthy" 
                          type={type} 
                          id={`inline-${type}-2`}
                          onChange={e => this.handleChange(e)}
                          name='how_healthy'
                          value={1}
                          checked={this.state.checked}   
                        />
                        <Form.Check 
                          label="&nbsp;very healthy" 
                          type={type} 
                          id={`inline-${type}-3`} 
                          onChange={e => this.handleChange(e)}
                          name='how_healthy'
                          value={0}
                          checked={this.state.checked}  
                        />
                      </div>
                    ))}
                  <br></br><br></br>

                  <Button className='btn-submit' type='submit'>
                    Get Advice
                  </Button>
                </Form>
              </Row>
              
            </TextStyles>
          </ButtonStyles> 
        </RowStyles>
      </MediaQueries>
    )
  }
}
 
export default connect(null, {addFoodAdvisor})(FoodAdvisorInput)