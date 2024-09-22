import profilePic from '../assets/images/profile.jpg'

function Card() {
  return (
    <div className="card">
        <img src={profilePic} className="card-img" alt="profile picture"/>
        <h2 className="card-title">A.H. Abir</h2>
        <p className="card-text">This is abir mamur card. So, don't touch this without author's permission.</p>
    </div>
  )
}

export default Card