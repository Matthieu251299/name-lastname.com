import Project from './Project';

export default function Projects() {
  return (
    <div className='pt-5'>

      <div>

          <h2 className='text-center text-2xl'> Some of my Projects </h2>

      </div>

      <div className='lg:w-[50%] m-auto grid grid-cols-1 md:grid-cols-2 justify-center gap-10 py-5 px-10'>
          {/* <Project
              name='Connect with your peers'
              desc='This Chrome extension project aims to streamline the networking with your peers on Canvas.'
              project_url='https://chromewebstore.google.com/detail/connect-with-your-peers/cefoneomgidhcbjohhnbfffdeikjopbj'
              img_url='/unnamed.png'
          /> */}
      </div>
      
    </div>
  )
}
