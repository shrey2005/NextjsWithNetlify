import Link from 'next/link';

export default function Header(){
    return(
        <>
        <header className="header">
          <nav className="nav">
            <Link href="/">
              <a>My Blog</a>
            </Link>
            <Link href="/AboutsUs">
              <a>About</a>
            </Link>
          </nav>
        </header>
      </>
    )
}
// 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