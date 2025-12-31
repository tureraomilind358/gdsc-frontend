import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseCategory } from '../models/course-category.model';

@Injectable({
    providedIn: 'root'
})
export class CourseCategoryService {

    private baseUrl = 'http://localhost:8080/api/course-categories';

    constructor(private http: HttpClient) { }


    getAllCategories(): Observable<CourseCategory[]> {
        return this.http.get<CourseCategory[]>(this.baseUrl);
    }


    getCategoryById(id: string): Observable<CourseCategory> {
        return this.http.get<CourseCategory>(`${this.baseUrl}/${id}`);
    }


    createCategory(data: CourseCategory): Observable<any> {
        return this.http.post(this.baseUrl, data);
    }


    updateCategory(id: string, data: CourseCategory): Observable<any> {
        return this.http.put(`${this.baseUrl}/${id}`, data);
    }


    deleteCategory(id: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
}
