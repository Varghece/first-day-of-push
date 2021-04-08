import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TreeNode } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class NodeServiceService {

  constructor(private http: HttpClient) { }

  getFiles() {
    return this.http.get<any>('assets/files.json')
      .toPromise()
      .then(res => res.data as TreeNode[]);
    }

    getLazyFiles() {
    return this.http.get<any>('assets/files-lazy.json')
      .toPromise()
      .then(res => res.data as TreeNode[]);
    }
}
