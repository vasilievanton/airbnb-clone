import { useSelector } from 'react-redux';

export function useAuth() {
  const { id, email, token, displayName } = useSelector((state) => state.user.user);
  console.log(email);
  return {
    isAuth: !!email,
    id,
    email,
    token,
    displayName,
  };
}
