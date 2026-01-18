export function fetchLoginFromBrowser() {
  const auth = localStorage.getItem("auth");
  console.log(auth);
  // console.log("LocalStorage auth:", auth);
  return auth ? JSON.parse(auth) : null;
}
