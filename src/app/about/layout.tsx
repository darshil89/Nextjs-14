export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
        <body>
            <header>This is about header</header>
            {children}
            <footer>This is about footer</footer>
        </body>
    </html>
  )
}
