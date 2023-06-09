import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiHttpService } from '../../core/services/apihttpcall.service'
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface IRandomUsers {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
// ];

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})

export class CustomerListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'avatar'];
  // dataSource = ELEMENT_DATA;

  public dataSource: any = MatTableDataSource<IRandomUsers>;

  @ViewChild(MatPaginator, { static: true }) paginator: any = MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: any = MatSort;
  users_data: any;
  constructor(private http: ApiHttpService){}

  ngOnInit(){
    this.get_Users();
  }

  // get users from api
  async get_Users(){
     let resp = await this.http.get(`api/users?${1}`);

     if(resp.data)
     {
      console.log(resp, 'resp');
      this.users_data = resp.data;
      this.dataSource = new MatTableDataSource<IRandomUsers>(this.users_data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // const dataSource = this.users_data;
     }
     

     
  }
  
}
