import { Component, AfterViewInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {

  activities: any[] = [];
  notifications: any[] = [];
  loading = true;
data: any;

  constructor(private dashboardService: DashboardService) {}

  ngAfterViewInit(): void {
    this.loadCharts();
    this.loadDashboardData();
  }

  loadDashboardData() {
    this.dashboardService.getRecentActivities().subscribe(res => {
      this.activities = res;
      this.loading = false;
    });

    this.dashboardService.getNotifications().subscribe(res => {
      this.notifications = res;
    });
  }

  loadCharts() {
    new Chart('monthlyChart', {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun'],
        datasets: [{
          label: 'User Growth',
          data: [200, 350, 500, 700, 950, 1254],
          tension: 0.4
        }]
      }
    });

    new Chart('userChart', {
      type: 'doughnut',
      data: {
        labels: ['Students','Teachers','Centers','Admins'],
        datasets: [{ data: [900, 220, 100, 34] }]
      }
    });
  }
}
