import React from "react";
import { BiHome } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
import { GiClubs } from "react-icons/gi";
import { MdCardMembership } from "react-icons/md";

export const Clients = () => {
  return (
    <div className="w-full container mx-auto mt-10">
      <div>
        <div className="flex flex-col items-center text-center space-y-2">
          <p className="font-bold text-3xl">Our Clients</p>
          <p>We have been working with some Fortune 500+ clients </p>
        </div>
        <div className="flex justify-center gap-6 md:gap-20 mt-10">
          <BiHome size={35} />
          <BiHome size={35} />
          <BiHome size={35} />
          <BiHome size={35} />
          <BiHome size={35} />
          <BiHome size={35} />
          <BiHome size={35} />
        </div>
      </div>

      <div className="w-full container mx-auto mt-16">
        <div className="flex flex-col items-center text-center space-y-2">
          <p className="font-bold text-3xl max-w-sm sm:max-w-md">
            Manage your entire community in a single system
          </p>
          <p>We have been working with some Fortune 500+ clients </p>
        </div>
        <div className="flex justify-between max-w-8xl gap-5 mt-10 flex-col sm:flex-row m-20">
          <div className="flex flex-col items-center max-w-sm">
            <MdCardMembership size={35} />
            <span>
              <p className="font-bold text-xl text-center">
                Membership Organizations
              </p>
              <p className="text-center">
                Our Membership management software provides full automation of
                membership renewals and payments
              </p>
            </span>
          </div>

          <div className="flex flex-col items-center max-w-sm">
            <BsBank size={35} />
            <p className="font-bold text-xl text-center">
              National Associations
            </p>
            <p className="text-center">
              Our Membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>

          <div className="flex flex-col items-center max-w-sm">
            <GiClubs size={35} />
            <p className="font-bold text-xl text-center">Clubs and Groups</p>
            <p className="text-center">
              Our Membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
