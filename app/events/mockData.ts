import { Semester } from "./types";

export const semesterData: Semester[] = [
  {
    id: 'spring-2025',
    name: 'Spring 2025',
    current: true,
    events: [
      {
        id: 1,
        title: 'Kickoff Meeting',
        date: '2025-01-15',
        time: '6:00 PM - 7:30 PM',
        location: 'MSC 3301',
        description: 'Welcome back! Join us for the spring semester kickoff. Meet the team, learn about upcoming events, and get ready for an exciting semester.',
        type: 'meeting',
      },
      {
        id: 2,
        title: 'Weekly Contest #12',
        date: '2025-01-22',
        time: '6:00 PM - 8:00 PM',
        location: 'MSC 3301',
        description: 'Practice problems focusing on dynamic programming and graph algorithms.',
        type: 'contest',
      },
      {
        id: 3,
        title: 'Algorithm Workshop: Trees',
        date: '2025-01-29',
        time: '6:00 PM - 7:30 PM',
        location: 'MSC 3301',
        description: 'Deep dive into tree data structures and common tree algorithms.',
        type: 'workshop',
      },
      {
        id: 4,
        title: 'Weekly Contest #13',
        date: '2025-02-05',
        time: '6:00 PM - 8:00 PM',
        location: 'MSC 3301',
        description: 'Focus on greedy algorithms and binary search techniques.',
        type: 'contest',
      },
      {
        id: 5,
        title: 'ICPC Prep Session',
        date: '2025-02-12',
        time: '5:00 PM - 8:00 PM',
        location: 'MSC 3301',
        description: 'Intensive preparation for ICPC regional competition. Team formation and strategy discussion.',
        type: 'workshop',
      },
      {
        id: 6,
        title: 'Mid-Semester Competition',
        date: '2025-03-15',
        time: '1:00 PM - 5:00 PM',
        location: 'MSC 3301',
        description: 'Major competition with prizes! Test your skills against the best.',
        type: 'contest',
      }
    ]
  },
  {
    id: 'fall-2024',
    name: 'Fall 2024',
    current: false,
    events: [
      {
        id: 7,
        title: 'Fall Kickoff',
        date: '2024-08-28',
        time: '6:00 PM - 7:30 PM',
        location: 'MSC 3301',
        description: 'Start of fall semester activities.',
        type: 'meeting',
      },
      {
        id: 8,
        title: 'Intro to Competitive Programming',
        date: '2024-09-10',
        time: '6:00 PM - 7:30 PM',
        location: 'MSC 3301',
        description: 'Beginner-friendly workshop covering the basics.',
        type: 'workshop',
      }
    ]
  }
];