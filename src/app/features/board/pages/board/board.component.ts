import { Component, OnInit } from '@angular/core';
import { BoardsMock } from '../../mocks/boards.mocks';
import { IBoard } from 'src/app/core/models/Board';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ITask } from 'src/app/core/models/Task';
import { MatDialog } from '@angular/material/dialog';
import { TaskModalComponent } from 'src/app/features/task-modal/task-modal.component';
import { CurrentColumnService } from 'src/app/core/services/current-column/current-column.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  viewIndex!: number;
  clickedColumnIndex!: number;
  currentBoard!: IBoard;

  addNewTaskToggle: boolean = false;
  addNewColumnToggle: boolean = false;

  columnName = new FormControl('', [Validators.required]);
  taskName = new FormControl('', [Validators.required]);

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private currentColumnService: CurrentColumnService
  ) {}

  ngOnInit(): void {
    this.currentBoard = BoardsMock[+this.router.url.slice(-1) - 1];
  }

  openColumnForm() {
    this.addNewColumnToggle = !this.addNewColumnToggle;
  }

  addNewColumn() {
    this.currentBoard.columns?.push({
      name: this.columnName.value!,
      tasks: [],
    });
    this.addNewColumnToggle = !this.addNewColumnToggle;
    this.columnName.reset();
  }

  cancelAddingColumn() {
    this.addNewColumnToggle = !this.addNewColumnToggle;
    this.columnName.reset();
  }

  dropColumn(event: CdkDragDrop<string[]>) {
    if (event.isPointerOverContainer) {
      this.openTaskForm();
    }
    moveItemInArray(
      this.currentBoard.columns!,
      event.previousIndex,
      event.currentIndex
    );
  }

  dropTask(event: CdkDragDrop<ITask[] | any>, index: number) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        this.currentBoard.columns?.[index].tasks!,
        event.previousIndex,
        event.currentIndex
      );
    } else
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
  }

  openTaskForm(index?: number) {
    this.addNewTaskToggle = !this.addNewTaskToggle;
    this.viewIndex = index!;
    this.taskName.reset();
  }

  addNewTask(index: number) {
    this.currentBoard.columns?.[index].tasks?.push({
      name: this.taskName.value!,
      description: '',
    });
    this.addNewTaskToggle = !this.addNewTaskToggle;
    this.taskName.reset();
  }

  openTaskWindow(clickedTaskIndex: number, clickedColumnIndex: number) {
    this.currentColumnService._currentColumn.next([
      this.currentBoard.columns?.[clickedColumnIndex]!,
    ]);
    this.currentColumnService._currentTask.next([
      this.currentBoard.columns?.[clickedColumnIndex].tasks?.[
        clickedTaskIndex
      ]!,
    ]);
    this.dialog.open(TaskModalComponent, {
      width: '80vw',
      height: '80vh',
      autoFocus: false,
    });
  }
}
