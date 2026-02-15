////////Angular imports
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PmdsCoreStorageService {
  signOut(){
    window.localStorage.clear();
  }
  setLocalStorageItem(tokenKey:string, token:any){
    window.localStorage.removeItem(tokenKey);
    window.localStorage.setItem(tokenKey, JSON.stringify(token));
  }
  getLocalStorageItem(tokenKey:string): any{
    const token = window.localStorage.getItem(tokenKey);
    return (token && token !== 'undefined') ? JSON.parse(token) : token;
  }
  deleteLocalStorageItem(tokenKey:string){
    window.localStorage.removeItem(tokenKey);
  }
  setSessionStorageItem(tokenKey:string, token:any){
    window.sessionStorage.removeItem(tokenKey);
    window.sessionStorage.setItem(tokenKey, JSON.stringify(token));
  }
  getSessionStorageItem(tokenKey:string): any{
    const token = window.sessionStorage.getItem(tokenKey);
    return token ? JSON.parse(token) : token;
  }
  deleteSessionStorageItem(tokenKey:string){
    window.sessionStorage.removeItem(tokenKey);
  }
}
