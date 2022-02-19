import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
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
        <h2 className="text-white">Test</h2>
      </div>
    </div>
    </>
  )
}
