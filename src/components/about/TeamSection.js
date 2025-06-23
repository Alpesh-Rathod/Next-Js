"use client";

import React from 'react';
import { Linkedin, Twitter, Mail } from 'react-feather';

import Image from "next/image";

// Sample team data
const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'Sarah has over 15 years of experience in the industry and founded our company in 2018.',
    image: '/sarah.jpg',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'sarah@example.com'
    }
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Michael oversees all technical aspects with a background in software architecture and AI.',
    image: '/michael.jpg',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'michael@example.com'
    }
  },
  {
    id: 3,
    name: 'Aisha Patel',
    role: 'Design Director',
    bio: 'Aisha leads our design team with her exceptional creative vision for user-friendly interfaces.',
    image: '/aisha.jpg',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'aisha@example.com'
    }
  }
];

const TeamSection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the talented individuals who make our company thrive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id}
              className="bg-white rounded-xl overflow-hidden border-1 border-[#f2f2f2] hover:shadow transition-shadow duration-300">
             <div className="p-6 flex items-start gap-6">
              
                <div className="flex-shrink-0">
                 <Image
  src={member.image}
  alt={member.name}
  width={128} // equivalent to w-32
  height={128} // equivalent to h-32
  className="rounded-full object-cover border-4 border-white shadow-lg"
/>
                </div>
                
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-[#714B67]">{member.name}</h3>
                  <p className="text-black-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={member.socials.linkedin}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href={member.socials.twitter}
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter size={20} />
                    </a>
                    <a 
                      href={`mailto:${member.socials.email}`}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;