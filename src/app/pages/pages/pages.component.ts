import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { SujetoService } from 'src/app/service/sujeto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

    observador: Subscription = new Subscription();


    data: any[] = []
    sgtItems: number = 205;
    formProduct: FormGroup;


    constructor(private sujetoService: SujetoService,
        private fb: FormBuilder) {

        this.formProduct = this.fb.group({
            "title": ["", Validators.required],
            "price": [, Validators.required]
        });
    }

    //se ejecuta una vez nada mas
    ngOnInit(): void {

        this.sujetoService.sujetoCambio.subscribe({
            next: (data: any) => this.data = data
        });

        this.sujetoService.obtenerData(this.sgtItems).subscribe({
            next: data => this.data = data
        })
    }

    abrirModal(data: any): void {
        this.formProduct.reset();

        // Si se da click en editar se actualiza el formulario con los datos
        if (data != 'crear') {
            this.formProduct = this.fb.group({
                "id": data.id,
                "title": [data.title, Validators.required],
                "price": [data.price, Validators.required]
            });
        }
    }

    operar(): void {
        let id: number = this.formProduct.get('id')?.value;

        // Datos obligatorios y la url debe ser real
        let product = {
            "title": this.formProduct.get('title')?.value,
            "price": this.formProduct.get('price')?.value,
            "description": "vacio",
            "categoryId": 1,
            "images": ["https://placeimg.com/640/480/any"]
        }

        // Si no se encuentra id, se registra el producto
        if (id == null) {
            this.sujetoService.registrarData(product)
            .pipe(switchMap( list => {
                return this.sujetoService.obtenerData(205);
            })).subscribe({
                next: (data: any) => {
                    this.sujetoService.sujetoCambio.next(data);
                }
            })
        } else {
            this.sujetoService.actualizarData(id, product)
            .pipe(switchMap( list => {
                return this.sujetoService.obtenerData(205);
            })).subscribe({
                next: (data: any) => {
                    this.sujetoService.sujetoCambio.next(data);
                }
            })
        }
    }

    //this.tipoCambio = 'actualizado';
    //this.sujetoService.sujetoCambio.next(data.id);
    

    eliminar(data: any): void {
        this.sujetoService.eliminar(data.id)
        .pipe(switchMap( list => {
            return this.sujetoService.obtenerData(205);
        })).subscribe({
            next: (data: any) => {
                this.sujetoService.sujetoCambio.next(data);
            }
        })
    }

    anterior() {

    }
    siguiente() {

    }

}
