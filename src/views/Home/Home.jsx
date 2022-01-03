import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  }

  return (
    <>
      <h1>Welcome!</h1>
      <img src='' alt='the lovely couple'/>
      <p>
        Thank you for joining us on this day as we join these two in holy matrimony
        Please register to log in and leave some kind words of encouragment.
      </p>
      <button onClick={() => handleClick()}>Log In</button>
    </>
  )
}

export default Home;