import { Component ,OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private topLanguage:Array<any> =[];

  constructor(private appService:AppService){

  }
 
 ngOnInit(){
    this.loadData();
 }

 loadData(){
   this.appService.getData()
   .subscribe(res=>{
     console.log(res);
     this.topLanguage = res;

   });
 }
}

