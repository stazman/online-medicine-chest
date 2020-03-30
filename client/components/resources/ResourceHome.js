import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { device } from '../styles/device';
import RowStyles from '../styles/RowStyles';
import ColumnStyles from '../styles/ColumnStyles';
import ButtonStyles from '../styles/ButtonStyles';
import TextStyles from '../styles/TextStyles';

const MediaQueries = styled.div`

  @media ${device.custMobileWidth1} {
    h4 {
      margin-top: 5rem;
      margin-bottom: 4rem;
    }

    a.btn-main {
      font-size: 2.5rem;
    }
    div.col-lg-12.button-col {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }

  @media ${device.mobileS} {
    h4 {
      font-size: 3.4rem;
      margin-top: 6rem;
      margin-bottom: 5rem;
    }
    div.col-lg-12.button-col {
      padding-top: 2rem;
      padding-bottom: 3rem;
    }

  @media ${device.tabletL} {
    h4 {
      font-size: 6rem;
    }
    a.btn-main {
      font-size: 4rem;
    }
    div.col-lg-12.button-col {
      padding-top: 5.5rem;
      padding-bottom: 4.8rem;
    }
  }

  @media ${device.laptop} {
    h4 {
      font-size: 6rem;
      margin-top: 7rem;
      margin-bottom: 3rem;  
    }
    a.btn-main {
      font-size: 4.6rem;
    }
    div.col-lg-12.button-col {
      padding-top: 5rem;
      padding-bottom: 4rem;
    }
  }
`;
 
const ResourceHome = () => {
  return (
    <>
      <MediaQueries>
        <RowStyles>
          <ColumnStyles>
            <ButtonStyles>
              <TextStyles> 
          
                <Row className='centered-row'>
                  <Col lg={12} className='col-lg-12 message-col'>
                    <h4>
                      Your Resources
                    </h4>
                  </Col>

                  <Col lg={12} className='col-lg-12 button-col'>
                    <Button variant="main" href='/resources/new'>
                      Add New Resource
                    </Button>
                  </Col>

                  <Col lg={12} className='col-lg-12 button-col'>
                    <Button variant="main" href='/resources'>
                      View All Resources
                    </Button>
                  </Col>
                </Row>
                
              </TextStyles>   
            </ButtonStyles>
          </ColumnStyles>
        </RowStyles>
      </MediaQueries>
    </>
  );
};
 
export default ResourceHome;