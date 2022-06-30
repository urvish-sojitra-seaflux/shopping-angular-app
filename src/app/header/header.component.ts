import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub:  Subscription;
  isAuthenticated = false;

  constructor(private datastorageService: DataStorageService, private authService: AuthService){}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
    this.onFetchData();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  onSaveData(){
    this.datastorageService.saveRecipes();
    
  }

  onFetchData(){
    this.datastorageService.getRecipes().subscribe();
}
}
