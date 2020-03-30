import React from 'react';
import {Redirect} from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { device } from '../styles/device';
import RowStyles from '../styles/RowStyles';
import ColumnStyles from '../styles/ColumnStyles';
import TextStyles from '../styles/ColumnStyles';

const MediaQueries = styled.div`

  @media ${device.mobileS} {
    p {
      font-size: 2.4rem;
    }
  }    
  
  @media ${device.tabletS} {
    p {
      font-size: 2.6rem;
    }
  }
  
  @media ${device.tabletL} {
    p {
      font-size: 3rem;
  }  

  @media ${device.laptop} {
    p {
      font-size: 3.2rem;
  }  
`;

const JournalEntry = (props) => {

  const reverseProps = props.journalEntries.reverse();

  const journalEntry = reverseProps[props.match.params.id - 1];

  return (
    <MediaQueries>
      <RowStyles>
        <ColumnStyles>
          <TextStyles>
            <Row className='left-justified-row'>
              <Col className='bottom-visible' 
                style={{paddingTop: '10rem', 
                  paddingBottom: '2rem', 
                  marginLeft: '2rem', 
                  marginRight: '2.5rem'
                }}>
                <p>
                  {journalEntry ? null : <Redirect to='/journals' />}
                  {journalEntry ? journalEntry.content : null}
                </p>
              </Col>
            </Row>
          </TextStyles>
        </ColumnStyles>
      </RowStyles>
    </MediaQueries>
  );
};

export default JournalEntry;