export function getUserName() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.name || null;
}
