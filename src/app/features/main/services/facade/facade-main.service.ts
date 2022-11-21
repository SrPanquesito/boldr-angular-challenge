import { Injectable } from '@angular/core';
import { ApiMainService } from '../api/api-main.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeMainService {
  constructor(private _ApiMainService: ApiMainService) { }
}
