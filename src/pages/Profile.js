/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import {
  Container, Row, Col, Stack,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { currentUserThunk } from '../redux/features/userSlice';

// Import Component
import MyRecipe from '../components/moleculs/Profile/MyRecipe';
import AvatarAndButtons from '../components/moleculs/Profile/AvatarAndButtons';

function Profile() {
  const dispatch = useDispatch();
  const { id: userId } = useSelector((state) => state?.auth?.user);
  const userProfile = useSelector((state) => state?.user?.credentials);

  useEffect(() => {
    dispatch(currentUserThunk(userId));
  }, []);

  return (
    <Container fluid style={{ backgroundColor: '#1c1e21' }} className="text-light profilePage">
      <h1 className="text-center">
        Hello,
        {' '}
        {userProfile?.name}
      </h1>
      <AvatarAndButtons avatar={userProfile.profile_picture} />
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
