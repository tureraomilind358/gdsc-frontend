import { Component, OnInit } from '@angular/core';
import { NotificationItem } from 'src/app/shared/models/notification.model';

interface CardStat {
  title: string;
  value: number | string;
}

interface Activity {
  activity: string;
  user: string;
  time: string;
  status: string;
}

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {


  stats: CardStat[] = [
    { title: 'Total Students', value: 120 },
    { title: 'Pending Assignments', value: 8 },
    { title: 'Completed Courses', value: 15 }
  ];

  recentActivities: Activity[] = [
    { activity: 'Assignment submitted', user: 'Student A', time: '2025-12-01 10:00', status: 'Completed' },
    { activity: 'New course added', user: 'Admin', time: '2025-12-01 11:00', status: 'Pending' },
    { activity: 'Joined the class', user: 'Student B', time: '2025-11-30 09:00', status: 'Completed' }
  ];

  notifications: NotificationItem[] = [
    {
      title: 'Meeting Reminder',
      message: 'Meeting with principal at 3 PM',
      time: '2025-12-01 09:00',
      icon: '📘',
      color: '#3b82f6',
      read: false
    },
    {
      title: 'System Update',
      message: 'System maintenance scheduled for tomorrow',
      time: '2025-11-30 16:00',
      icon: '⚙️',
      color: '#ef4444',
      read: false
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
