import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../../../models/user-model";
import {AuthService} from "../../../../services/auth-service";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {UserService} from "../../../../services/user-service";
import {BillingAccountService} from "../../../../services/billingaccount-service";
import {BillingAccountModel} from "../../../../models/billingaccount-model";

@Component({
  selector: 'charging-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profileUser: UserModel;
  public wallets: BillingAccountModel[];
  loaded: boolean = false;
  maxWallets: boolean = false;

  public  selectedWallet: number;
  public sum: number;

  walletsExists: boolean = false;

  constructor(public auth: AuthService,
              private titleService: Title,
              private activeRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router,
              private baService: BillingAccountService) { }

  ngOnInit() {
    this.loadUserById();
  }

  private loadUserById():void{
    const id = this.activeRoute.snapshot.params['id'];
    if(id){
      this.userService.getUSerById(id).subscribe(data=>{
        this.profileUser = data;

        this.baService.getWalletsByUserId(id).subscribe(data=>{
          this.wallets = data as BillingAccountModel[];
          if(this.wallets.length >= 3){
            this.maxWallets = true;
          }
          if(this.wallets.length != 0){
            this.walletsExists = true;
          }
          this.loaded = true;
        });
      }, error1 => {
        let nav: NavigationExtras = {
          queryParams:{
            "code": error1.status,
            "message": error1.statusText
          }
        };
        this.router.navigate(['/error'], nav)
      });
    }
  }

  public onSubmitToUp():void{
    this.wallets[this.selectedWallet].sum += Number(this.sum);
    this.baService.updateWallet(this.wallets[this.selectedWallet]).subscribe(()=>{
      this.wallets = null;
      setTimeout(location.reload.bind(location), 100);
    }, error1 => {
      let nav: NavigationExtras = {
        queryParams:{
          "code": error1.status,
          "message": error1.statusText
        }
      };
      this.router.navigate(['/error'], nav);
      setTimeout(location.reload.bind(location), 100);
    });
  }

  public deleteWallet(id: number):void{
    this.baService.deleteWallet(this.wallets[id]).subscribe(()=>{
      setTimeout(location.reload.bind(location), 100);
    }, error1 =>{
      let nav: NavigationExtras = {
        queryParams:{
          "code": error1.status,
          "message": error1.statusText
        }
      };
      this.router.navigate(['/error'], nav);
    });
  }

}
