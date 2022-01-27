import './Profile.css';

export default function Profile() {
  return (
    <div className="profile">
      <div className="details">
        <p>profile</p>
        <p>this is some information about bailey, she is an excellent student</p>
      </div>
      <img src={`${process.env.PUBLIC_URL}/profile-github.jpg`} className="pic" />
    </div>
  );
}
