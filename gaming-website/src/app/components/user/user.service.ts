import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { User, UserForAuth } from 'src/app/types/user';
@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  user: UserForAuth | undefined;
  USER_KEY = '[user]';

  userSubscription: Subscription;

  get isLogged(): boolean {
    return !!this.user;
  }

  getUserId(): string {
    return this.user!._id;
  }

  constructor(private httpClient: HttpClient) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  login(email: string, password: string) {
    return this.httpClient
      .post<UserForAuth>('/api/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  register(
    username: string,
    email: string,
    tel: string,
    password: string,
    rePassword: string
  ) {
    return this.httpClient
      .post<UserForAuth>('/api/register', {
        username,
        email,
        tel,
        password,
        rePassword,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  // getUser() {
  //   return this.httpClient
  //     .get<UserForAuth>('/api/users/profile')
  //     .pipe(tap((user) => this.user$$.next(user)));
  // }
  getUser() {
    return this.httpClient.get<UserForAuth>('/api/users/profile').pipe(
      tap(
        (user) => {
          console.log('Retrieved user from API:', user);
          this.user$$.next(user);
        },
        (error) => {
          console.error('Error retrieving user:', error); 
        }
      )
    );
  }

  logout() {
    return this.httpClient
      .post('/api/logout', {})
      .pipe(tap(() => this.user$$.next(undefined)));
  }
}
