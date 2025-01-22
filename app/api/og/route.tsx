import { ImageResponse } from 'next/og';
import Image from 'next/image';

export const runtime = 'edge'
export async function GET(request: Request) {
    try{
        const {searchParams} = new URL(request.url)
        const hasTitle = searchParams.has('title')
        const title = hasTitle ? searchParams.get('title')?.slice(0,100): 'DeepTrack'
        // const fontData = await fetch(new URL("../fonts/GeistMonoVF.woff", import.meta.url)).then((res) => res.arrayBuffer())
        return new ImageResponse(
            (
                <div tw="flex flex-col w-full h-full items-center justify-center bg-black text-white">
                <div tw="flex flex-col bg-black  md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
                
                <h2 tw="text-4xl sm:text-4xl font-bold tracking-tight text-white text-center">
                        <span>{title} </span>
                      </h2>
                 </div>
                  <div tw="bg-gray-50 flex w-full">
                
                    <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
                   
                      {/* <h2 tw="flex flex-col  text-3xl sm:text-4xl font-bold tracking-tight text-white text-left">
                        <span>Detect Detect Deepfakes</span>
                        <span tw="text-blue-600"> Image,Video and Text .</span>

                      </h2> */}
                      <Image
                      src='/deeptrackOG.png'
                      alt='Logo image'
                      />
                      <div tw="mt-8 flex md:mt-0 ">
                        <div tw="flex rounded-md shadow">
                          <a href="https://www.deeptrack.io/" tw="flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-black">Get Started</a>
                        </div>
                        <div tw="ml-3 flex rounded-md shadow">
                          <a  href="https://www.deeptrack.io/" tw="flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-600">Learn more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            )
          );
    }
    catch (e: unknown) {
      const errorMessage = e instanceof Error ? e.message : String(e);
      return new Response(`${errorMessage} - Failed to Generate Image`, { status: 500 });
  }
}