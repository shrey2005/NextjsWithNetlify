import Link from 'next/link';

export default function Header(){
    return(
        <>
        <header className="header">
          <nav className="nav">
            <Link href="/Login">
              <a><h2>Login</h2></a>
            </Link>
            <Link href="/">
              <a><h2>My Blog</h2></a>
            </Link>
            <Link href="/MyProfile">
              <a><h2>My Profile</h2></a>
            </Link>
            <Link href="/AboutsUs">
              <a><h2>About</h2></a>
            </Link>
          </nav>
        </header>
      </>
    )
}
// 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