import React from 'react';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';
import { device } from '../styles/device';
import RowStyles from '../styles/RowStyles';
import TextStyles from '../styles/TextStyles';
 
const MediaQueries = styled.div`

  @media ${device.mobileS} {
    h5 {
      font-size: 3.4rem;
  }

  @media ${device.mobileM} {
    h5 {
      font-size: 3.6rem;
  }

  @media ${device.mobileL} {
    h5 {
      font-size: 4rem;
  }

  @media ${device.tabletS} {
    h5 {
      font-size: 4.4rem;
  }

  @media ${device.tabletL} {
    h5 {
      font-size: 4.8rem;
  }
`;

function FoodAdvisors(props){

  let howBigMeals = '';
  let howMuchSnacked = '';
  let howHealthy = '';
  let noAdvice = '';

  return (
    <MediaQueries>
      <RowStyles>
        <TextStyles>
  
          <Row className='centered-row-advice'>
            { 
              props.foodAdvisors && props.foodAdvisors.map((function(foodAdvisor) {

                const howBigMealsCond = (props.foodAdvisors[props.foodAdvisors.length-1].how_big_meals + 
                props.foodAdvisors[props.foodAdvisors.length-2].how_big_meals + 
                props.foodAdvisors[props.foodAdvisors.length-3].how_big_meals)/3 > 3;
            
                const howMuchSnackedCond = (props.foodAdvisors[props.foodAdvisors.length-1].how_much_snacked + 
                props.foodAdvisors[props.foodAdvisors.length-2].how_much_snacked + 
                props.foodAdvisors[props.foodAdvisors.length-3].how_much_snacked)/3 > 3;
            
                const howHealthyCond = (props.foodAdvisors[props.foodAdvisors.length-1].how_healthy + 
                props.foodAdvisors[props.foodAdvisors.length-2].how_healthy + 
                props.foodAdvisors[props.foodAdvisors.length-3].how_healthy)/3 > 3;

                if (foodAdvisor === props.foodAdvisors[props.foodAdvisors.length-1]) {

                  if (howBigMealsCond) {
                    howBigMeals = 'Have smaller portions at each meal.';
                  } 

                  if (howMuchSnackedCond && howBigMeals === 'Have smaller portions at each meal.') {
                    howMuchSnacked = 'Have smaller portions at each meal or have fewer snacks.';
                  } else if ((howMuchSnackedCond) && howBigMeals !== 'Have smaller portions at each meal.') {
                    howMuchSnacked = 'Have larger portions of healthy meals and fewer snacks.';
                  }

                  if (howHealthyCond) {
                    howHealthy = 'Be sure to make healthy choices when you have a meal or snack.';
                  }

                  if (howBigMeals === '' && howMuchSnacked === '' && howHealthy === ''){
                    noAdvice = 'Nothing to pay special attention to now! Keep up the good work!';
                  }
                
                  if (howBigMeals === 'Have smaller portions at each meal.' && howMuchSnacked.includes('Have smaller portions at each meal')){
                    howBigMeals = '';
                  }
                } 
                return (
                  <>
                    <div className='advice-container'><h5>{howBigMeals}</h5></div>
                    <br></br>
                    <div className='advice-container'><h5>{howMuchSnacked}</h5></div>
                    <br></br>
                    <div className='advice-container'><h5>{howHealthy}</h5></div>
                    <br></br>
                    <div className='advice-container'><h5>{noAdvice}</h5></div>
                  </>
                );
              }))
            }
          </Row>
        
        </TextStyles>
      </RowStyles>
    </MediaQueries>
  );
}
 
export default FoodAdvisors;