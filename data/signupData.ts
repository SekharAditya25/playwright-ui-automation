export type SignupData = {
  name: string;
  email: string;
  title: 'Mr.' | 'Mrs.';
  password: string;
  day: string;
  month: string;
  year: string;
  newsletter: boolean;
  optin: boolean;
  firstName: string;
  lastName: string;
  company: string;
  address1: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
};

const defaultSignupData: Omit<SignupData, 'email'> = {
  name: 'Automation Test',
  title: 'Mr.',
  password: 'Test@1234',
  day: '10',
  month: 'May',
  year: '1990',
  newsletter: true,
  optin: true,
  firstName: 'Sekhar',
  lastName: 'Chinni',
  company: 'QA Co',
  address1: '123 Test St',
  address2: 'Suite 100',
  country: 'India',
  state: 'Telangana',
  city: 'Hyderabad',
  zipcode: '560001',
  mobileNumber: '+91987654321',
};

export const createSignupData = (): SignupData => ({
  ...defaultSignupData,
  email: `playwright_${Date.now()}@example.com`,
});
