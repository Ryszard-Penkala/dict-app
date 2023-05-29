import {Dict} from '../../models/dict.model'
import {Subject} from 'rxjs';

export class DictService {
  dictsChanged = new Subject<Dict[]>()

  private dicts: Dict[] = [
    new Dict(1, 'słownik językowy', 'testow słownik językowy'),
    new Dict(123, 'słownik miast', 'testow słownik miast'),
    new Dict(88888, 'słownik zwierząt', 'testow słownik zwierząt')
  ]

  getDicts(): Dict[] {
    return this.dicts.slice();
  }

  getDict(id: number): null | Dict {
    return this.dicts[id];
  }

  addDict(dictionary: Dict) {
    this.dicts.push(dictionary);
    this.dictsChanged.next(this.dicts.slice());
  }

  updateDict(index: number, newDictionary:Dict) {
    this.dicts[index] = newDictionary;
    this.dictsChanged.next(this.dicts.slice());
  }

  deleteDict(index: number) {
    this.dicts.splice(index,1);
    this.dictsChanged.next(this.dicts.slice());
  }

}



