import { useNavigate } from 'react-router-dom'
import css from './Home.css';


function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  }

  return (
    <>
    <section className={css.mainSect}>
      <div className={css.imgDiv}>
        <img 
          src='https://lh3.googleusercontent.com/DtPY_Yg_sESWEUrg1_7oRr3gRjEf30No7YDuzSirEf1IEhX5t5KELPa6s69h2x2TcREysZgi2NctqGpbUozrpDeNAqPRjdJ-ug71ndAPiND1LN9oFWWIbhidSo2b1T6YLGsvEf8O07iBZPB-kuex3UW8dyAlUu2p_bRl3QGOa5HvEvvgY4Q_fNHzeB_-SpWh7RTqdddO6i7-YR767d7XjWcEXaXPh1FBpE66f22hMypQU846Fx5P8MBubkSMSd9azOTjTPjlW6vLpC_u4je4wX_hJpt9-A-zT-QQAxSVV8up1sBzLUpW2LQd0fECIuL6uBN7pgmVmQqAW22-NL9h9bGU-ymycJ3VP6pVydUCLIZnzMPubvm8rsWiNgadUlyQ7cYnFp8Smz_YWbQijHFz4vAOKonchISnjD2EbLRHi3ySKqJdcGmg9a7K8NSoWxjgDSadtMZosnaMsX-Q9vwwceRCsrcfjISU4-pbydrR4lWEuwJ6-hYvxk3fygy0Q1NN14fDJpPg_YWtkbywFUmW1jgOTJAs1NTAybahHGC3G43LSfSPVv8U9OCHYcKb8O3P1DrWskphml8OaayEglcqjU371wII_DQxpw748JFldJdZMNHEkDoFJ2p4CzqfNtNzGECPKX1KSSr0ws3SvGC-BSqraKSXAqfzDjYYlxWb8gC7g_OWFTtmKovAJZdHUJy_6OMOMq9ixz1fwxPm=w1351-h1799-no?authuser=2'
          alt='the lovely couple'
          className={css.homeImg}
          />
      </div>
      <div className={css.introDiv}>
        <h1>Welcome!</h1>
        <p>
          Thank you for joining us on this day as we join these two in holy matrimony
          Please register to log in and leave some kind words of encouragment.
        </p>
        <button onClick={() => handleClick()}>Log In</button>
      </div>
    </section>
    </>
  )
}

export default Home;