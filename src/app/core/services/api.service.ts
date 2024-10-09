import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private endpoint = 'users'
    private domain: string | undefined;

    constructor(private http: HttpClient) {
        this.domain = environment.domain;
    }

    get() {
        return this.http.get(`${this.domain}/${this.endpoint}`)
    }
}