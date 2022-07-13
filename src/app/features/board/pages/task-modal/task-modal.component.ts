import { Component, OnInit } from '@angular/core';
import { FormControl, } from '@angular/forms';
import { first } from 'rxjs/operators';
import { IColumn } from 'src/app/core/models/Column';
import { CurrentColumnService } from 'src/app/core/services/current-column/current-column.service';
import { ITask } from 'src/app/core/models/Task';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss'],
})
export class TaskModalComponent implements OnInit {
  taskDescription!: string;
  openDescriptionFormToggle: boolean = false;
  selectedColumn!: IColumn[];
  selectedTask!: ITask[];

  description = new FormControl('');
  constructor(
    private currentColumnService: CurrentColumnService
  ) {}

  ngOnInit(): void {
    this.currentColumnService._currentColumn
      .pipe(first())
      .subscribe((result) => {
        (this.selectedColumn = result);
      });

    this.currentColumnService._currentTask.pipe(first()).subscribe((result) => {
      (this.selectedTask = result),
        (this.taskDescription = result[0].description!),
        this.description.setValue(result[0].description!)
    });
  }

  openCloseDescriptionForm() {
    this.openDescriptionFormToggle = !this.openDescriptionFormToggle;
    this.description.reset(this.taskDescription);
  }

  saveDescription() {
    this.selectedTask[0].description = this.description.value!;
    this.taskDescription = this.description.value!;
    this.openCloseDescriptionForm();
  }
}
