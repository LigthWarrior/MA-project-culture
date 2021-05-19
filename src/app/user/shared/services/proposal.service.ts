import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Proposal } from '../../../shared/types';

@Injectable({ providedIn: 'root' })
export class ProposalService {
  ROOT_URL = 'http://52.57.253.240:3000/api/proposals';

  constructor(private http: HttpClient) {}

  getProposalById(id: number): Observable<Proposal> {
    const token = localStorage.getItem('token');

    const httpOptions = {
      headers: new HttpHeaders({
       'Content-Type':  'application/json',
        Authorization: `Bearer ${token}`
      })
    };

    return this.http.get<Proposal>(`http://52.57.253.240:3000/api/proposals/${id}.json`, httpOptions).pipe(
      map((proposal: Proposal) => proposal),
      // delay(500)
      delay(500)
    );
  }
}