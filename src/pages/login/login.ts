export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginState {
  authorized: boolean;
  errors?: {
    email?: string;
    password?: string;
    error?: string;
  };
}

const USER_EMAIL = 'test@test.com';
const USER_PASSWORD = '123456';

function validateForm(data: LoginFormData) {
  const { email, password } = data;

  if (!email || !password) {
    return {
      email: email ? undefined : 'Email is required',
      password: password ? undefined : 'Password is required'
    };
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    return {
      email: 'Please enter a valid email address',
      password: undefined
    };
  }
}

function mockFetch(data: LoginFormData): Promise<LoginState> {
  return new Promise(resolve => {
    setTimeout(() => {
      if (data.email === USER_EMAIL && data.password === USER_PASSWORD) {
        resolve({ authorized: true });
      } else {
        resolve({ authorized: false, errors: { error: 'Invalid email or password' } });
      }
    }, 300);
  });
}

export async function login(_: LoginState, payload: FormData): Promise<LoginState> {
  const data: LoginFormData = { email: payload.get('email') as string, password: payload.get('password') as string };

  const errors = validateForm(data);

  if (errors) {
    return Promise.resolve({
      authorized: false,
      errors
    });
  }

  const response = await mockFetch(data);

  return response;
}
