import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteJournalEntry } from '../../actions/deleteJournalEntry'
import { Row, Col, Button} from 'react-bootstrap'
import styled from 'styled-components'
import { device } from '../styles/device'
import RowStyles from '../styles/RowStyles'
import ColumnStyles from '../styles/ColumnStyles'
import ButtonStyles from '../styles/ButtonStyles'
import TextStyles from '../styles/TextStyles'
import Moment from 'react-moment'
import 'moment-timezone';

const MediaQueries = styled.div`

  @media ${device.mobileS} {
    a {
      font-size: 2.4rem;
    }
    button.btn-submit {
      font-size: 2.2rem;
    }
  }    
  
  @media ${device.tabletS} {
    a {
      font-size: 2.6rem;
    }
    button.btn-submit {
      font-size: 2.4rem;
    }
  }
  
  @media ${device.tabletL} {
    a {
      font-size: 3rem;
    }
    button.btn-submit {
      font-size: 2.6rem;
    }
  }  

  @media ${device.laptop} {
    a {
      font-size: 3.2rem;
    }
    button.btn-submit {
      font-size: 2.8rem;
    }
  }  
`

class AllJournalEntries extends React.Component {
    
  handleDelete = (journalEntry) => {
    this.props.deleteJournalEntry(journalEntry.id)
  }

  render(){

    return (
    
      <MediaQueries>
        <RowStyles>
          <ColumnStyles>
            <ButtonStyles>
              <TextStyles>

                <Row className='left-justified-row'>
                  <Col className='bottom-visible' style={{paddingTop: '8rem'}}>
                    { 
                      this.props.journalEntries && [...this.props.journalEntries].map(journalEntry => 
                        <div key={journalEntry.id}> 
                          <NavLink 
                            exact to={`/journals/${journalEntry.id}`}
                          >
                          <Moment format="MMMM D, YYYY">                          
                            <h5>
                              {journalEntry.date}
                            </h5>
                          </Moment>
                          </NavLink>
                          <br></br><br></br><br></br>
                          <p>
                            {journalEntry.content}
                          </p>
                          <br></br>

                          <Button 
                            type='submit'
                            className='btn-submit-sm'
                            onClick={() => this.handleDelete(journalEntry)}
                          >
                            Delete
                          </Button>
                          <br></br><br></br><br></br><br></br><br></br>
                        </div>
                      )}
                  </Col>
                </Row>

              </TextStyles>
            </ButtonStyles>
          </ColumnStyles>
        </RowStyles>
      </MediaQueries>                
    )
  }
}

export default connect(null, {deleteJournalEntry})(AllJournalEntries)