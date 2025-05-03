



const Register = () => {
  const email = useInput("");
  const password = useInput("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.value, password.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" {...email} />
      <input type="password" placeholder="Password" {...password} />
      <button type="submit" onClick={handleSubmit()}>Submit</button>
    </form>
  );
};
export default Register;
