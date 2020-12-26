import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import DatePicker from "react-datepicker"
import { addJournalEntry } from '../../actions/addJournalEntry'
import { Row, Form, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { device } from '../styles/device'
import RowStyles from '../styles/RowStyles'
import ButtonStyles from '../styles/ButtonStyles'
import TextStyles from '../styles/TextStyles'

const MediaQueries = styled.div`

  @media ${device.mobileM} {
    textarea {
      font-size: 2.8rem;
    }
    small.form-text {
      font-size: 2.4rem;
    }
    button.btn-submit {
      font-size: 2.7rem;
    }    
  }

  @media ${device.mobileL} {
    textarea {
      font-size: 3rem;
    }
    small.form-text {
      font-size: 2.4rem;
    }
    button.btn-submit {
      font-size: 3rem;
    }    
  }

  @media ${device.tabletS} {
    textarea {
      font-size: 3.2rem;
    }
    small.form-text {
      font-size: 2.2rem;
    }    
  }
  
  @media ${device.laptop} {
    textarea {
      font-size: 3.6rem;
    }
    small.form-text {
      font-size: 2.4rem;
    }    
  }

  @media ${device.laptopL} {
    textarea {
      font-size: 4rem;
    }
    small.form-text {
      font-size: 2.8rem;
    }
    button.btn-submit {
      font-size: 3.4rem;
    }        
  }

  @media ${device.desktop} {
    textarea {
      font-size: 5rem;
    }
    small.form-text {
      font-size: 3.4rem;
    }
    button.btn-submit {
      font-size: 3.8rem;
    }            
  }
`

class JournalInput extends Component {

  state = {
    content: '',
    date: new Date()
  }

  handleChange = date => {
    this.setState({
      date: date
    });
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addJournalEntry(this.state);
    this.setState({
      content: ''
    })
  }

  render(){

    return (

      <MediaQueries>
        <RowStyles>
          <ButtonStyles>
            <TextStyles>
            
              <Row className='left-justified-row-form'>

                <Moment format='MMMM D, YYYY'></Moment>
                
                <Form onSubmit={this.handleSubmit}>
                  
                  <Form.Group controlId='formJournalEntry'>
                  
                    <div style={{display: 'none'}}>
                      
                        <DatePicker
                          value={this.state.date}
                          onChange={this.handleChange}
                          disabled={true}
                          readOnly={true}
                          plaintext={true}
                        />
                    
                    </div>

                    <Form.Control style={{fontSize: '2rem'}}
                      as='textarea' 
                      type='textarea'
                      rows='12'
                      cols='110'
                      placeholder='Write a new journal entry here ...'
                      onChange={e => this.handleChange(e)}
                      value={this.state.content}
                    />
                    <Form.Text>                
                      Keep note of your progress and experience!
                    </Form.Text>
                  </Form.Group>
                  <br></br>
                  <Button className='btn-submit' type='submit'>
                    Submit
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

export default connect(null, {addJournalEntry})(JournalInput)