import { inject, Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class HomeApisService {
  /**
   * Injection - inject the global http service layer
   */
  httpService = inject(HttpService);

  /**
   * GET - Load data
   */
  getData(searchParams: any) {
    return this.httpService.getData('HOME_APIS', searchParams);
  }

  /**
   * GET - Search about data
   * @param searchKey
   * @returns
   */
  searchData(searchKey: string) {
    return this.httpService.getData('HOME_APIS', { searchKey: searchKey });
  }

  /**
   * POST - Post data
   */
  postData(body: any) {
    return this.httpService.postData('HOME_APIS', body);
  }

  /**
   * PATCH - Patch data
   */
  patchData(id: string, body: any) {
    return this.httpService.patchData('HOME_APIS', body);
  }

  /**
   * PUT - Put data
   */
  putData(id: string, body: any) {
    return this.httpService.putData('HOME_APIS', body);
  }

  /**
   * DELETE - Delete data
   */
  deleteData(id: string) {
    return this.httpService.deleteData('HOME_APIS');
  }
}
