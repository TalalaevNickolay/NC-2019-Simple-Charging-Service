import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {UserModel} from "../models/user-model";
import {Observable} from "rxjs";

@Injectable()
export class UserService {
  constructor(private http:HttpClient){
  }

  regNewUser(user:UserModel):Observable<UserModel>{
    return this.http.post<UserModel>("/api/user/save", user);
  }

}