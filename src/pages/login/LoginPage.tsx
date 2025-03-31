import { Input } from '../../components/input';
import { Button } from '../../components/button';
import styles from './LoginPage.module.css';
import { Checkbox } from '../../components/checkbox';
import { useActionState, useState } from 'react';
import { login } from './login';

export function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, {
    authorized: false
  });
  const [shouldResetErrors, setShouldResetErrors] = useState(false);

  const errors = shouldResetErrors ? undefined : state.errors;

  const handleFocus = () => {
    setShouldResetErrors(true);
  };

  const handleFormAction = (formData: FormData) => {
    setShouldResetErrors(false);
    formAction(formData);
  };

  if (state.authorized) {
    return <div>Redirecting to home page...</div>;
  }

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.leftBlock}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Productivity</h1>
            <p className={styles.subtitle}>App for you personal and business goals!</p>
          </div>
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.formContainer}>
            <div className={styles.signInContent}>
              <form className={styles.form} action={handleFormAction}>
                <Input
                  name="email"
                  autoComplete="email"
                  invalid={!!errors?.email || !!errors?.error}
                  error={errors?.email}
                  autoFocus
                  placeholder="Your email"
                  label="Email"
                  onFocus={handleFocus}
                />
                <Input
                  type="password"
                  name="password"
                  invalid={!!errors?.password || !!errors?.error}
                  error={errors?.password || errors?.error}
                  placeholder="Your password"
                  label="Password"
                  onFocus={handleFocus}
                />
                <div className={styles.rememberContainer}>
                  <Checkbox defaultChecked label="Remember me" />
                  <a href="/" className={styles.forgotPassword}>
                    Forgot password?
                  </a>
                </div>
                <Button type="submit" isLoading={isPending}>
                  Sign in
                </Button>
              </form>
              <div className={styles.footer}>
                <p className={styles.footerText}>Don't have an account?</p>
                <a href="/" className={styles.footerLink}>
                  Log In
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
