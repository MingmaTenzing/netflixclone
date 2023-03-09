import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
    <div className="bg-black text-white  border-t-[10px] border-white border-opacity-20 flex flex-col items-center py-10 space-y-4  ">
        <h1 className=' opacity-40 text-sm'> NETFLIX clone by MINGMA TENZING SHERPA </h1>
        <div className='space-x-4'>
            <GitHubIcon className='  hover:scale-125 transition ease-in-out 100ms'  fontSize="large" />
            <LinkedInIcon className='  hover:scale-125 transition ease-in-out 100ms'  fontSize="large" />
            <InstagramIcon className='  hover:scale-125 transition ease-in-out 100ms'  fontSize="large" />
         
        </div>
    </div>
  )
}
export default Footer