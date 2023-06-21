export function functionShowPassword() {
  const type = document.getElementById('password') as HTMLInputElement | null;
  if (type && type.tagName.toLowerCase() === 'input') {
    type.type = type.type === 'password' ? 'text' : 'password';
  }
}
