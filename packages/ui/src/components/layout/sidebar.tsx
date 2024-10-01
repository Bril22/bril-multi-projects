import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Icons } from "../icons";
import { IconNames } from "../icons/interface";
import { mainMenu } from "../../constants";

type Icon = {
  name: IconNames;
  url?: string;
}
interface ISidebarLayout {
  logo?: StaticImageData;
  title?: string;
  socialMedia?: Icon[];
}

export const SidebarLayout = ({
  logo,
  title,
  socialMedia
}: ISidebarLayout) => {
  return (
    <div className="bg-base-200 min-h-full w-80 p-2 flex flex-col justify-between pb-4">
      <div>
        <div className="p-4 py-3">
          {logo && (
            <Image src={logo} alt="logo" className="fill-black" />
          )}
          {title && (
            <h2 className="text-2xl font-bold">{title}</h2>
          )}
        </div>
        <ul className="menu px-0">
          {mainMenu.map((item, index) => {
            return (
              item.active && (
                <li key={index} className=" ">
                  {item.subItems ? (
                    <details>
                      <summary>
                        <span>{item.name.toUpperCase()}</span>
                        {/* <Icons name={IconNames["arrow-down"]} size={20} /> */}
                      </summary>
                      <ul>
                        {item.subItems.map(
                          (subItem, index) =>
                            subItem.active && (
                              <li key={index}>
                                <Link
                                  href={subItem.url}
                                  className="p-3 focus:text-white"
                                >
                                  {subItem.name.toUpperCase()}
                                </Link>
                              </li>
                            )
                        )}
                      </ul>
                    </details>
                  ) : (
                    <Link href={item.url} className=" ">
                      {" "}
                      {item.name.toUpperCase()}
                    </Link>
                  )}
                </li>
              )
            );
          })}
        </ul>
      </div>
      {socialMedia && (
        <div className='flex gap-2'>
          {socialMedia?.map((item, i) => (
            <Link href={item.url!} key={i} className='flex gap-2 max-w-44'>
              <Icons name={item.name} size={26} />
            </Link>
          ))}
        </div>
      )}
      {/* <div>
        <div className="p-4 py-3">
          <h4>Contact Us</h4>
          <ul className="menu p-0">
            <li>
              <Link href="tel:1234567890">
                <Icons name={IconNames["phone"]} size={20} />
                123-456-7890
              </Link>
            </li>
            <li>
              <Link href="mailto:info@squaremetre.io">
                <Icons name={IconNames["email"]} size={25} />
                info@squaremetre.io
              </Link>
            </li>
          </ul>
        </div> */}

      {/* <div className="px-4 py-3">
          <h4>Follow Us</h4>
        </div> */}
      {/* <ul className="menu menu-horizontal ml-6 p-0 mr-4">
          {socialMedia.map((item, index) => (
            <li key={index} className="px-1">
              <Link
                href={item.url}
                className="btn-square  btn btn-outline rounded-sm"
                target="_blank"
              >
                <Icons
                  name={IconNames[item.icon]}
                  size={28}

                  // className="fill-[#233882]"
                />
              </Link>
            </li>
          ))}
        </ul> */}
      {/* </div> */}
    </div>
  );
};
