import { BsLinkedin } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="flex mt-2 pt-5 px-2 pb-2 text-white border-t border-y-slate-600">
      <h2>@danielfcdelima@gmail.com</h2>
      <a
        href="https://www.linkedin.com/in/daniel-de-lima-a07aa8223/"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto"
      >
        <BsLinkedin className="text-xl" />
      </a>
    </div>
  );
}
