import { WindowControls } from "#components";
import WindowWrapper from "#hoc/wrapper";
import { socials } from "#constants";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>
      <div className="space-y-5 p-5">
        <img
          src="/images/adrian.jpg"
          alt="Haroon"
          className="w-20 rounded-full"
        />
        <h3>Let's Connect</h3>
        <p>Got an idea? A bug to squash? Or just wanna talk tech? I'm in</p>
        <a href=""></a>
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
