export const ADD_BIKE = 'ADD_BIKE';
export const ADD_USER = 'ADD_USER';
export const ADD_APPOINTMENT = 'ADD_APPOINTMENT';

export const NEW_BIKE = item => ({
  type: ADD_BIKE, item,
});

export const NEW_USER = user => ({
  type: ADD_USER, user,
});

export const NEW_APPOINTMENT = appointment => ({
  type: ADD_APPOINTMENT, appointment,
});

export default NEW_BIKE;
