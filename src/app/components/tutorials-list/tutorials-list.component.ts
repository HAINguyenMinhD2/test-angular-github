import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css'],
})
export class TutorialsListComponent implements OnInit {
  tutorials: any;
  currentTutorial = {
    id: '',
    title: '',
    description: '',
    published: false,
    type: '',
  };
  currentIndex = -1;
  title = '';
  style = { color: 'black' };

  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll().subscribe(
      (data) => {
        this.tutorials = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {
      id: '',
      title: '',
      description: '',
      published: false,
      type: '',
    };
    this.currentIndex = -1;
  }

  setActiveTutorial(
    tutorial: {
      id: string;
      title: string;
      description: string;
      published: boolean;
      type: string;
    },
    index: number
  ): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  searchTitle(): void {
    this.tutorialService.findByTitle(this.title).subscribe(
      (data) => {
        this.tutorials = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  changeStyle($event: any) {
    this.style =
      $event.type == 'mouseover' ? { color: 'red' } : { color: 'black' };
  }
}
