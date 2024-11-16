import Image from 'next/image'
import Badge from '@/components/Badge'
const skills = [
  {
    skillname:"React",
    color:"bg-red-500"
  }, 
  {
    skillname:"Next.js",
    color:"bg-blue-500"
  }, 
  {
    skillname:"TypeScript",
    color:"bg-green-500"
  }, 
  {
    skillname:"Node.js",
    color:"bg-yellow-500"
  }, 
  {
    skillname:"TailwindCSS",
    color:"bg-purple-500"
  }
]
const penghargaan = [
  {
      nama:"juara 1 membadut",
      warna:"bg-red-500"
  },
  {
    nama:"juara 2 membadut",
    warna:"bg-blue-500"
  }, 

]
export default function ProfilePage() {
  return (
    <section className="py-12 xl:py-24 xl:h-[95vh] xl:pt-[100px] pt-[120px] bg-white dark:bg-transparent font-[family-name:var(--font-geist-sans)]">
        <div className="container mx-auto">
    
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Profile Image Section */}
        <div className="w-full md:w-1/3">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/profil.jpg" // Make sure to add your profile photo to the public folder
              alt="Profile Photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Profile Description Section */}
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">Ahong</h1>
          <h2 className="text-xl text-gray-600 mb-4">Software Developer</h2>
          
          <div className="space-y-4">
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2">Contact Information</h3>
              <ul className="space-y-2">
                <li>📧 email@example.com</li>
                <li>📱 +62 812 3456 7890</li>
                <li>📍 New York, USA</li>
              </ul>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-semibold mb-5">Skills</h3>
              <div className="flex flex-wrap gap-2">  
              {
                skills.map((skill)=>(
                <Badge name={skill.skillname} warna={skill.color}/>
                ))        
              }  
              </div>
            </div>
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-5">penghargaan</h3>
              <div className="flex flex-wrap gap-2">  
              {
                penghargaan.map((penghargaan)=>(
                <Badge name={penghargaan.nama} warna={penghargaan.warna}/>
                ))
              
              }
                
                
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
