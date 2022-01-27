import { Link } from 'react-router-dom';
import './Header.css';

//simple navigation bar to jump down to projects, resume, or contact info

export default function Header() {
  return (
    <div className="header">
      <p>profile</p>
      <p>projects</p>
      <p>resume</p>
    </div>
  );
}
