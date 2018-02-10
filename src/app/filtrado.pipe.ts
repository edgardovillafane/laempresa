import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrado',
  pure: false
})
export class FiltradoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!modelos || !filtro) {
      return modelos;
  }
  // filter items array, items which match and return true will be
  // kept, false will be filtered out
  return modelos.filter(modelos => modelos.categoria.indexOf(filtro.categoria) !== -1);
  }

}
