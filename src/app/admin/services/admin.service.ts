import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

// Define a User interface for type safety
export interface User {
  id?: number;
  name: string;
  email: string;
  role: string;
  active: boolean;
}

@Injectable({ providedIn: 'root' })
export class AdminService {

  private baseUrl = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) { }

  // ✅ Get user by ID
  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${userId}`);
  }

  // ✅ Update user
  updateUser(userId: number, value: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/users/${userId}`, value);
  }

  // ✅ Create user
  createUser(value: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users`, value);
  }

  // ✅ Get all users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  // ✅ Delete user
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/users/${id}`);
  }
}