import { WindowControls } from "#components";
import WindowWrapper from "#hoc/wrapper";
import { socials } from "#constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>
      <div className="space-y-5 p-5">
        <div className="relative w-fit">
          <img
            src="/images/splash1.jpg"
            alt="Haroon"
            className="w-40 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-2 -right-2 w-8 h-8 bg-gray-700/25 rounded-full border border-gray-300/30"
          />
          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-2 -left-3 w-8 h-8 bg-gray-700/25 rounded-full border border-gray-300/30"
          />
        </div>

        <h3>Let's Connect</h3>
        <p>Got an idea? A bug to squash? Or just wanna talk tech? I'm in</p>
        <p>
          <a href="mailto:haruna.dauda123@gmail.com">
            haruna.dauda123@gmail.com
          </a>
        </p>
        <ul>
          {socials.map(({ id, text, icon, bg, link }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
const ContactWrapper = WindowWrapper(Contact, "contact");
export default ContactWrapper;
