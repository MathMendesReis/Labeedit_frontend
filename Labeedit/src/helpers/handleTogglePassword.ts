export const handleTogglePassword = (
  showPassword: string,
  setShowPassword: React.Dispatch<React.SetStateAction<string>>,
) => {
  if (showPassword === 'text') {
    setShowPassword('password');
  } else {
    setShowPassword('text');
  }
};
