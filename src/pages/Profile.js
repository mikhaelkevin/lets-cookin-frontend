import React from 'react';
import {
  Container, Row, Col, Stack,
} from 'react-bootstrap';
import ProfileContext from './Context';

// Import Component
import MyRecipe from '../components/moleculs/Profile/MyRecipe';
import AvatarAndButtons from '../components/moleculs/Profile/AvatarAndButtons';

function Profile() {
  const userInformation = React.useContext(ProfileContext);

  return (
    <Container fluid style={{ backgroundColor: '#1c1e21' }} className="text-light">
      <h1 className="text-center p-5">
        Hello,
        {' '}
        {userInformation?.name}
      </h1>
      <AvatarAndButtons avatar={userInformation.profile_picture} />
      <Row className="mt-5 pt-5 w-50">
        <Col lg={{ offset: 1 }}>
          <Stack direction="horizontal" gap={5}>
            <div className="text-center">
              <h5>My Recipe</h5>
            </div>
          </Stack>
        </Col>
      </Row>
      <hr />
      <MyRecipe />
    </Container>
  );
}

export default Profile;
