import Nav from './Navigation';

export default function Header() {
    // Importing the Navigation
    return (
      <>
      <div className="logo">
        <h1>Phillip Goldberg</h1>
      </div>
      <div className="nav"><Nav /></div>
      </>
    );
  }