import { contact } from "@/data/contact";
import { Facebook, Instagram, Mail } from "lucide-react";
import React, { Fragment } from "react";
const contactIconData = [
  { name: "email", value: contact.email, icon: Mail },
  { name: "facebook", value: contact.facebook, icon: Facebook },
  { name: "instagram", value: contact.instagram, icon: Instagram },
];

export const ContactIcons = () => {
  return (
    <>
      {contactIconData.map(({ name, value, icon: Icon }) => (
        <Fragment key={name}>
          <a href={value}>
            <Icon size="35" />
          </a>
        </Fragment>
      ))}
    </>
  );
};
