'use client'
import Link from "next/link";


export default function NiraLinks() {
  const message = encodeURIComponent("HI, I found this amazing jewelry store!");
  const socialMediaLink = [{ "nira diamond Jewelry": ["./website.svg", "https://niradiamondjewelry.com"], "instagram": ["./instagram.svg", "https://www.instagram.com/niradiamondjewelry"], "facebook": ["./facebook.svg", "https://www.facebook.com/share/16Um7S8yqC/?mibextid=wwXIfr"], "whatsapp": ["./whatsapp.svg", `https://wa.me/+918799030345?text=${message}`], "youtube": ["./youtube.svg", "https://youtube.com/@niradiamondjewelry"], "pinterest": ["./pinterest.svg", "https://in.pinterest.com/niradiamondjewelry/"] }];
  return (
    <div className="bg-[url('/beige_texture_1.png')] bg-repeat-y bg-cover w-full min-h-screen -z-10 flex flex-col flex-1">

      <div className="p-5 relative z-10 flex flex-col justify-center items-center gap-15">
        <img src="./nira_brand_logo.png" alt="Brand Logo" width="250px" height="auto" className="logo" loading="lazy" />
        <div className="flex flex-col gap-8">
          {
            socialMediaLink.map((media) => {
              return Object.entries(media).map(([name, [src, link]]) => {
                return (
                  <Link href={link} key={name} target="_blank" rel="noopener noreferrer">
                    <div key={name} className="flex gap-4  text-[var(--secondary)] hover:text-[var(--secondary-foreground)] items-center hover:cursor-pointer py-4 px-6  bg-[var(--btnbackground)] transition-all  ease-in-out hover:scale-105 hover:shadow-lg">
                      <img src={src} alt={name} className="w-10 h-10 object-contain" />
                      <span className="text-xl">
                        {name.toUpperCase()}
                      </span>
                    </div>
                  </Link>
                )
              })
            })
          }

        </div>
      </div>

    </div>
  );
}
