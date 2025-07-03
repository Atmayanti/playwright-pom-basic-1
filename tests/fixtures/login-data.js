export const loginTestData = [
  {
    testCase: 'L-01 Login with valid email and password',
    username: 'tomsmith',
    password: 'SuperSecretPassword!',
    isValid: true,
  },
  {
    testCase: 'L-02 Login with invalid username and valid password',
    username: 'tomsmith123',
    password: 'SuperSecretPassword!',
    isValid: false,
    expectedError: 'Your username is invalid!'
  },
  {
    testCase: 'L-03 Login with valid username and invalid password',
    username: 'tomsmith',
    password: 'WrongPass123',
    isValid: false,
    expectedError: 'Your password is invalid!'
  },
  {
    testCase: 'L-04 Login with invalid username and invalid password',
    username: 'tomsmith123',
    password: 'WrongPass123',
    isValid: false,
    expectedError: 'Your username is invalid!'
  },
  {
    testCase: 'L-05 Login with empty email',
    email: '',
    password: 'SuperSecretPassword!',
    isValid: false,
    expectedError: 'Please fill out this field.'
  },
  {
    testCase: 'L-06 Login with empty password',
    email: 'omsmith',
    password: '',
    isValid: false,
    expectedError: 'Please fill out this field.'
  },
  {
    testCase: 'L-07 Login with empty email and password',
    email: '',
    password: '',
    isValid: false,
    expectedError: 'Please fill out this field.'
  }
];
