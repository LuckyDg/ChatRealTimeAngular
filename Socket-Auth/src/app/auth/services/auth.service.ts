import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable, tap } from 'rxjs';
import { ResponseToken } from 'src/app/components/chat/chat.component';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    // private readonly apiUrl = '/api/auth';
    private readonly apiUrl = environment.apiUrl;
    constructor(private readonly http: HttpClient) { }

    login(email: string, password: string):Observable<{ token: string }> {
        return this.http.post<{token: string}>(`${this.apiUrl}/api/auth/login`, { email, password }).pipe(
            tap(response => {
                const decodeToken = jwtDecode<ResponseToken>(response.token);
                localStorage.setItem('token', response.token);
                localStorage.setItem('role', decodeToken.role);
            })
        )
    }

    // renewToken():Observable<{ token: string }> {
    //     return this.http.post<{token: string}>(`${this.apiUrl}/renewToken`, {});
    // }
}