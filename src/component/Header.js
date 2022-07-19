function Header() {
    const heading = { color: "red", background: "black" }
    return (
        <header>
            <h2 style={{ color: "blue" }}>I am Heading</h2>
            <h1 style={heading}> I am Header </h1>
        </header>
    )
}

export default Header