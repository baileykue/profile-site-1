import './Footer.css';

//have links to social media, github, and linked in

export default function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/baileykue" target="_blank" rel="noopener noreferrer">
        github
      </a>
      <a
        href="https://www.linkedin.com/in/bailey-kuebelbeck/"
        target="_blank"
        rel="noopener noreferrer"
      >
        linked in
      </a>
    </footer>
  );
}
