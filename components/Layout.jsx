import Head from 'next/head'
import Header from '../components/Header'

export default function Layout({ children }) {
  return (
    <>
    <Head>
        <title>Maxroll React Clone</title>
        <meta name="description" content="Lost Ark spanish guides" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />  
    <div className="bg-guides-texture bg-cover bg-no-repeat bg-fixed bg-top h-screen">
      <div className="container mx-auto">
        <main>{children}</main>
      </div>
    </div>
    </>
  )
}
