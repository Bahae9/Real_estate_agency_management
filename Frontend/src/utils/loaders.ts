export async function authLoader() {
  const storedToken = localStorage.getItem("token");
  if (!storedToken) {
    return { isAuth: false };
  }
  try {
    const response = await fetch("http://localhost:8080/auth/check-token", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${storedToken.slice(1, storedToken.length - 1)}`,
      },
    });
    if (response.ok) {
      return { isAuth: true };
    } else {
      return { isAuth: false };
    }
  } catch (error) {
    return { isAuth: false };
  }
}
