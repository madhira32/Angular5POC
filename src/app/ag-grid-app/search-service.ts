import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {

  constructor() { }
  loadByNumber() {
    return [
      { firstName: 'Satish', lastName: 'Satish', id: 5, value: 10, gender: 'Male' },
      { firstName: 'kumar', lastName: 'Satish', id: 10, value: 15, gender: 'Male' },
      { firstName: 'Reddy', lastName: 'Satish', id: 15, value: 20, gender: 'Male' },
      { firstName: 'Satish', lastName: 'Satish', id: 5, value: 10, gender: 'Male' },
      { firstName: 'kumar', lastName: 'Satish', id: 10, value: 15, gender: 'Male' },
      { firstName: 'Reddy', lastName: 'Satish', id: 15, value: 20, gender: 'Male' },
      { firstName: 'Satish', lastName: 'Satish', id: 5, value: 10, gender: 'Male' },
      { firstName: 'kumar', lastName: 'Satish', id: 10, value: 15, gender: 'Male' },
      { firstName: 'Reddy', lastName: 'Satish', id: 15, value: 20, gender: 'Male' },
      { firstName: 'Satish', lastName: 'Satish', id: 5, value: 10, gender: 'Male' },
      { firstName: 'kumar', lastName: 'Satish', id: 10, value: 15, gender: 'Male' },
      { firstName: 'Reddy', lastName: 'Satish', id: 15, value: 20, gender: 'Male' }];
  }

}
