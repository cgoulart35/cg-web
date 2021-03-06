import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, tap } from 'rxjs/operators'
import { IUser } from './user.model'
import { of } from 'rxjs'

@Injectable()
export class AuthService {
    currentUser?:IUser

    constructor(private http: HttpClient) {

    }

    loginUser(userName: string, password: string) {

        let loginInfo = { username: userName, password: password }
        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})}

        return this.http.post('/api/login', loginInfo, options)
            .pipe(tap<any>(data => {
                this.currentUser = <IUser>data['user']
            }))
            .pipe(catchError(err => {
                return of(false)
            }))
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    checkAuthenticationStatus() {
        this.http.get('/api/currentIdentity')
        .pipe(tap<any>(data => {
            if(data instanceof Object) {
                this.currentUser = <IUser>data
            }
        }))
        .subscribe()
    }

    updateCurrentUser(firstName:string, lastName:string) {
        this.currentUser!.firstName = firstName
        this.currentUser!.lastName = lastName

        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})}

        return this.http.put(`/api/users/${this.currentUser!.id}`, this.currentUser, options)
    }

    logout() {
        this.currentUser = undefined

        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})}
        return this.http.post('/api/logout', {}, options)
    }
}