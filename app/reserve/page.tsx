import Image from 'next/image'

export default function Page() {
    return (
        <>
        <div className="flex justify-center object-cover">
          <div className="w-screen h-96 overflow-hidden relative">
            <Image src="/catch/shirakami.jpg" alt="welcome aomori!!" fill objectFit="cover" objectPosition="center" />
          </div>
      </div>
        <div className='m-4'>
            <h1 className="text-center">Sorry...</h1>
            <p className="text-center">we are under maintenance.</p>
            <p className="text-center">This is Shirakami Santi.</p>
        </div>
        </>
    )
}
