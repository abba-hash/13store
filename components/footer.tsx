import Container from "./ui/container";
import { MdOutlineLocationOn, MdPerson, MdSend } from "react-icons/md";
import { BiPhoneCall, BiSolidMessageEdit, BiUser } from "react-icons/bi";
import { RiArrowRightUpLine } from "react-icons/ri";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-cyan-900 pt-12">
      <Container>
        <div className="flex justify-between  w-full">
          <div className="space-y-2">
            <h3 className="text-white text-base font-medium leading-snug">
              Subscribe
            </h3>
            <p className="text-zinc-400 text-base font-medium leading-snug">
              Get 10% off your first order
            </p>
            <div className="flex py-2 rounded border border-neutral-50 justify-start items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent ml-3 outline-none border-none"
              />
              <MdSend className="mr-3 text-neutral-900" />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-white text-base font-medium leading-snug">
              Contact Us
            </h3>
            <ul>
              <li className="flex items-center">
                <MdOutlineLocationOn className="mr-1 w-4 h-4 text-zinc-400" />
                <span className="text-zinc-400 text-base font-medium leading-snug">
                  123 Main Tudu, Zamfara, Nigeria
                </span>
              </li>
              <li className="flex items-center">
                <BiPhoneCall className="mr-1 w-4 h-4 text-zinc-400" />
                <span className="text-zinc-400 text-base font-medium leading-snug">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center">
                <BiSolidMessageEdit className="mr-1 w-4 h-4 text-zinc-400" />
                <span className="text-zinc-400 text-base font-medium leading-snug">
                  13support@13ciniki.com
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-white text-base font-medium leading-snug">
              Company
            </h3>
            <ul>
              <li className="text-zinc-400 text-base font-medium leading-snug">
                About us
              </li>
              <li className="text-zinc-400 text-base font-medium leading-snug">
                Blog
              </li>
              <li className="text-zinc-400 text-base font-medium leading-snug">
                Returns
              </li>
              <li className="text-zinc-400 text-base font-medium leading-snug">
                Order status
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-white text-base font-medium leading-snug">
              Info
            </h3>
            <ul>
              <li className="text-zinc-400 text-base font-medium leading-snug">
                How it works?
              </li>
              <li className="text-zinc-400 text-base font-medium leading-snug">
                Our promises
              </li>
              <li className="text-zinc-400 text-base font-medium leading-snug">
                FAQ
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-white text-base font-medium leading-snug">
              Download App
            </h3>
            <p className="text-zinc-400 text-base font-medium leading-snug">
              Save $3 with App New User Only
            </p>
            <div className="flex">
              <Image
                src="/images/QrCode.png"
                alt="BarCode"
                width="100"
                height="100"
                priority
                className="w-[76px] h-[76px] border-2 border-white"
              />
              <div className="gap-1 ml-2 space-y-1">
                <Image
                  src="/images/AppStore.png"
                  alt="AppStore"
                  width="100"
                  height="100"
                  priority
                  className="rounded border border-white"
                />
                <Image
                  src="/images/GooglePlay.png"
                  alt="GooglePlay"
                  width="100"
                  height="100"
                  priority
                  className="rounded border border-white"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center sm:justify-start space-x-1">
          <Image
            src="/images/paypal.png"
            alt="GooglePlay"
            width="100"
            height="100"
            priority
            className="rounded w-8 h-6"
          />
          <Image
            src="/images/mastercard.png"
            alt="GooglePlay"
            width="100"
            height="100"
            priority
            className="rounded w-8 h-6"
          />

          <Image
            src="/images/visa.png"
            alt="GooglePlay"
            width="100"
            height="100"
            priority
            className="rounded w-8 h-6"
          />

          <Image
            src="/images/americanexpress.png"
            alt="GooglePlay"
            width="100"
            height="100"
            priority
            className="rounded w-8 h-6"
          />
        </div>
      </Container>
      <div className="p-6 w-full bg-red-300 mt-4">
        <div className="flex justify-between mx-auto max-w-7xl ">
          <div className="text-center">
            <p className="text-stone-300 text-xs font-medium">
              &copy; 2023 13 Ciniki
            </p>
          </div>
          <div className=" gap-8 hidden sm:flex">
            <p className="text-stone-300 text-xs font-medium">
              cookie settings
            </p>
            <p className="text-stone-300 text-xs font-medium">Privacy Policy</p>
            <p className="text-stone-300 text-xs font-medium">
              Terms and Conditions
            </p>
            <p className="text-stone-300 text-xs font-medium">Imprint</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
