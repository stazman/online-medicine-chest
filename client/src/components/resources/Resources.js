import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { device } from '../styles/device';
import RowStyles from '../styles/RowStyles';
import ColumnStyles from '../styles/ColumnStyles';
import TextStyles from '../styles/TextStyles';

const MediaQueries = styled.div`

  @media ${device.mobileS} {
    h4 {
      font-size: 4.2rem;
    }
    p {
      font-size: 3rem;
    }
    a {
      font-size: 3rem;
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
`;

const Resources = (props) => {
  return (
    <MediaQueries>
      <RowStyles>
        <ColumnStyles>
          <TextStyles>

            <Row className='left-justified-row-results'>
              <Col className='bottom-visible' style={{paddingTop: '6rem', paddingBottom: '2rem'}}>
                { 
                  props.resources && props.resources.map(resource => 
                    <li key={resource.id}>
                      <h4 className='coral-text'>
                        {resource.title}
                      </h4>
                      <br></br>
                      <p>
                        {resource.description}
                      </p>
                      <br></br>
                      <a href={resource.url} style={{color: 'navy'}}>
                        Go to Resource
                      </a>
                      <br></br><br></br><br></br><br></br>
                    </li>
                  )
                } 
              </Col>   
            </Row>
            
          </TextStyles>
        </ColumnStyles>
      </RowStyles>
    </MediaQueries>
  );
};

export default Resources;