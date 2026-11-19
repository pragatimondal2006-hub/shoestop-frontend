const submitHandler = async () => {
  try {
    console.log("Signup button clicked");

    const res = await axios.post(url, {
      name,
      email,
      password
    });

    console.log("Signup response:", res.data);

    if (res.status === 200 || res.status === 201) {
      localStorage.setItem('token', res.data.token);
      alert("Signup successful!");
      navigate('/');
    }

  } catch (error) {
    console.log("Signup error:", error.response?.data || error.message);
    alert(error.response?.data?.message || "Signup failed. Check the browser console.");
  }
};
