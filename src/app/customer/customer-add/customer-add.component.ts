import { Component } from '@angular/core';
import { CustomerState } from '../store/reducer/customer.reducer';
import { Store } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';
import { addCustomer } from '../store/action/customer.actions';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent {
 
    constructor(private store: Store<CustomerState>) {
  
    }
 
    addCustomer(customerName: string): void {
  
      const customer = new Customer();
  
      customer.name = customerName;
  
      this.store.dispatch(addCustomer(customer));

    }
  }
