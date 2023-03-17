import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
function Footer() {
  return (
    <div className="bg-black text-white  border-t-[10px] border-white border-opacity-20 flex flex-col items-center py-10 space-y-4  ">
      <h1 className=" opacity-40 text-sm">
        {" "}
        NETFLIX clone by MINGMA TENZING SHERPA{" "}
      </h1>
      <div className="space-x-4">
        <GitHubIcon
          className="  hover:scale-125 hover:transition hover:ease-out hover:duration-150"
          fontSize="large"
        />
        <LinkedInIcon
          className="  hover:scale-125 hover:transition hover:ease-out hover:duration-150"
          fontSize="large"
        />
        <InstagramIcon
          className="  hover:scale-125 hover:transition hover:ease-out hover:duration-150"
          fontSize="large"
        />
      </div>
    </div>
  );
}
export default Footer;
