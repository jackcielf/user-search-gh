import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/shared/interfaces/GitHubUser';
import { GithubService } from 'src/app/shared/services/github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  nickname = '';
  errorMessage = '';
  userdata: UserData;

  constructor(private gitHubService: GithubService) {}

  ngOnInit() {}

  serachNickname(): void {
    if (this.nickname) {
      this.gitHubService.searchUser(this.nickname).subscribe(
        (dataResponse: UserData) => {
          console.log(dataResponse.id)
          this.userdata = dataResponse;
          this.errorMessage = '';
        },
        (errorResponse) => {
          this.errorMessage = errorResponse.error.message === 'Not Found' ? "Não encontrado!" : '';
        }
      );
    } else {
      this.errorMessage = 'Digite o nickname';
    }
  }
}
