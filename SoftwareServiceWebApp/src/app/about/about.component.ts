import { Component, OnInit } from '@angular/core';

interface Member {
  name: string;
  headshot: string;
  bio: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  members: Member[] = [
    {
      name: 'Tak Hing Li',
      headshot: 'assets/images/profile-placeholder.png',
      bio: 'Detail-oriented frontend developer with expertise in HTML, CSS, and React, delivering intuitive and visually appealing user interfaces.',
    },
    {
      name: 'Aaron Lou',
      headshot: 'assets/images/aaron.jpg',
      bio: 'AI developer proficient in NLP, computer vision, and ML pipelines, leveraging advanced technologies to solve complex business challenges.',
    },
    {
      name: 'Daniel Miranda',
      headshot: 'assets/images/profile-placeholder.png',
      bio: 'Creative UI/UX developer who combines design principles with coding skills to deliver captivating digital experiences.',
    },
    {
      name: 'Henry Oeng',
      headshot: 'assets/images/profile-placeholder.png',
      bio: 'James Thompson: Experienced backend developer skilled in Python and Java, specializing in scalable server-side applications and robust APIs.',
    },
    {
      name: 'Benjamin Ramos',
      headshot: 'assets/images/profile-placeholder.png',
      bio: 'Skilled backend developer specializing in Ruby and Ruby on Rails, building scalable and secure server-side architectures.',
    },
    {
      name: 'Eden Wong',
      headshot: 'assets/images/profile-placeholder.png',
      bio: 'Passionate frontend developer adept at transforming design concepts into engaging web experiences using HTML, CSS, and Vue.js.',
    },
    {
      name: 'Barus Ashit',
      headshot: 'assets/images/profile-placeholder.png',
      bio: 'Talented UI/UX developer specializing in intuitive interfaces, leveraging user research and prototyping for engaging digital experiences.',
    },

    
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
