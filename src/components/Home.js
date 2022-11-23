import React from 'react';
import styled from 'styled-components';
import Section from './Section';


function Home() {
  return (
    <Container>
      <Section
            title="Model S"
            description="Order online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            LeftBtnText="Custom order"
            RightBtnText="Existing inventory"
       />
      <Section 
            title="Model Y"
            description="Order online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            LeftBtnText="Custom order"
            RightBtnText="Existing inventory"
      />
      <Section 
            title="Model 3"
            description="Order online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            LeftBtnText="Custom order"
            RightBtnText="Existing inventory"
      />
      <Section 
            title="Model X"
            description="Order online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            LeftBtnText="Custom order"
            RightBtnText="Existing inventory"
      />
      <Section 
            title="Lowest Cost Solar Panels in the world"
            description="Money-back gurantee"
            backgroundImg="solar-panel.jpg"
            LeftBtnText="Order now"
            RightBtnText="Learn more"
      />
      <Section 
            title="Solar For New Roofs"
            description="Solar Roof cost less than a New roof"
            backgroundImg="solar-roof.jpg"
            LeftBtnText="Shop Now"
            RightBtnText="Learn more"
      />
      <Section 
            title="Accessories"
            description="All accessories available"
            backgroundImg="accessories.jpg"
            LeftBtnText="Buy now"
      />
    </Container>
        
  )
}

export default Home;

const Container = styled.div `
    height: 100vh;
`