import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ ApiService ]
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should add an ID to the IDs array', () => {
    const id = 123;
    service.setIds(id);
    expect(service.getIds()).toContain(id);
  });

  it('should send a POST request to delete a task', () => {
    const ids = [123, 456, 789];
    service.setIds(ids[0]);
    service.setIds(ids[1]);
    service.setIds(ids[2]);
    service.deletetask(ids).subscribe(response => {
      expect(response).toBeTruthy();
    });
    const req = httpTestingController.expectOne('http://localhost:8080/deletetask');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(ids);
    req.flush({ status: 'success' });
  });
  
});
