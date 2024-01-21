import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { Observable, of } from 'rxjs';
import { GithubService } from 'src/app/shared/services/github.service';
import { By } from '@angular/platform-browser';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { MockComponent } from 'ng-mocks';
import { HttpResponse } from '@angular/common/http';

class MockGitHubService {
  searchUser(): Observable<any> {
    return null;
  }
}

describe('SearchComponent', () => {
  let injector = TestBed;
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let gitHubService: GithubService;

  // É executado antes de cada teste (assincrono)
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [SearchComponent, MockComponent(CardComponent)],
      providers: [GithubService],
    }).compileComponents();
  });

  // É executado antes de cada teste (sincrono)
  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent); // Selecionando o componente que será usado
    component = fixture.componentInstance; // Fazendo a instância/criando uma 'copia' do componente para usa-lo
    gitHubService = getTestBed().inject(GithubService);
    fixture.detectChanges(); // Detecta mudanças no template (clicks de botão e etc)
  });

  it('Criando componente', () => {
    expect(component).toBeTruthy();
  });

  it(`Inserido o nickname do usuário
      Se o usuário existir
      Deve retornar os dados do usuário`, () => {

    // Determinando os dados que serão retornados da pesquisa
    const mockDataResponse = {
      id: 0,
      name: 'name',
      nickname: 'nickname',
      bio: 'bio',
      login: 'login',
      public_repos: 'repos_pub',
      public_gists: 'repos_prive',
      followers: 'followers',
      following: 'following',
      company: 'company',
      location: 'location',
      avatar_url: 'url do avatar',
      created_at: 'criado em',
      updated_at: 'atualizado em',
    };

    spyOn(gitHubService, 'searchUser').and.returnValue(of(new HttpResponse({ body: mockDataResponse })))

    // Selecionando o botão
    const button = fixture.nativeElement.querySelector('.search__form__button');

    // Colocando um valor no campo
    component.nickname = 'jakkifx';

    // Clicando no botão
    button.click();

    // Verificando se há mudanças
    fixture.detectChanges();

    const dataUser = fixture.debugElement.query(By.directive(MockComponent(CardComponent)));

    expect(gitHubService.searchUser).toHaveBeenCalledTimes(1);
    expect(gitHubService.searchUser).toHaveBeenCalledWith("jakkifx");
    expect(dataUser).toBeTruthy();
  });

  
});
